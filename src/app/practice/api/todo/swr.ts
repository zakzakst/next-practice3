"use client";

import useSWR from "swr";
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
const getTodoInitData: GetTodoResponse = { items: [] };

export const useGetTodo = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
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

  const { data, error, isLoading } = useSWR<GetTodoResponse>(
    shouldFetch ? url : null,
    getTodoFetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      fallbackData: getTodoInitData,
    }
  );

  return {
    shouldFetch,
    setShouldFetch,
    data,
    error,
    isLoading,
    params,
    setParams,
  };
};
