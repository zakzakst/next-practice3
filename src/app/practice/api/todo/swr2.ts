import useSWRMutation from "swr/mutation";
import { useState, useMemo } from "react";
import {
  GetTodoParams,
  GetTodoResponse,
  GetTodoErrorCodes,
  GetTodoErrorCode,
} from "./type";
import { defaultHeaders, host, ApiError, UnknownApiError } from "..";

const getTodoFetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: defaultHeaders,
  });
  if (!res.ok) {
    const error = await res.json();
    if (GetTodoErrorCodes.includes(error.code)) {
      throw new ApiError<GetTodoErrorCode>(error);
    }
    throw new UnknownApiError();
  }
  const data = await res.json();
  return data;
};

export const getTodoDefaultParams: GetTodoParams = {};

export const useGetTodo2 = () => {
  const [params, setParams] = useState<GetTodoParams>(getTodoDefaultParams);

  const url = useMemo(() => {
    const query = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    );
    return host(`/todo?${query.toString()}`);
  }, [params]);

  const { trigger, error, isMutating } = useSWRMutation<GetTodoResponse>(
    url,
    getTodoFetcher
  );

  return {
    trigger,
    error,
    isMutating,
    params,
    setParams,
  };
};
