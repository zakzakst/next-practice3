import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoListItem } from ".";
import { Todo } from "@/types/todo";

const user = userEvent.setup();

const setup = () => {
  const onEditFn = jest.fn();
  const onDeleteFn = jest.fn();
  const onChangeDoneStateFn = jest.fn();
  const todo: Todo = {
    id: "1",
    text: "TODO1",
    state: "wip",
    createdAt: new Date("2025/1/1"),
    updatedAt: new Date("2025/1/1"),
  };
  render(
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
  };
};

test("ボタンの初期状態が正しい", () => {
  setup();
  expect(
    screen.getByRole("button", { name: "完了にする" })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "編集する" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "削除する" })).toBeInTheDocument();
});

test("編集状態の切替ができる", async () => {
  setup();
  const editButtonEl = screen.getByRole("button", { name: "編集する" });
  await user.click(editButtonEl);
  act(() => {
    expect(
      screen.queryByRole("button", { name: "編集する" })
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "編集解除" })
    ).toBeInTheDocument();
  });
  const resetButtonEl = screen.getByRole("button", { name: "編集解除" });
  await user.click(resetButtonEl);
  act(() => {
    expect(
      screen.getByRole("button", { name: "編集する" })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "編集解除" })
    ).not.toBeInTheDocument();
  });
});

test("完了状態の切替が発火する", async () => {
  const { onChangeDoneStateFn } = setup();
  const changeDoneStateButtonEl = screen.getByRole("button", {
    name: "完了にする",
  });
  await user.click(changeDoneStateButtonEl);
  expect(onChangeDoneStateFn).toHaveBeenCalledTimes(1);
  expect(onChangeDoneStateFn).toHaveBeenCalledWith("1", "done");
});

test("アイテム削除が発火する", async () => {
  const { onDeleteFn } = setup();
  const deleteButtonEl = screen.getByRole("button", {
    name: "削除する",
  });
  await user.click(deleteButtonEl);
  expect(onDeleteFn).toHaveBeenCalledTimes(1);
  expect(onDeleteFn).toHaveBeenCalledWith({
    id: "1",
    text: "TODO1",
    state: "wip",
    createdAt: new Date("2025/1/1"),
    updatedAt: new Date("2025/1/1"),
  });
});

test("編集状態反映が発火する", async () => {
  const { onEditFn } = setup();
  const editModeButtonEl = screen.getByRole("button", { name: "編集する" });
  await user.click(editModeButtonEl);
  await act(async () => {
    const editInputEl: HTMLInputElement = screen.getByRole("textbox");
    expect(editInputEl).toBeInTheDocument();
    expect(editInputEl.value).toBe("TODO1");
    expect(screen.getByDisplayValue("TODO1")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "編集内容を反映する" })
    ).toBeDisabled();
    await user.clear(editInputEl);
    await user.type(editInputEl, "FIX TODO");
    act(() => {
      expect(screen.getByDisplayValue("FIX TODO")).toBeInTheDocument();
    });
  });
  const editButtonEl = screen.getByRole("button", {
    name: "編集内容を反映する",
  });
  expect(editButtonEl).not.toBeDisabled();
  await user.click(editButtonEl);
  expect(onEditFn).toHaveBeenCalledTimes(1);
  expect(onEditFn).toHaveBeenCalledWith("1", "FIX TODO");
});
