"use client";

import { useForm } from "react-hook-form";
import { MarkdownTextarea } from "../components/markdownTextarea";
import { Button } from "@/components/ui/button";

export type FormValues = {
  content: string;
};

const Page = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <MarkdownTextarea name="content" control={control} />
        <Button variant="outline" type="submit">
          送信
        </Button>
      </form>
    </div>
  );
};

export default Page;
