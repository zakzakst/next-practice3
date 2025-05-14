"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
};

const defaultValues: FormValues = {
  username: "",
  email: "",
};

export const Form1 = () => {
  const { register, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("username")} placeholder="ユーザー名" />
        <input {...register("email")} placeholder="メールアドレス" />
      </div>
      <div>
        <button type="button" onClick={() => reset()}>
          リセット
        </button>
        <button
          type="button"
          onClick={() =>
            reset({
              username: "山田太郎",
            })
          }
        >
          サンプルデータ入力
        </button>
      </div>
      <div>{JSON.stringify(watch())}</div>
    </form>
  );
};
