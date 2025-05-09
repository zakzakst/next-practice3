"use client";

import { TodoList } from "../components/todoList";
import { useGetTodo } from "../api/todo/swr";
import { useEffect } from "react";

const Page = () => {
  const { setShouldFetch, data, setParams, error, isLoading } = useGetTodo();

  useEffect(() => {
    // setParams({ doneState: false, keyword: "401" });
    setShouldFetch(true);
  }, [setShouldFetch, setParams]);

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <TodoList
      items={data?.items}
      onUpdateDone={(id, state) => console.log(id, state)}
      onEditText={(id, text) => console.log(id, text)}
    />
  );
};

export default Page;
