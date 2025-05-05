import { ApiError, ApiErrorBody } from "@/lib/apiError";

export type PostLikeRequest = {
  userId: number;
  postId: number;
};

export type PostLikeResponse = {
  id: number;
};

export const PostLikeErrorCodes = [
  "POST_LIKE_UNAUTHORIZED",
  "POST_LIKE_NOT_FOUND",
] as const;

export type PostLikeErrorCode = (typeof PostLikeErrorCodes)[number];

export type PostLikeErrorBody = ApiErrorBody<PostLikeErrorCode>;

export class PostLikeError extends ApiError<PostLikeErrorCode> {
  constructor({ message, code, status, details }: PostLikeErrorBody) {
    super({
      message,
      code,
      status,
      details,
    });
  }
}
