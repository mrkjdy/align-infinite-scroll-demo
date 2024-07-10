import Link from "next/link";

type PostFooterProps = {
  href: string;
  username: string;
  alt?: string;
};

export default ({ href, username, alt }: PostFooterProps) => (
  <div className="flex justify-left space-x-2">
    <Link href={href} className="font-bold">
      {username}
    </Link>
    <p>{alt}</p>
  </div>
);
