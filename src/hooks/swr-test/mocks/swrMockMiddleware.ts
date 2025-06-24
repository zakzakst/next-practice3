import { Middleware, SWRResponse } from "swr";

type MockMap = Record<string, unknown>;

export const swrMultiMockMiddleware = (mockMap: MockMap): Middleware => {
  return (useSWRNext) => (key, fetcher, config) => {
    const data = mockMap[key as string];
    if (data === undefined) {
      // モックにない場合は通常 fetcher を使う（モックしない）
      return useSWRNext(key, fetcher, config);
    }
    return {
      data,
      error: undefined,
      isValidating: false,
      mutate: () => Promise.resolve(data),
    } as SWRResponse;
  };

  // return () => (key) => {
  //   const data = mockMap[key as string];
  //   if (data === undefined) {
  //     throw new Error(`未定義のモックキー: ${key}`);
  //   }
  //   return {
  //     data,
  //     error: undefined,
  //     isValidating: false,
  //     mutate: () => Promise.resolve(data),
  //   } as SWRResponse;
  // };
};
