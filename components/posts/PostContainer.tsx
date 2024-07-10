import { forwardRef, PropsWithChildren } from "react";

type PostContainerProps = {};

export default forwardRef<
  HTMLDivElement,
  PropsWithChildren<PostContainerProps>
>(function PostContainer({ children }, ref) {
  return (
    <div ref={ref} className="pb-8 flex flex-col space-y-1">
      {children}
    </div>
  );
});
