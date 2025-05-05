import { NextRequest, NextResponse } from "next/server";
import { PostLikeRequest, PostLikeResponse, PostLikeErrorBody } from "./type";
import {
  PostLikeResponseMock,
  PostLikeUnauthorizedErrorBodyMock,
  PostLikeNotFoundErrorBodyMock,
} from "@/mocks/like";
// import { UnknownTestErrorBody, UnknownTestErrorBodyMock } from "@/mocks";

export const POST = async (
  request: NextRequest
): Promise<
  // NextResponse<PostLikeResponse | PostLikeErrorBody | UnknownTestErrorBody>
  NextResponse<PostLikeResponse | PostLikeErrorBody>
> => {
  const params: PostLikeRequest = await request.json();

  if (params.postId === 401) {
    return NextResponse.json(PostLikeUnauthorizedErrorBodyMock, {
      status: 401,
    });
  }

  if (params.postId === 404) {
    return NextResponse.json(PostLikeNotFoundErrorBodyMock, { status: 404 });
  }

  // if (params.postId === 999) {
  //   return NextResponse.json(UnknownTestErrorBodyMock, { status: 999 });
  // }

  return NextResponse.json(PostLikeResponseMock);
};
