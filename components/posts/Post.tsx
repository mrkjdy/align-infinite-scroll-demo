import type { Photo, Video } from "pexels";
import { forwardRef } from "react";
import ImagePost from "./ImagePost";
import VideoPost from "./VideoPost";

export type PostData = Photo | Video;

const isPhoto = (v: unknown): v is Photo =>
  typeof v === "object" &&
  v !== null &&
  "photographer" in v;

type PostProps = {
  data: PostData;
};

export default forwardRef<HTMLDivElement, PostProps>(function Post(
  { data },
  ref,
) {
  return isPhoto(data)
    ? <ImagePost ref={ref} photo={data} />
    : <VideoPost ref={ref} video={data} />;
});
