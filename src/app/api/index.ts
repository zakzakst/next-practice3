export const host = (path: string) =>
  `${process.env.NEXT_PUBLIC_API_DOMAIN}${process.env.NEXT_PUBLIC_API_BASE_ENDPOINT}${path}`;

export const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
