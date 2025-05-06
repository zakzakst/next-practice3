"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";
import { host } from "@/app/api";
import { GetSWRResponse } from "@/app/api/swr/type";

// const url = host("/swr?page=1");
// const url = host("/swr");

const fetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("error");
    }
    const data = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const useSwrApi = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [page, setPage] = useState(1);

  const url = useMemo(() => {
    // TODO: パラメータを渡しやすい形にする
    return host(`/swr?page=${page}`);
  }, [page]);

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
    page,
    setPage,
  };
};
