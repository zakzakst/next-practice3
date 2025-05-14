"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

type FormValues = {
  file: FileList;
  text: string;
};

export const ImageUpload3 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      text: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const file = data.file[0];
    console.log("選択されたファイル：", file);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        id="file"
        type="file"
        accept="image/jpeg,image/png"
        {...register("file", {
          required: "ファイルを選択してください",
          validate: {
            lessThan2MB: (files) =>
              files?.[0]?.size < 2 * 1024 * 1024 ||
              "2MB未満のファイルを選択してください",
            acceptedFormats: (files) =>
              ["image/jpeg", "image/png"].includes(files?.[0]?.type) ||
              "JPEGまたはPNG形式の画像を選択してください",
          },
        })}
      />
      {errors.file && (
        <p className="text-red-500 text-sm mt-1">{errors.file.message}</p>
      )}

      <Button type="submit" className="mt-4">
        送信
      </Button>
    </form>
  );
};
