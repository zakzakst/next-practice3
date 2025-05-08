"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { InputWithError } from "../inputWithError";
import { Button } from "@/components/ui/button";
import { validationMessage, validationRegex } from "../../utils/validation";

const loginFormValuesSchema = z
  .object({
    email: z.string().email(validationMessage.emailFormat),
    password: z
      .string()
      .min(8, validationMessage.minLength(8))
      .regex(validationRegex.password, validationMessage.passwordFormat),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "パスワードが一致しません",
  });

export type LoginFormValues = z.infer<typeof loginFormValuesSchema>;

const defaultValues: LoginFormValues = {
  email: "",
  password: "",
  passwordConfirm: "",
};

type Props = {
  onSubmit: (data: LoginFormValues) => void;
};

export const LoginForm = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormValuesSchema),
    defaultValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <InputWithError
          name="email"
          label="メールアドレス"
          control={control}
          type="email"
        />
        <InputWithError
          name="password"
          label="パスワード"
          control={control}
          type="password"
        />
        <InputWithError
          name="passwordConfirm"
          label="確認用パスワード"
          control={control}
          type="password"
        />
      </div>
      <div className="mt-4">
        <Button type="submit">送信</Button>
      </div>
    </form>
  );
};
