"use client";

import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
};

export const Form2 = () => {
  const { register, handleSubmit, setValue, watch } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("username")} placeholder="ユーザー名" />
      <button type="button" onClick={() => setValue("username", "taro")}>
        サンプルデータ入力
      </button>
      <p>{watch("username")}</p>
    </form>
  );
};
