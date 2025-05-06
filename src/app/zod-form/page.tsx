"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MyDatePicker } from "../form/components/MyDatePicker";
import { MyCheckbox } from "../form/components/MyCheckbox";
import { MyRadioGroup } from "../form/components/MyRadioGroup";
import { MySelect } from "../form/components/MySelect";
import { MyTextarea } from "./components/MyTextarea";
import { MyInput } from "./components/MyInput";
import { Button } from "@/components/ui/button";
import { validationMessages } from "@/lib/validationMessages";
import { requiredTrimmed, maxLength } from "@/lib/schemas";

const GenderMap = {
  male: {
    value: "1",
    label: "男性",
  },
  female: {
    value: "2",
    label: "女性",
  },
} as const;

// enumの引数に設定するためにasで型指定
const GenderValues = Object.values(GenderMap).map((item) => item.value) as [
  string,
  ...string[]
];

const WorkMap = {
  work1: {
    value: "1",
    label: "work1",
  },
  work2: {
    value: "2",
    label: "work2",
  },
  // work3: {
  //   value: "3",
  //   label: "work3",
  // },
} as const;

// enumの引数に設定するためにasで型指定
const WorkValues = Object.values(WorkMap).map((item) => item.value) as [
  string,
  ...string[]
];

const formValuesSchema = z
  .object({
    date: z
      .date()
      .nullable()
      .refine((val) => val !== null, {
        message: validationMessages.required("日付"),
      }),
    checkbox: z.boolean().refine((val) => val, {
      message: "確認後チェックしてください",
    }),
    gender: z.enum(GenderValues, {
      errorMap: () => ({
        message: validationMessages.required("性別"),
      }),
    }),
    work: z.enum(WorkValues, {
      errorMap: () => ({
        message: validationMessages.required("職種"),
      }),
    }),
    bio: requiredTrimmed("自己紹介").and(maxLength(30)),
    name: requiredTrimmed("名前").and(maxLength(30)),
    name2: z.string(),
  })
  .refine((data) => data.name === data.name2, {
    path: ["name2"],
    message: "名前が一致しません",
  });

type FormValues = Omit<z.infer<typeof formValuesSchema>, "date"> & {
  // z.inferの自動推論だとdateの初期値にnullを指定できないため上書き
  date: Date | null;
};

const defaultValues: FormValues = {
  date: null,
  checkbox: false,
  gender: "",
  work: "",
  bio: "",
  name: "",
  name2: "",
};

const Page = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: zodResolver(formValuesSchema),
    defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log("送信データ:", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <MyDatePicker
          name="date"
          control={control}
          placeholder="誕生日を選択してください"
          calendarDisabled={(date) =>
            date > new Date() || date < new Date("2025-04-01")
          }
        />
        <MyCheckbox
          label={
            <>
              <a href="#">利用規約</a>に同意します
            </>
          }
          name="checkbox"
          control={control}
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
          // rules={{
          //   required: validationMessages.required("性別"),
          // }}
        />
        <MySelect
          name="work"
          control={control}
          // rules={{
          //   required: validationMessages.required("職種"),
          //   validate: {
          //     disableValue: (v: string) =>
          //       ["1", "2"].includes(v) || "不適切な値が選択されています",
          //   },
          // }}
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
        <MyTextarea
          name="bio"
          control={control}
          maxLength={30}
          // rules={{
          //   required: validationMessages.required("自己紹介"),
          // }}
        />
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
          name="name2"
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
    </div>
  );
};

export default Page;
