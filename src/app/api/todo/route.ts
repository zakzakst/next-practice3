import { NextRequest, NextResponse } from "next/server";
import {
  GetTodoResponse,
  GetTodoErrorBody,
} from "@/app/practice/api/todo/type";
import { GetTodoResponseMock, GetTodoError404Mock } from "@/mocks/todo";

export const GET = async (
  request: NextRequest
): Promise<NextResponse<GetTodoResponse | GetTodoErrorBody>> => {
  const searchParams = request.nextUrl.searchParams;
  // NOTE: モックサーバー作る時に便利そうなのでメモしておく
  // https://shanabrian.com/web/javascript/urlsearchparams.php
  const keyword = searchParams.get("keyword");
  if (keyword === "404") {
    return NextResponse.json(GetTodoError404Mock, { status: 404 });
  }

  return NextResponse.json(GetTodoResponseMock);
};
