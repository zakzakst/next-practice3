"use client";

import { useSessionStorage } from "./hooks/useSessionStorage";

type User = {
  name: string;
  age: number;
};

const Page = () => {
  const [user, setUser, removeUser] = useSessionStorage<User>("user", {
    name: "",
    age: 0,
  });

  return (
    <div>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        placeholder="名前を入力"
      />
      <input
        type="number"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: Number(e.target.value) })}
        placeholder="年齢を入力"
      />
      <button onClick={removeUser}>削除</button>
      <p>
        名前: {user.name}, 年齢: {user.age}
      </p>
    </div>
  );
};

export default Page;
