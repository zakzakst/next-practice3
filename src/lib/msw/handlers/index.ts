import type { RequestHandler } from "msw";
import { postLikeHandler } from "./like";
import { postSWRHandler } from "./swr";

export const handlers: RequestHandler[] = [postLikeHandler, postSWRHandler];
