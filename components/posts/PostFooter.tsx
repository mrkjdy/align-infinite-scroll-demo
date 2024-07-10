import Link from "next/link";

type PostFooterProps = {
  href: string;
  username: string;
  alt?: string;
};

export default function PostFooter({ href, username, alt }: PostFooterProps) {
  return (
    <div className="flex justify-left space-x-2">
      <Link href={href} className="font-bold">
        {username}
      </Link>
      <p>{alt}</p>
    </div>
  );
}
