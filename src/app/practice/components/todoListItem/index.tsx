"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import clsx from "clsx";
import { PencilOff, Pencil, Check, CornerDownLeft, Trash2 } from "lucide-react";
import { Todo, TodoDoneState } from "@/types/todo";

type Props = {
  todo: Todo;
  onEdit: (id: string, text: string) => void;
  onDelete: (todo: Todo) => void;
  onChangeDoneState: (id: string, state: TodoDoneState) => void;
};

export const TodoListItem = ({
  todo,
  onEdit,
  onDelete,
  onChangeDoneState,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState("");

  const handleChangeDoneState = () => {
    const changedState = todo.state === "done" ? "wip" : "done";
    onChangeDoneState(todo.id, changedState);
  };

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setEditingText(todo.text);
    }
  };

  // NOTE: ref callbackを利用し、編集状態にした時にフォーカスさせる
  const inputRefCallback = useCallback((node: HTMLInputElement | null) => {
    if (node) {
      node.focus();
    }
  }, []);

  const handleEdit = () => {
    onEdit(todo.id, editingText);
    setIsEditing(false);
  };

  return (
    <div className="p-3 border rounded grid gap-2 grid-cols-[max-content_1fr_max-content]">
      <div>
        <Button
          variant="ghost"
          size="icon"
          className={clsx({
            "text-green-600": todo.state === "done",
            "text-gray-300": todo.state !== "done",
          })}
          onClick={() => handleChangeDoneState()}
          aria-label={todo.state === "done" ? "未完了にする" : "完了にする"}
        >
          <Check />
        </Button>
      </div>
      <div>
        {isEditing ? (
          <div>
            <Input
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              ref={inputRefCallback}
            />
          </div>
        ) : (
          <div className="pt-1">{todo.text}</div>
        )}
        <div className="mt-1 text-sm text-gray-500">
          作成日：{todo.createdAt.toLocaleString()}
          {todo.updatedAt && <>（{todo.updatedAt.toLocaleString()} 編集済）</>}
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          aria-label={isEditing ? "編集解除" : "編集する"}
          onClick={() => handleIsEditing()}
        >
          {isEditing ? <PencilOff /> : <Pencil />}
        </Button>
        {isEditing ? (
          <Button
            variant="outline"
            size="icon"
            aria-label="編集内容を反映する"
            onClick={() => handleEdit()}
            disabled={todo.text === editingText}
          >
            <CornerDownLeft />
          </Button>
        ) : (
          <Button
            variant="outline"
            size="icon"
            aria-label="削除する"
            onClick={() => onDelete(todo)}
          >
            <Trash2 />
          </Button>
        )}
      </div>
    </div>
  );
};
