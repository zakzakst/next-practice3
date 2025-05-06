"use client";

import { postLike, PostLikeRequest, PostLikeError } from "@/app/api/like";
import { toast } from "sonner";
import { ErrorBoundary } from "./ErrorBoundary";

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
        console.log("不明なエラー");
      }
    }
  };

  // NOTE: これでfallbackの内容が表示されるわけではない。
  // ErrorBoundary がキャッチできるのは「レンダリング中に発生した同期エラー」だけで、イベントハンドラ（onClick）内で起きたエラーは対象外です。
  const handleError = () => {
    throw new Error("これは故意に発生させたエラーです");
  };

  return (
    <div>
      <div>
        <ErrorBoundary fallback={<div>エラーが発生しました。</div>}>
          <button onClick={() => handlePostLike(10)}>Post Like</button>
          <button onClick={() => handlePostLike(401)}>Post Like 401</button>
          <button onClick={() => handlePostLike(404)}>Post Like 404</button>
          <button onClick={handleError}>エラー発火</button>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Page;
