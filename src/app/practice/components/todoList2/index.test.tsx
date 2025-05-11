import { act, render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList2 } from ".";
import { Todo } from "@/types/todo";

const user = userEvent.setup();

const setup = () => {
  const onEditFn = jest.fn();
  const onDeleteFn = jest.fn();
  const onChangeDoneStateFn = jest.fn();
  const todos: Todo[] = [
    {
      id: "1",
      text: "TODO1",
      state: "done",
      createdAt: new Date("2025/1/1"),
      updatedAt: new Date("2025/1/1"),
    },
    {
      id: "2",
      text: "TODO2",
      state: "wip",
      createdAt: new Date("2025/1/1"),
      updatedAt: new Date("2025/1/2"),
    },
  ];
  render(
    <TodoList2
      todos={todos}
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

test("リストの初期状態が正しい", () => {
  setup();
  // タスク1の内容
  expect(screen.getByText("TODO1")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "未完了にする" }));
  // タスク2の内容
  expect(screen.getByText("TODO2")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "完了にする" }));
  expect(screen.getAllByText(/編集済/i)[0]).toBeInTheDocument();
  // NOTE: 下記だと上手くできなかった
  // expect(screen.getByText(/編集済/i)).toBeInTheDocument();
});

test("削除モーダルが正しく挙動する", async () => {
  const { onDeleteFn } = setup();
  const deleteButtonEls = screen.getAllByRole("button", { name: "削除する" });
  await fireEvent.click(deleteButtonEls[0]);
  await act(async () => {
    const alertdialogEl = screen.getByRole("alertdialog");
    expect(alertdialogEl).toBeInTheDocument();
    expect(alertdialogEl).toHaveTextContent("TODO1");
    const alertdialogButtonEls = alertdialogEl.querySelectorAll("button");
    await fireEvent.click(alertdialogButtonEls[1]);
    expect(onDeleteFn).toHaveBeenCalledTimes(1);
    expect(onDeleteFn).toHaveBeenCalledWith("1");
  });
});

test("完了状態の切替が発火する", async () => {
  const { onChangeDoneStateFn } = setup();
  const changeDoneStateButtonEl1 = screen.getByRole("button", {
    name: "未完了にする",
  });
  await fireEvent.click(changeDoneStateButtonEl1);
  await act(async () => {
    expect(onChangeDoneStateFn).toHaveBeenCalledTimes(1);
    expect(onChangeDoneStateFn).toHaveBeenLastCalledWith("1", "wip");
  });
  const changeDoneStateButtonEl2 = screen.getByRole("button", {
    name: "完了にする",
  });
  await fireEvent.click(changeDoneStateButtonEl2);
  await act(async () => {
    expect(onChangeDoneStateFn).toHaveBeenCalledTimes(2);
    expect(onChangeDoneStateFn).toHaveBeenLastCalledWith("2", "done");
  });
});

test("編集状態反映が発火する", async () => {
  const { onEditFn } = setup();
  const editModeButtonEl = screen.getAllByRole("button", { name: "編集する" });
  await fireEvent.click(editModeButtonEl[0]);
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
  await fireEvent.click(editButtonEl);
  expect(onEditFn).toHaveBeenCalledTimes(1);
  expect(onEditFn).toHaveBeenCalledWith("1", "FIX TODO");
});
