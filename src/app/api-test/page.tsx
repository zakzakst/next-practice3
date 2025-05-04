"use client";

import { postLike, PostLikeRequest } from "@/app/api/like";

const PostLikeRequestBase: PostLikeRequest = {
  postId: 10,
  userId: 1,
};

const Page = () => {
  const handlePostLike = async (num: number) => {
    try {
      const data = await postLike({ ...PostLikeRequestBase, postId: num });
      console.log(data.id);
    } catch (err) {
      // TODO: エラーの型を利用してtoast表示に反映する
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <button onClick={() => handlePostLike(10)}>Post Like</button>
        <button onClick={() => handlePostLike(401)}>Post Like 401</button>
        <button onClick={() => handlePostLike(404)}>Post Like 404</button>
      </div>
    </div>
  );
};

export default Page;
