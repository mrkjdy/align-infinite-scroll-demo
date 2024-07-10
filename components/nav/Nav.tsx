import { PropsWithChildren } from "react";

type NavProps = {};

export default ({ children }: PropsWithChildren<NavProps>) => (
  <nav className="sticky top-0 w-full flex flex-row py-2 z-10 bg-white">
    <ul className="flex w-full space-x-4 px-4 justify-center">
      {children}
    </ul>
  </nav>
);
