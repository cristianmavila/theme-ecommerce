// Import Next.js dependencies
import Head from "next/head";
import { useRouter } from "next/router";

export type MetaTagsProps = {
  tag: string;
  attributes: {
    content: string;
    name?: string;
    rel?: string;
    property?: string;
  };
};

export type MetaProps = {
  title?: string;
  tags?: MetaTagsProps[];
};

const BASE_URL = "";
const SITE_DESCRIPTION=""

export function Meta({ title, tags }: MetaProps) {
  const router = useRouter();
  const url = `${BASE_URL}${router.asPath != "/" ? router.asPath : ""}`;

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={url} />
      {tags?.length ? (
        tags.map((tag, index) => {
          if (tag.attributes.rel === "canonical") {
            return null;
          }

          if (tag.attributes.name === "title") {
            return (
              <title key={tag.attributes.name}>{tag.attributes.content}</title>
            );
          }

          if (tag.attributes.property === "og:url") {
            return <meta key={index} property="og:url" content={url} />;
          }

          const Tag = tag.tag as keyof JSX.IntrinsicElements;
          return <Tag key={index} {...tag.attributes}></Tag>;
        })
      ) : (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta name="robots" content="index, follow" />
        </>
      )}
    </Head>
  );
}
