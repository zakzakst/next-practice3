import { render } from "@testing-library/react";
import { TodoListItem } from ".";
import { Todo } from "@/types/todo";

const setup = () => {
  const onEditFn = jest.fn();
  const onDeleteFn = jest.fn();
  const onChangeDoneStateFn = jest.fn();
  const todo: Todo = {
    id: "1",
    text: "TODO1",
    state: "wip",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const { getByRole } = render(
    <TodoListItem
      todo={todo}
      onEdit={onEditFn}
      onDelete={onDeleteFn}
      onChangeDoneState={onChangeDoneStateFn}
    />
  );
  return {
    onEditFn,
    onDeleteFn,
    onChangeDoneStateFn,
    getByRole,
  };
};

test("ボタンの初期状態が正しい", () => {
  const { getByRole } = setup();
  expect(getByRole("button", { name: "完了にする" })).toBeInTheDocument();
  expect(getByRole("button", { name: "編集する" })).toBeInTheDocument();
  expect(getByRole("button", { name: "削除する" })).toBeInTheDocument();
});
