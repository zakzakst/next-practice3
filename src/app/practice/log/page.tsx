"use client";

import { usePostLog } from "@/app/api/log/swr";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Log } from "@/app/api/log/type";

const Page = () => {
  const [value, setValue] = useState("");
  const [logItems, setLogItems] = useState<Log[]>([]);
  const { trigger, error, isMutating } = usePostLog();

  const addContent = async () => {
    if (isMutating) return;
    const result = await trigger({ userId: "1", content: value });
    setLogItems([result.log, ...logItems]);
    setValue("");
  };

  return (
    <div>
      {error && <p>{error.message}</p>}
      <ul>
        {logItems.map((log) => (
          <li key={log.id}>
            {log.content}
            <br />
            {log.createdAt.toLocaleString()}
          </li>
        ))}
      </ul>
      <Textarea value={value} onChange={(e) => setValue(e.target.value)} />
      <Button onClick={() => addContent()}>追加</Button>
    </div>
  );
};

export default Page;
