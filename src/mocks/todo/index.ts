import {
  GetTodoResponse,
  GetTodoErrorCode,
} from "@/app/practice/api/todo/type";
import { ApiErrorBody } from "@/app/practice/api";

export const GetTodoResponseMock: GetTodoResponse = {
  todos: [
    {
      id: "1",
      text: "タスク1",
      state: "done",
      createdAt: new Date("2024/1/1"),
      updatedAt: new Date("2024/1/4"),
    },
    {
      id: "2",
      text: "タスク2",
      state: "wip",
      createdAt: new Date("2024/1/1"),
      updatedAt: null,
    },
  ],
};

export const GetTodoError404Mock: ApiErrorBody<GetTodoErrorCode> = {
  code: "GET_TODO_NOT_FOUND",
  message: "該当するタスクが見つかりませんでした",
};
