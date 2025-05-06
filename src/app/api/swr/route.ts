import {
  // NextRequest,
  NextResponse,
} from "next/server";
import { GetSWRResponse } from "./type";

export const GET = (): NextResponse<GetSWRResponse> => {
  return NextResponse.json({ name: "taro" });
};
