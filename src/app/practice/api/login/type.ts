export type PostLoginRequest = {
  email: string;
  password: string;
};

export type PostLoginResponse = {
  id: string;
};

export const PostLoginErrorCodes = [
  "POST_LOGIN_UNAUTHORIZED",
  "POST_LOGIN_NOT_FOUND",
] as const;

export type PostLoginErrorCode = (typeof PostLoginErrorCodes)[number];
