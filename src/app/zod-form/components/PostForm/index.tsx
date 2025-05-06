"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MyInput } from "../MyInput";
// import { validationMessages } from "@/lib/validationMessages";
// import { validationRules } from "@/lib/validationRules";
import { Button } from "@/components/ui/button";
import { requiredTrimmed, maxLength } from "@/lib/schemas";

const blogFormValuesSchema = z.object({
  name: requiredTrimmed("名前").and(maxLength(30)),
  content: requiredTrimmed("内容").and(maxLength(30)),
});

export type BlogFormValues = z.infer<typeof blogFormValuesSchema>;

type Props = {
  onSubmit: (values: BlogFormValues) => void;
  defaultValues?: Partial<BlogFormValues>;
};

export const BlogForm = ({ onSubmit, defaultValues }: Props) => {
  const { control, handleSubmit } = useForm<BlogFormValues>({
    resolver: zodResolver(blogFormValuesSchema),
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
        // rules={{
        //   required: validationMessages.required("名前"),
        //   validate: {
        //     noWhitespaceOnly: validationRules.noWhitespaceOnly,
        //   },
        // }}
      />
      <MyInput
        name="content"
        control={control}
        maxLength={30}
        // rules={{
        //   required: validationMessages.required("名前"),
        //   validate: {
        //     noWhitespaceOnly: validationRules.noWhitespaceOnly,
        //   },
        // }}
      />
      <Button variant="outline" type="submit">
        送信
      </Button>
    </form>
  );
};
