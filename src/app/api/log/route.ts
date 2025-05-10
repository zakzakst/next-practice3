import { NextRequest, NextResponse } from "next/server";
import { PostLogRequest, PostLogResponse, PostLogErrorBody } from "./type";
import { ApiErrorBody } from "..";

export const POST = async (
  request: NextRequest
): Promise<
  NextResponse<
    PostLogResponse | PostLogErrorBody | ApiErrorBody<"MOCK_ERROR_CODE">
  >
> => {
  const { userId, content }: PostLogRequest = await request.json();
  const date = new Date();

  if (userId === "1") {
    // return NextResponse.json(
    //   { code: "INVALID_CONTENT", message: "不正なテキストが入力されています" },
    //   { status: 401 }
    // );
    return NextResponse.json(
      { code: "MOCK_ERROR_CODE", message: "不明なエラーのテスト用エラー" },
      { status: 503 }
    );
  }

  const response: PostLogResponse = {
    log: {
      id: date.getTime().toString(),
      content,
      createdAt: date,
      updatedAt: date,
    },
  };

  return NextResponse.json(response);
};
