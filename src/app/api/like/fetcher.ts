import { defaultHeaders, host } from "..";
import {
  PostLikeRequest,
  PostLikeResponse,
  PostLikeErrorCode,
  PostLikeErrorBody,
} from "./type";
import { ApiError, UnknownApiError } from "@/lib/apiError";
import { PostLikeResponseMock } from "@/mocks/like";

const url = host("/like");

export const postLike = async (
  request: PostLikeRequest
): Promise<PostLikeResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_MOCK === "false")
    return PostLikeResponseMock;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      const errorData: PostLikeErrorBody = await res.json();
      throw new ApiError<PostLikeErrorCode>(errorData);
    }
    const data: PostLikeResponse = await res.json();
    return data;
  } catch (err) {
    // TODO: ここでApiError<PostLikeErrorCode>がerrに入ってしまう（PostLikeErrorCode以外だったらUnknownApiErrorを返すようにしたい）
    console.error(err);
    throw new UnknownApiError({});
  }
};
