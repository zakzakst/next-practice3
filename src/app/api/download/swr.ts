import useSWRMutation from "swr/mutation";
import {
  PostDownloadRequest,
  PostDownloadResponse,
  PostDownloadErrorCodes,
  PostDownloadErrorCode,
} from "./type";
import { defaultHeaders, host, ApiError, UnknownApiError } from "..";

const postDownloadFetcher = async (
  url: string,
  { arg }: { arg: PostDownloadRequest }
): Promise<PostDownloadResponse> => {
  const res = await fetch(url, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    const error = await res.json();
    if (PostDownloadErrorCodes.includes(error.code)) {
      throw new ApiError<PostDownloadErrorCode>(error);
    }
    throw new UnknownApiError();
  }
  const data = await res.json();
  return data;
};

export const usePostDownload = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    host("/download"),
    postDownloadFetcher
  );
  return {
    trigger,
    error,
    isMutating,
  };
};
