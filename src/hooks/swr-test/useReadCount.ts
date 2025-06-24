import useSWR from "swr";

type ReadCountResponse = {
  count: number;
};

const fetcher = (url: string): Promise<ReadCountResponse> =>
  fetch(url).then((res) => res.json());

export const useReadCount = () => {
  const { data, error, isLoading } = useSWR("/api/read-count", fetcher);
  return { data, error, isLoading };
};
