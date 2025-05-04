import { NextRequest, NextResponse } from "next/server";
import { PostLikeRequest, PostLikeResponse, PostLikeErrorBody } from "./type";
import {
  PostLikeResponseMock,
  PostLikeErrorBodyUnauthorizedMock,
  PostLikeErrorBodyNotFoundMock,
} from "@/mocks/like";

export const POST = async (
  request: NextRequest
): Promise<NextResponse<PostLikeResponse | PostLikeErrorBody>> => {
  const params: PostLikeRequest = await request.json();

  if (params.postId === 401) {
    return NextResponse.json(PostLikeErrorBodyUnauthorizedMock, {
      status: 401,
    });
  }

  if (params.postId === 404) {
    return NextResponse.json(PostLikeErrorBodyNotFoundMock, { status: 404 });
  }

  if (params.postId === 999) {
    // TODO: 不明なエラー実装
  }

  return NextResponse.json(PostLikeResponseMock);
};
