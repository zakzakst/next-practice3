"use client";

import { useForm } from "react-hook-form";
import { MyTextarea } from "./components/MyTextarea";
import { MyInput } from "./components/MyInput";
import { validationMessages } from "@/lib/validationMessages";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  bio: string;
};

const defaultValues: FormValues = {
  name: "",
  bio: "",
};

const Page = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log("送信データ:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyInput
          name="name"
          control={control}
          maxLength={30}
          rules={{
            required: validationMessages.required("名前"),
          }}
        />
        <MyTextarea
          name="bio"
          control={control}
          maxLength={30}
          rules={{
            required: validationMessages.required("自己紹介"),
          }}
        />
        <Button variant="outline" type="submit">
          送信
        </Button>
      </form>
    </div>
  );
};

export default Page;
