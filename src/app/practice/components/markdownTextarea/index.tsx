"use client";

import { useController } from "react-hook-form";
import type { Control } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from "react-markdown";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import styles from "./styles.module.css";

type Props = {
  name: string;
  // eslint-disable-next-line
  control: Control<any>;
};

export const MarkdownTextarea = ({ name, control }: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Tabs defaultValue="textarea" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="textarea">入力</TabsTrigger>
        <TabsTrigger value="preview">プレビュー</TabsTrigger>
      </TabsList>
      <TabsContent value="textarea">
        <Textarea id={name} {...field} />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </TabsContent>
      <TabsContent value="preview">
        <div className={styles.markdown}>
          <ReactMarkdown>{field.value}</ReactMarkdown>
        </div>
      </TabsContent>
    </Tabs>
  );
};
