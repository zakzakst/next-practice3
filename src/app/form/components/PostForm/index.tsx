"use client";

import { useForm } from "react-hook-form";
import { MyInput } from "../MyInput";
import { validationMessages } from "@/lib/validationMessages";
import { validationRules } from "@/lib/validationRules";
import { Button } from "@/components/ui/button";

export type BlogFormValues = {
  name: string;
  content: string;
};

type Props = {
  onSubmit: (values: BlogFormValues) => void;
  defaultValues?: Partial<BlogFormValues>;
};

export const BlogForm = ({ onSubmit, defaultValues }: Props) => {
  const { control, handleSubmit } = useForm<BlogFormValues>({
    defaultValues: {
      name: "",
      content: "",
      ...defaultValues,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <MyInput
        name="name"
        control={control}
        maxLength={30}
        rules={{
          required: validationMessages.required("名前"),
          validate: {
            noWhitespaceOnly: validationRules.noWhitespaceOnly,
          },
        }}
      />
      <Button variant="outline" type="submit">
        送信
      </Button>
    </form>
  );
};
