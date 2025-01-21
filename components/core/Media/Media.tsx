// Import Next.js dependencies
import Script from "next/script";
import Image from "next/image";

// Component dependencies
import { Figure } from "../Figure/Figure";
import ConditionalWrapper from "../ConditionalWrapper";
import { cn } from "@/lib/utils";

// Component props
export type SharedMediaProps = {
  /** Media source URL */
  src: string;
  /** Width */
  width?: number;
  /** Aspect ratio */
  height?: number;
  /** Caption */
  caption?: string;
  /** Fill */
  fill?: boolean;
};

export type ImageMediaProps = SharedMediaProps & {
  /** Media type */
  type: "media--image";
  /** Image alternate text */
  alt: string;
  /** Image width */
  width: number;
  /** Image height */
  height: number;
};

type OembedProps = SharedMediaProps & {
  /** Media type */
  type: "media--remote_video" | "media--video";
  /** Enable video autoplay */
  autoplay?: 0 | 1;
  /** Enable video loop */
  loop?: 0 | 1;
  /** Allow fullscreen */
  allowFullscreen?: boolean;
  /** Allow picture-in-picture */
  allowPictureInPicture?: boolean;
  /** oEmbed title */
  title?: string;
  /** Aspect ratio */
  aspectRatio?: string;
};

type AudioProps = SharedMediaProps & {
  /** Media Type */
  type: "audio";
  /** filetype */
  fileType: string;
};

export type MediaProps = {
  id?: number | string;
  media: ImageMediaProps | OembedProps | AudioProps;
  className?: string;
};

/**
 * Return the YouTube video ID from a YouTube URL
 *
 * @param url YouTube URL.
 * @returns YouTube video ID.
 */
const getYouTubeURLId = (url: string): string | boolean => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[7].length == 11 ? match[7] : false;
};

/**
 * Return the Vimeo video ID from a Vimeo URL
 *
 * @param url Vimeo URL.
 * @returns Vimeo video ID.
 */
const getVimeoURLId = (url: string): string | boolean => {
  const regExp =
    /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/;
  const parseUrl = regExp.exec(url);

  return parseUrl?.length ? parseUrl[5] : "";
};

/**
 * Returns the calculated padding from an aspect ratio
 *
 * @param aspectRatio Aspect ratio string
 * @returns Padding value
 */
const getAspectRatioPadding = (aspectRatio: string | undefined) => {
  if (!aspectRatio) {
    return "56.6%";
  }

  if (aspectRatio.includes("%")) {
    return aspectRatio;
  } else {
    const [width, height] = aspectRatio.split(":");
    const padding = (parseInt(height) / parseInt(width)) * 100;

    return padding + "%";
  }
};

/** @TODO: Look into using the YouTube & Vimeo API to output oembeds */
export function Media({ media, className }: MediaProps) {
  const { src, width, height, caption, fill } = media;

  console.log(media);

  switch (media.type) {
    case "media--image":
      const { alt } = media;
      return (
        <ConditionalWrapper
          condition={!!caption}
          wrapper={(children) => (
            <Figure
              caption={caption}
              className={cn("relative h-full", className)}
            >
              {children}
            </Figure>
          )}
        >
          <>
            {fill ? (
              <Image
                src={src}
                alt={alt}
                fill
                style={{
                  objectFit: "cover",
                }}
                className={className}
              />
            ) : (
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
              />
            )}
          </>
        </ConditionalWrapper>
      );
      break;
    case "media--video":
      return (
        <video autoPlay loop muted style={{ width: "100%", height: "auto" }}>
          <source src={src} />
        </video>
      );
      break;
    case "media--remote_video":
      const {
        autoplay = 0,
        loop = 0,
        allowFullscreen = true,
        allowPictureInPicture = true,
        title,
        aspectRatio,
      } = media;

      let allow: string = "";
      let isVimeo = false;

      let srcUrl: string = "";

      if (src.includes("vimeo")) {
        const videoId = getVimeoURLId(src);

        isVimeo = true;

        srcUrl = `https://player.vimeo.com/video/${videoId}?`;
        srcUrl += `autoplay=${autoplay}&`;
        srcUrl += `loop=${loop}`;
      } else if (src.includes("youtube") || src.includes("youtu.be")) {
        const videoId = getYouTubeURLId(src);

        srcUrl = `https://www.youtube-nocookie.com/embed/${videoId}?`;

        allow += "accelerometer;clipboard-write;encrypted-media;gyroscope;";
      } else if (src.includes("pdf")) {
        srcUrl = src;
      } else if (src.includes("docx")) {
        srcUrl = `https://docs.google.com/gview?embedded=true&url=${src}`;
      }

      if (allowFullscreen) {
        allow += "fullscreen;";
      }

      if (autoplay) {
        allow += "autoplay;";
      }

      if (allowPictureInPicture) {
        allow += "picture-in-picture;";
      }

      const attrs = {
        title: title,
        allow: allow,
        className: "h-[100%] w-[100%] absolute left-0 top-0",
        src: srcUrl,
        frameBorder: 0,
      };

      let calculatedAspectRatio = aspectRatio;
      if (!calculatedAspectRatio && width && height) {
        calculatedAspectRatio = `${width}:${height}`;
      }

      return (
        <ConditionalWrapper
          condition={!!caption}
          wrapper={(children) => <Figure caption={caption}>{children}</Figure>}
        >
          <>
            <div
              className={"relative"}
              style={{
                paddingTop: getAspectRatioPadding(calculatedAspectRatio),
              }}
            >
              <iframe {...attrs}></iframe>
            </div>
            {isVimeo && (
              <Script src="https://player.vimeo.com/api/player.js"></Script>
            )}
          </>
        </ConditionalWrapper>
      );

      break;
    case "audio":
      return (
        <audio controls>
          <source src={src} type={media?.fileType} />
        </audio>
      );
      break;
  }
}
