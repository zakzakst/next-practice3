"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";
import { host } from "@/app/api";
import { GetSWRParams, GetSWRResponse } from "@/app/api/swr/type";

// const url = host("/swr?page=1");
// const url = host("/swr");

const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    // TODO: エラーハンドリングしっかりやる
    if (!res.ok) {
      throw new Error("error");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

const defaultParams: GetSWRParams = {
  page: 1,
  category: 1,
};

export const useSwrApi = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [params, setParams] = useState<GetSWRParams>(defaultParams);

  const url = useMemo(() => {
    const query = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    );
    return host(`/swr?${query.toString()}`);
  }, [params]);

  const { data, error, isLoading } = useSWR<GetSWRResponse>(
    shouldFetch ? url : null,
    fetcher,
    {
      revalidateOnFocus: false,
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
