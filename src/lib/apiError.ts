export type ApiErrorBody<ErrorCode> = {
  message: string;
  code: ErrorCode;
  status?: number;
  details?: unknown;
};

// export type DefaultApiErrorCode =
//   | "NOT_FOUND"
//   | "UNAUTHORIZED"
//   | "VALIDATION_ERROR";

export class ApiError<
  // ErrorCode extends string = DefaultApiErrorCode
  ErrorCode extends string = string
> extends Error {
  code: ErrorCode;
  status?: number;
  details?: unknown;

  constructor({ message, code, status, details }: ApiErrorBody<ErrorCode>) {
    super(message);
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

// TODO: 利用先で`new UnknownApiError({})`のような書き方をする必要がある。「{}」を記述しなくてもいいように修正したい
// NOTE: 作ったはいいが、あまり使いどころなさそう。。メモとしてコメント残しておく
// ⇒修正できた。使いどころも思いついた
export class UnknownApiError extends ApiError<"UNKNOWN"> {
  constructor({
    status,
    details,
  }: Omit<ApiErrorBody<"UNKNOWN">, "message" | "code">) {
    super({
      message: "不明なエラーが発生しました",
      code: "UNKNOWN",
      status,
      details,
    });
  }
}
