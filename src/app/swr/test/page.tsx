"use client";

import useSWRMutation from "swr/mutation";
import { PostSWRRequest, PostSWRResponse } from "@/app/api/swr/type";

// NOTE:argでないとダメっぽい
const sendRequest = async (
  url: string,
  { arg }: { arg: PostSWRRequest }
): Promise<PostSWRResponse> => {
  // return fetch(url, {
  //   method: "POST",
  //   body: JSON.stringify(arg),
  // }).then((res) => res.json());

  // try {
  //   const res = await fetch(url, {
  //     method: "POST",
  //     // headers: defaultHeaders,
  //     body: JSON.stringify(arg),
  //   });
  //   // if (!res.ok) {
  //   //   throw new Error("res not ok");
  //   // }
  //   const data = await res.json();
  //   return data;
  // } catch (err) {
  //   console.error(err);
  //   throw new Error("unknown");
  // }
  const res = await fetch(url, {
    method: "POST",
    // headers: defaultHeaders,
    body: JSON.stringify(arg),
  });
  if (!res.ok) {
    // エラーコードの分岐処理がある場合この前に記載
    throw new Error("res not ok");
  }
  const data = await res.json();
  return data;
};

const usePostApi = () => {
  const { trigger, isMutating, data, error } = useSWRMutation(
    "/api/swr",
    sendRequest
  );
  return {
    trigger,
    isMutating,
    data,
    error,
  };
};

export default function Page() {
  const { trigger, isMutating, data, error } = usePostApi();

  return (
    <button
      disabled={isMutating}
      onClick={async () => {
        try {
          trigger({ id: "johndoe" });
          // const result = await trigger({ id: "johndoe" } /* options */);
          // console.log(result);
        } catch (e) {
          // エラーハンドリング
          console.error(e);
        }
      }}
    >
      Create User {JSON.stringify(data?.id)}
      {error?.message}
    </button>
  );
}
