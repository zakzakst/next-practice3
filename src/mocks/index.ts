import { ApiErrorBody } from "@/lib/apiError";

export type UnknownTestErrorBody = ApiErrorBody<"UNKNOWN_TEST">;

export const UnknownTestErrorBodyMock: UnknownTestErrorBody = {
  code: "UNKNOWN_TEST",
  message: "不明なエラー",
};
