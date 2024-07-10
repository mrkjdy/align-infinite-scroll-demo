import { forwardRef, PropsWithChildren } from "react";

type PostContainerProps = {};

export default forwardRef<
  HTMLDivElement,
  PropsWithChildren<PostContainerProps>
>(({ children }, ref) => (
  <div ref={ref} className="pb-8 flex flex-col space-y-1">
    {children}
  </div>
));
