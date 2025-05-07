import { NextRequest, NextResponse } from "next/server";
import { GetSWRResponse, PostSWRRequest, PostSWRResponse } from "./type";

const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const GET = async (
  request: NextRequest
): Promise<NextResponse<GetSWRResponse>> => {
  const searchParams = request.nextUrl.searchParams;
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || 1;

  // if (page === "1") {
  //   return NextResponse.json({ name: "taro1" });
  // }
  await sleep(1000);

  // return NextResponse.json({
  //   name: `taro page${page}`,
  //   category: `category${category}`,
  // });
  return NextResponse.json(
    {
      name: `taro page${page}`,
      category: `category${category}`,
    },
    { status: 401 }
  );
  // return NextResponse.json({ name: "taro" });
  // return NextResponse.json({ name: "taro" }, { status: 401 });
};

export const POST = async (
  request: Request
): Promise<NextResponse<PostSWRResponse>> => {
  // NOTE: 上手くいかない。下記が原因？一旦保留してmswで試す
  // https://qiita.com/kojish2018/items/b0b2e9080aab57f5bc28
  // const body: PostSWRRequest = await request.json();
  // const { id } = body;
  // console.log(id);

  await sleep(1000);

  return NextResponse.json({
    id: "1",
  });
};
