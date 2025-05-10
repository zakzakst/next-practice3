import { ApiErrorBody } from "@/lib/apiError";

export type Log = {
  id: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
};

export type PostLogRequest = {
  userId: string;
  content: string;
};

export type PostLogResponse = {
  log: Log;
};

export const PostLogErrorCodes = ["INVALID_CONTENT"] as const;

export type PostLogErrorCode = (typeof PostLogErrorCodes)[number];

export type PostLogErrorBody = ApiErrorBody<PostLogErrorCode>;
