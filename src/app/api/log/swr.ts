import useSWRMutation from "swr/mutation";
import {
  PostLogRequest,
  PostLogResponse,
  PostLogErrorCodes,
  PostLogErrorCode,
} from "./type";
import { defaultHeaders, host, ApiError, UnknownApiError } from "..";

const postLogFetcher = async (
  url: string,
  { arg }: { arg: PostLogRequest }
): Promise<PostLogResponse> => {
  const res = await fetch(url, {
    method: "POST",
    headers: defaultHeaders,
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    const error = await res.json();
    if (PostLogErrorCodes.includes(error.code)) {
      throw new ApiError<PostLogErrorCode>(error);
    }
    throw new UnknownApiError();
  }
  const data = await res.json();
  return data;
};

export const usePostLog = () => {
  const { trigger, error, isMutating } = useSWRMutation(
    host("/log"),
    postLogFetcher
  );
  return {
    trigger,
    error,
    isMutating,
  };
};
