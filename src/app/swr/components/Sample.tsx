"use client";

// import { useState } from "react";
// import useSWR from "swr";
// import { host } from "@/app/api";
import { Button } from "@/components/ui/button";
// import { GetSWRResponse } from "@/app/api/swr/type";
import { useSwrApi } from "./useSwrApi";

// const url = host("/swr");
// // const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const fetcher = async (url: string) => {
//   try {
//     const res = await fetch(url);
//     if (!res.ok) {
//       throw new Error("error");
//     }
//     const data = await res.json();
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

export const Sample = () => {
  // const [shouldFetch, setShouldFetch] = useState(false);

  // const { data, error, isLoading } = useSWR<GetSWRResponse>(
  //   shouldFetch ? url : null,
  //   fetcher,
  //   {
  //     revalidateOnFocus: false,
  //   }
  // );
  const {
    shouldFetch,
    setShouldFetch,
    data,
    error,
    isLoading,
    params,
    setParams,
  } = useSwrApi();

  if (error)
    return (
      <div>
        <p>failed to load</p>
        <p>{JSON.stringify(error)}</p>
      </div>
    );
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {data && <div>{data.name}</div>}
      <div>
        <Button onClick={() => setShouldFetch(true)}>fetch</Button>
      </div>
      <div>現在のページ: {params.page}</div>
      <div>現在のカテゴリー: {params.category}</div>
      {shouldFetch && (
        <div className="flex gap-1">
          <Button
            onClick={() =>
              setParams((current) => ({ ...current, page: current.page + 1 }))
            }
          >
            +
          </Button>
          <Button
            onClick={() =>
              setParams((current) => ({ ...current, page: current.page - 1 }))
            }
            disabled={params.page < 2}
          >
            -
          </Button>
          <Button
            onClick={() =>
              setParams((current) => ({ ...current, category: 2 }))
            }
          >
            カテゴリー2
          </Button>
        </div>
      )}
    </div>
  );
};
