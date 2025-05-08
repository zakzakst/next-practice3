import { http, HttpResponse, PathParams } from "msw";
import { PostSWRRequest, PostSWRResponse } from "@/app/api/swr/type";
import { host } from "@/app/api";

const url = host("/swr");

export const postSWRHandler = http.post<
  PathParams,
  PostSWRRequest,
  PostSWRResponse
>(url, async ({ request }) => {
  const data = await request.json();
  console.log(data);
  // return HttpResponse.json({ id: "2" });
  return HttpResponse.json({ id: "2" }, { status: 401 });
});
