"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import Post, { PostData } from "../posts/Post";
import PostSkeleton from "../posts/PostSkeleton";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default () => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(`/api/posts`);
      return response.json() as Promise<PostData[]>;
    },
    initialPageParam: 0,
    getNextPageParam: (_lastPage, _allPages, lastPageParam) =>
      lastPageParam + 1,
    retryDelay: 10000,
  });

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  const postComponents = data?.pages.flatMap((postDatas, pageIndex) =>
    postDatas.map((postData, postIndex) => {
      const isLast = pageIndex === data.pages.length - 1 &&
        postIndex === postDatas.length - 1;
      return (
        <Post
          key={(pageIndex * postDatas.length) + postIndex}
          data={postData}
          ref={isLast ? ref : undefined}
        />
      );
    })
  );

  return (
    <div className="flex flex-col max-w-prose px-4">
      {postComponents}
      <PostSkeleton key={postComponents?.length ?? 0} />
    </div>
  );
};
