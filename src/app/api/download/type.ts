// import { ApiErrorBody } from "@/lib/apiError";

export type PostDownloadRequest = {
  targets: string[];
};

export type PostDownloadResponse = {
  url: string;
};

export const PostDownloadErrorCodes = [
  "POST_DOWNLOAD_UNAUTHORIZED",
  "POST_DOWNLOAD_FAILED_MAKE_FILE",
] as const;

export type PostDownloadErrorCode = (typeof PostDownloadErrorCodes)[number];

// export type PostDownloadErrorBody = ApiErrorBody<PostDownloadErrorCode>;
