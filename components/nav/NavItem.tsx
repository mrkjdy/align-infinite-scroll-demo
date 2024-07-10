import { PropsWithChildren } from "react";

type NavItemProps = {};

export default function NavItem({ children }: PropsWithChildren<NavItemProps>) {
  return <li>{children}</li>;
}
