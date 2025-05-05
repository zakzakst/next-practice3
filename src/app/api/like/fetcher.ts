import { defaultHeaders, host } from "..";
import {
  PostLikeRequest,
  PostLikeResponse,
  PostLikeErrorCodes,
  PostLikeErrorBody,
  PostLikeError,
} from "./type";
import { PostLikeResponseMock } from "@/mocks/like";
// import { UnknownApiError } from "@/lib/apiError";

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
    const errorData: PostLikeErrorBody = await res.json();
    if (PostLikeErrorCodes.includes(errorData.code)) {
      throw new PostLikeError(errorData);
    }
    // throw new UnknownApiError({});
  }
  const data: PostLikeResponse = await res.json();
  return data;
};
