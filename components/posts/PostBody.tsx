import Link from "next/link";
import { PropsWithChildren } from "react";

type PostBodyProps = {
  href: string;
};

export default ({ children, href }: PropsWithChildren<PostBodyProps>) => (
  <div className="relative group flex items-center justify-center">
    {children}
    <div className="opacity-0 group-hover:opacity-100 duration-300 absolute inset-0 flex items-center justify-center h-full w-full pointer-events-none">
      <Link
        href={href}
        className="bg-white rounded-md p-2 pointer-events-auto"
      >
        {"View on Pexels ->"}
      </Link>
    </div>
  </div>
);
