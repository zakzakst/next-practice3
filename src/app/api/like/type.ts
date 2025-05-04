import { ApiErrorBody } from "@/lib/apiError";

export type PostLikeRequest = {
  userId: number;
  postId: number;
};

export type PostLikeResponse = {
  id: number;
};

export type PostLikeErrorCode =
  | "POST_LIKE_UNAUTHORIZED"
  | "POST_LIKE_NOT_FOUND";

export type PostLikeErrorBody = ApiErrorBody<PostLikeErrorCode>;
