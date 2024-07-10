import { PostData } from "@/components/posts/Post";
import { createClient, type Photo, type Video } from "pexels";

const { PEXELS_API_KEY } = process.env;

if (PEXELS_API_KEY === undefined) {
  throw new Error("Must set PEXELS_API_KEY");
}

const pexelsClient = createClient(PEXELS_API_KEY);

const per_page = 32;

const photoBuf: Photo[] = [];
let photoPage = 0;

const getPhoto = async (): Promise<Photo> => {
  if (photoBuf.length <= 0) {
    const response = await pexelsClient.photos.curated({
      page: photoPage,
      per_page,
    });
    if ("error" in response) {
      throw new Error(response.error);
    }
    if (typeof response.next_page === "string") {
      photoPage += 1;
    } else {
      photoPage = 0;
    }
    photoBuf.push(...response.photos);
  }
  return photoBuf.pop()!;
};

const videoBuf: Video[] = [];
let videoPage = 0;

const getVideo = async (): Promise<Video> => {
  if (videoBuf.length <= 0) {
    const response = await pexelsClient.videos.popular({
      page: videoPage,
      per_page,
    });
    if ("error" in response) {
      throw new Error(response.error);
    }
    if (typeof response.next_page === "string") {
      videoPage += 1;
    } else {
      videoPage = 0;
    }
    videoBuf.push(...response.videos);
  }
  return videoBuf.pop()!;
};

export async function GET() {
  const posts: PostData[] = [];
  for (let index = 0; index < 4; index += 1) {
    const post = Math.random() > 0.5 ? await getPhoto() : await getVideo();
    posts.push(post);
  }
  return Response.json(posts);
}
