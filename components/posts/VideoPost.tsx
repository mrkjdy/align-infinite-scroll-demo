import type { Video } from "pexels";
import PostFooter from "./PostFooter";
import { useInView } from "react-intersection-observer";
import PostContainer from "./PostContainer";
import PostBody from "./PostBody";
import { forwardRef } from "react";

type PostVideoProps = {
  video: Video;
};

export default forwardRef<HTMLDivElement, PostVideoProps>(
  function VideoPost({ video }: PostVideoProps, containerRef) {
    const [videoRef] = useInView({
      onChange: (inView, entry) => {
        const videoElement = entry.target as HTMLVideoElement;
        if (inView) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
    });

    const sources = video.video_files.map((videoFile, index) => (
      <source
        src={videoFile.link}
        type={videoFile.file_type}
        media={`(max-width: ${videoFile.width}px`}
        key={index}
      />
    ));

    return (
      <PostContainer ref={containerRef}>
        <PostBody href={video.url}>
          <video
            ref={videoRef}
            width={video.width}
            height={video.height}
            controls
            controlsList="nofullscreen nodownload noremoteplayback"
            preload="none"
            loop
            muted
            className="rounded-md"
          >
            {sources}
            Your browser does not support the video tag.
          </video>
        </PostBody>
        <PostFooter
          href={video.user.url}
          username={video.user.name}
          alt={video.tags.toString()}
        />
      </PostContainer>
    );
  },
);
