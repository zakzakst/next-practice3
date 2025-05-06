"use client";

import { useState } from "react";
import useSWR from "swr";
import { host } from "@/app/api";
import { Button } from "@/components/ui/button";
import { GetSWRResponse } from "@/app/api/swr/type";

const url = host("/swr");
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Sample = () => {
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data, error, isLoading } = useSWR<GetSWRResponse>(
    shouldFetch ? url : null,
    fetcher,
    {
      revalidateOnFocus: false,
    }
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {data && <div>{data.name}</div>}
      <Button onClick={() => setShouldFetch(true)}>fetch</Button>
    </div>
  );
};
