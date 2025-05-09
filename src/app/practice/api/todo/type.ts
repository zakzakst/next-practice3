import { TodoItem } from "@/app/practice/components/todoList";
import { ApiErrorBody } from "@/lib/apiError";

export type GetTodoParams = {
  doneState?: boolean;
  keyword?: string;
};

export type GetTodoResponse = {
  items: TodoItem[];
};

export const GetTodoErrorCodes = ["GET_TODO_NOT_FOUND"] as const;

export type GetTodoErrorCode = (typeof GetTodoErrorCodes)[number];

export type GetTodoErrorBody = ApiErrorBody<GetTodoErrorCode>;
