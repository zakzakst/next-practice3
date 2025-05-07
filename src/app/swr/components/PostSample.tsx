"use client";

import { Button } from "@/components/ui/button";
import { usePostSwrApi } from "./useSwrApi";

export const PostSample = () => {
  const {
    shouldFetch,
    setShouldFetch,
    data,
    error,
    isLoading,
    request,
    setRequest,
  } = usePostSwrApi();

  if (error)
    return (
      <div>
        <p>failed to load</p>
        <p>{JSON.stringify(error.message)}</p>
        <p>{error.message}</p>
      </div>
    );

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      {data && <div>レスポンスID: {data.id}</div>}
      <div>
        <Button onClick={() => setShouldFetch(true)}>fetch</Button>
      </div>
      <div>現在のID: {request.id}</div>
      {shouldFetch && (
        <div className="flex gap-1">
          <Button onClick={() => setRequest({ id: "1" })}>1</Button>
          <Button onClick={() => setRequest({ id: "2" })}>2</Button>
        </div>
      )}
    </div>
  );
};
