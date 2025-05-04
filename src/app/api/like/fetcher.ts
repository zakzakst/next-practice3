import { defaultHeaders, host } from "..";
import {
  PostLikeRequest,
  PostLikeResponse,
  PostLikeErrorBody,
  PostLikeError,
} from "./type";
import { PostLikeResponseMock } from "@/mocks/like";

const url = host("/like");

export const postLike = async (
  request: PostLikeRequest
): Promise<PostLikeResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_MOCK === "false")
    return PostLikeResponseMock;
  const res = await fetch(url, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(request),
  });
  if (!res.ok) {
    // TODO: 上手くハンドリングできていない。調べて対応する
    const errorData: PostLikeErrorBody = await res.json();
    throw new PostLikeError(errorData);
  }
  const data: PostLikeResponse = await res.json();
  return data;
};
