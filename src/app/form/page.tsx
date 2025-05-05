"use client";

import { useForm, useWatch } from "react-hook-form";
import { MyTextarea } from "./components/MyTextarea";
import { MyInput } from "./components/MyInput";
import { MySelect } from "./components/MySelect";
import { MyCheckbox } from "./components/MyCheckbox";
import { MyRadioGroup } from "./components/MyRadioGroup";
import { validationMessages } from "@/lib/validationMessages";
import { validationRules } from "@/lib/validationRules";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  name2: string;
  bio: string;
  work: string;
  checkbox: boolean;
  gender: string;
};

const defaultValues: FormValues = {
  name: "",
  name2: "",
  bio: "",
  work: "",
  checkbox: false,
  gender: "",
};

const Page = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues,
  });

  const nameValue = useWatch({ control, name: "name" });

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
            validate: {
              noWhitespaceOnly: validationRules.noWhitespaceOnly,
            },
          }}
        />
        <MyInput
          name="name2"
          control={control}
          maxLength={30}
          rules={{
            validate: {
              matches: validationRules.matches(nameValue, "名前が一致しません"),
            },
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
        <MySelect
          name="work"
          control={control}
          rules={{
            required: validationMessages.required("職種"),
            validate: {
              disableValue: (v: string) =>
                ["1", "2"].includes(v) || "不適切な値が選択されています",
            },
          }}
          options={[
            {
              value: "1",
              label: "work1",
            },
            {
              value: "2",
              label: "work2",
            },
            {
              value: "3",
              label: "work3",
            },
          ]}
        />
        <MyCheckbox
          label={
            <>
              <a href="#">利用規約</a>に同意します
            </>
          }
          name="checkbox"
          control={control}
          rules={{
            required: "確認後チェックしてください",
          }}
        />
        <MyRadioGroup
          name="gender"
          control={control}
          items={[
            {
              value: "1",
              label: "男性",
            },
            {
              value: "2",
              label: "女性",
            },
          ]}
          rules={{
            required: validationMessages.required("性別"),
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
