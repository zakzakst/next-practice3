"use client";

import { useLocalStorage } from "./hooks/useLocalStorage";

const STORAGE_KEY = "myText";

const Page = () => {
  const [text, setText] = useLocalStorage(STORAGE_KEY, "");

  return (
    <div>
      <h1>LocalStorage練習</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="文字を入力"
      />

      <div style={{ marginTop: "1rem" }}>
        <strong>保存された値：</strong>
        <span>{text ?? "（まだ保存されていません）"}</span>
      </div>
    </div>
  );
};

export default Page;
