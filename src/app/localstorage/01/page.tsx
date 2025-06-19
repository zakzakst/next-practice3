"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "myText";

const getFromLocalStorage = (key: string): string | null => {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const saveToLocalStorage = (key: string, value: string) => {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};

const Page = () => {
  const [text, setText] = useState("");
  const [stored, setStored] = useState<string | null>(null);

  useEffect(() => {
    const saved = getFromLocalStorage(STORAGE_KEY);
    setStored(saved);
  }, []);

  const handleSave = () => {
    saveToLocalStorage(STORAGE_KEY, text);
    setStored(text);
    setText("");
  };

  return (
    <div>
      <h1>LocalStorage練習</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="文字を入力"
      />
      <button onClick={handleSave}>保存</button>

      <div style={{ marginTop: "1rem" }}>
        <strong>保存された値：</strong>
        <span>{stored ?? "（まだ保存されていません）"}</span>
      </div>
    </div>
  );
};

export default Page;
