import { http, HttpResponse, PathParams } from "msw";
import {
  PostLikeRequest,
  PostLikeResponse,
  PostLikeErrorBody,
} from "@/app/api/like";
import {
  PostLikeResponseMock,
  PostLikeUnauthorizedErrorBodyMock,
  PostLikeNotFoundErrorBodyMock,
} from "@/mocks/like";
import { host } from "@/app/api";

const url = host("/like");

export const postLikeHandler = http.post<
  PathParams,
  PostLikeRequest,
  PostLikeResponse | PostLikeErrorBody
>(url, async ({ request }) => {
  const data = await request.json();
  if (data.postId === 401) {
    return HttpResponse.json(PostLikeUnauthorizedErrorBodyMock, {
      status: 401,
    });
  }
  if (data.postId === 404) {
    return HttpResponse.json(PostLikeNotFoundErrorBodyMock, { status: 404 });
  }
  return HttpResponse.json(PostLikeResponseMock);
});
