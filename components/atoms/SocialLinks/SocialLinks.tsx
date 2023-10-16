// Library dependencies
import Link from "@/components/atoms/Link";
import { Mail, Facebook, Instagram } from "lucide-react";

// Types
export interface SocialLinksProps {
  social?: SocialIcon[];
}

export interface SocialIcon {
  id: number;
  url: string;
  target: string;
  type: "email" | "facebook" | "instagram" | "pinterest";
}

export default function SocialLinks({ social }: SocialLinksProps) {
  return (
    <div className="flex flex-row gap-4">
      {social?.map(({ id, url, type, target }) => {
        return (
          <Link href={url} target={target} key={id} className="border-none">
            {type === "email" && <Mail size={24} stroke="currentColor" />}
            {type === "facebook" && <Facebook size={24} fill="currentColor" />}
            {type === "instagram" && <Instagram size={24} />}
          </Link>
        );
      })}
    </div>
  );
}
