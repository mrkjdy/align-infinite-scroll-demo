import Image from "next/image";
import type { Photo } from "pexels";
import PostFooter from "./PostFooter";
import PostContainer from "./PostContainer";
import { forwardRef } from "react";
import PostBody from "./PostBody";

type PostPhotoProps = {
  photo: Photo;
};

export default forwardRef<HTMLDivElement, PostPhotoProps>(
  function ImagePost({ photo }, ref) {
    return (
      <PostContainer ref={ref}>
        <PostBody href={photo.url}>
          <Image
            src={photo.src.original}
            alt={photo.alt ?? ""}
            width={photo.width}
            height={photo.height}
            loader={({ src, width }) => {
              return `${src}?fit=crop&w=${width}&h=${width}`;
            }}
            sizes="(max-width: 65ch) 100vw, 65ch"
            className="rounded-md"
            priority
          />
        </PostBody>
        <PostFooter
          href={photo.photographer_url}
          username={photo.photographer}
          alt={photo.alt ?? ""}
        />
      </PostContainer>
    );
  },
);
