"use client";

import { useState } from "react";
import { TodoListItem } from "../todoListItem";
import { Todo, TodoDoneState } from "@/types/todo";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";

type Props = {
  todos: Todo[];
  onEdit: (id: string, text: string) => void;
  onDelete: (id: string) => void;
  onChangeDoneState: (id: string, state: TodoDoneState) => void;
};

export const TodoList2 = ({
  todos,
  onEdit,
  onDelete,
  onChangeDoneState,
}: Props) => {
  const [isShowDialog, setIsShowDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState<Todo | null>(null);

  const handleOpenChange = (open: boolean) => {
    setIsShowDialog(open);
    if (!open) {
      setDialogContent(null);
    }
  };

  const showDeleteDialog = (todo: Todo) => {
    setDialogContent(todo);
    setIsShowDialog(true);
  };

  const handleDelete = () => {
    if (!dialogContent) return;
    onDelete(dialogContent.id);
  };

  if (todos.length === 0) return <div>タスクが見つかりませんでした</div>;

  return (
    <>
      <ul className="grid grid-cols-1 gap-2">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoListItem
              todo={todo}
              onEdit={onEdit}
              onDelete={showDeleteDialog}
              onChangeDoneState={onChangeDoneState}
            />
          </li>
        ))}
      </ul>
      <AlertDialog open={isShowDialog} onOpenChange={handleOpenChange}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>タスクの削除</AlertDialogTitle>
            <AlertDialogDescription>
              タスクを削除してよろしいですか？
            </AlertDialogDescription>
            <div className="bg-gray-100 p-2">{dialogContent?.text}</div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>キャンセル</AlertDialogCancel>
            <AlertDialogAction onClick={() => handleDelete()}>
              削除する
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
