"use client";

import { useForm } from "react-hook-form";
import { MyTextarea } from "./components/MyTextarea";
import { validationMessages } from "@/lib/validationMessages";
import { Button } from "@/components/ui/button";

type FormValues = {
  bio: string;
};

const defaultValues: FormValues = {
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
