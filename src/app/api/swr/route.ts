import { NextRequest, NextResponse } from "next/server";
import { GetSWRResponse } from "./type";

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

  return NextResponse.json({
    name: `taro page${page}`,
    category: `category${category}`,
  });
  // return NextResponse.json({ name: "taro" });
  // return NextResponse.json({ name: "taro" }, { status: 401 });
};
