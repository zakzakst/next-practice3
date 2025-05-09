import { http, HttpResponse, PathParams } from "msw";
import {
  PostLoginRequest,
  PostLoginResponse,
  PostLoginErrorCode,
} from "@/app/practice/api/login";
import { host, ApiErrorBody } from "@/app/practice/api";
import {
  PostLoginResponseMock,
  PostLoginError401Mock,
  PostLoginError404Mock,
} from "@/mocks/login";

export const postLoginHandler = http.post<
  PathParams,
  PostLoginRequest,
  PostLoginResponse | ApiErrorBody<PostLoginErrorCode>
>(host("/login"), async ({ request }) => {
  const data = await request.json();
  // console.log(data);
  if (data.password === "password401") {
    return HttpResponse.json(PostLoginError401Mock, { status: 401 });
  }
  if (data.password === "password404") {
    return HttpResponse.json(PostLoginError404Mock, { status: 404 });
  }
  return HttpResponse.json(PostLoginResponseMock);
});
