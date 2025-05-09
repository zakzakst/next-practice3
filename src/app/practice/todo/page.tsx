"use client";

import { TodoList } from "../components/todoList";
import { useGetTodo } from "../api/todo/swr";
import { useState, useEffect } from "react";
import { Pagination } from "../components/pagination";

const Page = () => {
  const [current, setCurrent] = useState(1);
  const { setShouldFetch, data, setParams, error, isLoading } = useGetTodo();

  useEffect(() => {
    // setParams({ doneState: false, keyword: "401" });
    setShouldFetch(true);
  }, [setShouldFetch, setParams]);

  const onMove = (page: number) => {
    setCurrent(page);
    console.log(page);
  };

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <TodoList
        items={data?.items}
        onUpdateDone={(id, state) => console.log(id, state)}
        onEditText={(id, text) => console.log(id, text)}
      />
      <Pagination current={current} length={10} onMove={onMove} />
    </>
  );
};

export default Page;
