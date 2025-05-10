export type TodoDoneState = "done" | "wip";

export type Todo = {
  id: string;
  text: string;
  // 清書の時はstatusにしたい
  state: TodoDoneState;
  createdAt: Date;
  updatedAt: Date | null;
};
