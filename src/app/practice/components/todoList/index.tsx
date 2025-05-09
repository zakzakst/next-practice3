"use client";

import { useState } from "react";

export type TodoItem = {
  id: string;
  text: string;
  done: boolean;
  createdAt: Date;
  updatedAt: Date | null;
};

type Props = {
  items: TodoItem[];
  onUpdateDone: (id: string, state: boolean) => void;
  onEditText: (id: string, text: string) => void;
};

export const TodoList = ({ items, onUpdateDone, onEditText }: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditTest = (id: string) => {
    onEditText(id, "編集後テキスト");
    setIsEditing(false);
  };

  if (!items.length) return <div>登録されているタスクがありません</div>;

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <div>
            <p>{item.text}</p>
            <p>
              作成日：{item.createdAt.toLocaleString()}{" "}
              {item.updatedAt && <>更新日：{item.updatedAt.toLocaleString()}</>}
            </p>
          </div>
          <div onClick={() => onUpdateDone(item.id, true)}>
            {item.done && "done"}
          </div>
          {isEditing && (
            <div onClick={() => handleEditTest(item.id)}>編集中</div>
          )}
        </li>
      ))}
    </ul>
  );
};
