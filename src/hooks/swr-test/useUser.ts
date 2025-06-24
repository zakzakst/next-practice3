import useSWR from "swr";

type UserResponse = {
  name: string;
};

const fetcher = (url: string): Promise<UserResponse> =>
  fetch(url).then((res) => res.json());

export const useUser = () => {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);
  return { data, error, isLoading };
};
