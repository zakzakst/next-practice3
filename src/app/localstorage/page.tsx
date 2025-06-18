"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "myText";

const Page = () => {
  const [text, setText] = useState("");
  const [stored, setStored] = useState<string | null>(null);

  const isStorageAvailable = (): boolean => {
    try {
      return typeof window !== "undefined" && "localStorage" in window;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    if (!isStorageAvailable()) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    setStored(saved);
  }, []);

  const handleSave = () => {
    if (!isStorageAvailable()) return;
    localStorage.setItem(STORAGE_KEY, text);
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
