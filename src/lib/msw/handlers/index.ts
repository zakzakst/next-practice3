import type { RequestHandler } from "msw";
import { postLikeHandler } from "./like";
import { postSWRHandler } from "./swr";
import { postLoginHandler } from "./login";

export const handlers: RequestHandler[] = [
  postLikeHandler,
  postSWRHandler,
  postLoginHandler,
];
