import { PostData } from "@/components/posts/Post";
import { createClient } from "pexels";

const { PEXELS_API_KEY } = process.env;

if (PEXELS_API_KEY === undefined) {
  throw new Error("Must set PEXELS_API_KEY");
}

const pexelsClient = createClient(PEXELS_API_KEY);

const per_page = 8;

const getPhotos = async (page: number) => {
  const photosResponse = await pexelsClient.photos.curated({ page, per_page });
  if ("error" in photosResponse) {
    throw new Error(photosResponse.error);
  }
  return photosResponse;
};

const getVideos = async (page: number) => {
  const videosResponse = await pexelsClient.videos.popular({ page, per_page });
  if ("error" in videosResponse) {
    throw new Error(videosResponse.error);
  }
  return videosResponse;
};

export async function GET() {
  const page = Math.round(Math.random() * 1000);
  const posts: PostData[] = [];
  if (Math.random() > 0.5) {
    const photosResponse = await getPhotos(page);
    posts.push(...photosResponse.photos);
  } else {
    const videosResponse = await getVideos(page);
    posts.push(...videosResponse.videos);
  }
  return Response.json(posts);
}
