"use client";

import { TodoList } from "../components/todoList";
import { GetTodoItemsMock } from "@/mocks/todo";

const Page = () => {
  return (
    <TodoList
      items={GetTodoItemsMock}
      onUpdateDone={(id, state) => console.log(id, state)}
      onEditText={(id, text) => console.log(id, text)}
    />
  );
};

export default Page;
