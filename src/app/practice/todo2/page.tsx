"use client";

import { useState, useEffect, useCallback } from "react";
import { TodoList2 } from "../components/todoList2";
import { useGetTodo2 } from "../api/todo/swr2";
import { Todo } from "@/types/todo";
import { Pagination } from "../components/pagination";

const Page = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const { trigger, error, isMutating, params, setParams } = useGetTodo2();

  const updateTodos = useCallback(async () => {
    const res = await trigger();
    setTodos(res.todos);
  }, [trigger, setTodos]);

  const movePage = (page: number) => {
    setParams((params) => ({ ...params, page }));
  };

  // useEffect(() => {
  //   setParams({
  //     page: 1,
  //   });
  // }, [setParams]);

  useEffect(() => {
    updateTodos();
  }, [updateTodos, params]);

  if (error) return <p>{error.message}</p>;
  if (isMutating) return <p>Loading...</p>;

  return (
    <div className="mx-auto w-full max-w-md">
      <p>{JSON.stringify(params)}</p>
      {todos && (
        <TodoList2
          todos={todos}
          onEdit={(id, text) => console.log(id, text)}
          onDelete={(id) => console.log(id, "削除")}
          onChangeDoneState={(id, state) => console.log(id, state)}
        />
      )}
      {/* TODO: getTodoのレスポンスでlengthの値を設定する */}
      <Pagination
        current={params.page || 1}
        length={10}
        onMove={movePage}
        className="mt-4"
      />
    </div>
  );
};

export default Page;
