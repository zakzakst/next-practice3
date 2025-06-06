import { PostLikeResponse, PostLikeErrorBody } from "@/app/api/like";

export const PostLikeResponseMock: PostLikeResponse = {
  id: 1,
};

export const PostLikeUnauthorizedErrorBodyMock: PostLikeErrorBody = {
  code: "POST_LIKE_UNAUTHORIZED",
  message: "いいねを送る権限がありません",
};

export const PostLikeNotFoundErrorBodyMock: PostLikeErrorBody = {
  code: "POST_LIKE_NOT_FOUND",
  message: "指定された投稿が見つかりませんでした",
};
