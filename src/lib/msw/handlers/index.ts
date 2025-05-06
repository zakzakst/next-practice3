import type { RequestHandler } from "msw";
import { postLikeHandler } from "./like";

export const handlers: RequestHandler[] = [postLikeHandler];
