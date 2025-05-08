"use client";

import { useState, useMemo } from "react";
import useSWR from "swr";
import { defaultHeaders, host } from "@/app/api";
import useSWRMutation from "swr/mutation";
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

// TODO: 多分requestの渡し方が間違っている。triggerを使う必要あり？
// https://zenn.dev/dev_commune/articles/55a4ad785e233e#検証内容
const postFetcher = async (
  url: string,
  { request }: { request: PostSWRRequest }
) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: defaultHeaders,
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

export const updateUser = async (
  url: string,
  { arg }: { arg: PostSWRRequest }
): Promise<PostSWRResponse> => {
  // await fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(arg),
  //   // headers: {
  //   //   Authorization: `Bearer ${arg}`
  //   // }
  // });
  try {
    const res = await fetch(url, {
      method: "POST",
      // headers: defaultHeaders,
      body: JSON.stringify(arg),
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

export const usePostSwrApi2 = () => {
  const { data, trigger, error, isMutating } = useSWRMutation<PostSWRResponse>(
    host("/swr"),
    updateUser
  );

  return {
    data,
    trigger,
    error,
    isMutating,
  };
};
