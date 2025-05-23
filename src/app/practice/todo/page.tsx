"use client";

import { TodoList } from "../components/todoList";
import { TodoList2 } from "../components/todoList2";
// import { TodoListItem } from "../components/todoListItem";
import { useGetTodo } from "../api/todo/swr";
import { useState, useEffect } from "react";
import { Pagination } from "../components/pagination";

const Page = () => {
  const [current, setCurrent] = useState(1);
  const { setShouldFetch, data, setParams, error, isLoading } = useGetTodo();

  useEffect(() => {
    setShouldFetch(true);
  }, [setShouldFetch]);

  const onMove = (page: number) => {
    setCurrent(page);
    console.log(page);
    setParams((params) => ({ ...params, page }));
  };

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="mx-auto w-full max-w-md">
      <TodoList
        items={data?.items}
        onUpdateDone={(id, state) => console.log(id, state)}
        onEditText={(id, text) => console.log(id, text)}
      />
      <Pagination current={current} length={10} onMove={onMove} />
      <TodoList2
        todos={[
          {
            id: "1",
            text: "タスク文言1",
            state: "done",
            createdAt: new Date("2025/1/1"),
            updatedAt: new Date("2025/1/1"),
          },
          {
            id: "2",
            text: "タスク文言2",
            state: "wip",
            createdAt: new Date("2025/1/1"),
            updatedAt: null,
          },
        ]}
        onEdit={(id, text) => console.log(id, text)}
        onDelete={(id) => console.log(id, "削除")}
        onChangeDoneState={(id, state) => console.log(id, state)}
      />
      {/* <TodoListItem
        todo={{
          id: "1",
          text: "タスク文言",
          state: "done",
          createdAt: new Date("2025/1/1"),
          updatedAt: new Date("2025/1/1"),
        }}
        onEdit={(text) => console.log(text)}
        onDelete={() => console.log("削除")}
        onChangeDoneState={(state) => console.log(state)}
      /> */}
    </div>
  );
};

export default Page;
