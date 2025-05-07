import { ApiError, ApiErrorBody } from "@/lib/apiError";

export type GetSWRParams = {
  page: number;
  category: number;
};

export type GetSWRResponse = {
  name: string;
};

export const SwrErrorCodes = ["SWR_UNAUTHORIZED", "SWR_NOT_FOUND"] as const;

export type SwrErrorCode = (typeof SwrErrorCodes)[number];

export type SwrErrorBody = ApiErrorBody<SwrErrorCode>;

export class SwrError extends ApiError<SwrErrorCode> {
  constructor({ message, code, status, details }: SwrErrorBody) {
    super({
      message,
      code,
      status,
      details,
    });
  }
}

export type PostSWRRequest = {
  id: string;
};

export type PostSWRResponse = {
  id: string;
};
