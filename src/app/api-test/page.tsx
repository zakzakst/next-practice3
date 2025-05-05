"use client";

import { postLike, PostLikeRequest, PostLikeError } from "@/app/api/like";
import { toast } from "sonner";

const PostLikeRequestBase: PostLikeRequest = {
  postId: 10,
  userId: 1,
};

const Page = () => {
  const handlePostLike = async (num: number) => {
    try {
      const data = await postLike({ ...PostLikeRequestBase, postId: num });
      toast.success(`ID:${data.id}の投稿にいいねしました`);
    } catch (err) {
      if (err instanceof PostLikeError) {
        toast.error(err.message);
      } else {
        console.error(err);
        // TODO: エラー画面を表示する（useErrorBoundary使えるようになる）
        console.log("不明なエラー");
      }
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handlePostLike(10)}>Post Like</button>
        <button onClick={() => handlePostLike(401)}>Post Like 401</button>
        <button onClick={() => handlePostLike(404)}>Post Like 404</button>
        {/* <button onClick={() => handlePostLike(999)}>Post Like 不明</button> */}
      </div>
    </div>
  );
};

export default Page;
