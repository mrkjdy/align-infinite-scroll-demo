import { PropsWithChildren } from "react";

type NavItemProps = {};

export default ({ children }: PropsWithChildren<NavItemProps>) => (
  <li>{children}</li>
);
