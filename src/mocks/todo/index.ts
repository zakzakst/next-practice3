import { TodoItem } from "@/app/practice/components/todoList";

export const GetTodoItemsMock: TodoItem[] = [
  {
    id: "1",
    text: "タスク1",
    done: false,
    createdAt: new Date("2024/1/1"),
    updatedAt: new Date("2024/1/4"),
  },
  {
    id: "2",
    text: "タスク2",
    done: false,
    createdAt: new Date("2024/1/1"),
    updatedAt: null,
  },
];
