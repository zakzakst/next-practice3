export type TodoDoneState = "done" | "wip";

export type Todo = {
  id: string;
  text: string;
  state: TodoDoneState;
  createdAt: Date;
  updatedAt: Date | null;
};
