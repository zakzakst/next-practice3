"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";
import { host } from "@/app/api";
import {
  GetSWRParams,
  GetSWRResponse,
  SwrErrorCodes,
  // SwrErrorBody,
  SwrError,
  PostSWRRequest,
  PostSWRResponse,
} from "@/app/api/swr/type";
import { UnknownApiError } from "@/lib/apiError";

// const url = host("/swr?page=1");
// const url = host("/swr");

const getFetcher = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      const errorData = await res.json();
      if (SwrErrorCodes.includes(errorData.code)) {
        throw new SwrError(errorData);
      }
      throw new UnknownApiError({});
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new UnknownApiError({});
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
    getFetcher,
    {
      // revalidateIfStale: false,
      revalidateOnFocus: false,
      // revalidateOnReconnect: false,
      shouldRetryOnError: false,
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

const postFetcher = async (url: string, request: PostSWRRequest) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      throw new UnknownApiError({});
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new UnknownApiError({});
  }
};

export const usePostSwrApi = () => {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [request, setRequest] = useState<PostSWRRequest>({ id: "2" });

  const { data, error, isLoading } = useSWR<PostSWRResponse>(
    shouldFetch ? host("/swr") : null,
    postFetcher,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
    }
  );

  return {
    shouldFetch,
    setShouldFetch,
    data,
    error,
    isLoading,
    request,
    setRequest,
  };
};
