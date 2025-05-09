import {
  PostLoginResponse,
  PostLoginErrorCode,
} from "@/app/practice/api/login";
import { ApiErrorBody } from "@/app/practice/api";

export const PostLoginResponseMock: PostLoginResponse = {
  id: "1",
};

export const PostLoginError401Mock: ApiErrorBody<PostLoginErrorCode> = {
  code: "POST_LOGIN_UNAUTHORIZED",
  message: "ログイン権限がありません",
};

export const PostLoginError404Mock: ApiErrorBody<PostLoginErrorCode> = {
  code: "POST_LOGIN_NOT_FOUND",
  message: "該当するユーザーが見つかりませんでした",
};
