import { z } from "zod";

export const maxLength = (len: number, message?: string) =>
  z.string().max(len, message ?? `${len}文字以内で入力してください`);

export const requiredTrimmed = (label: string) =>
  z
    .string()
    .min(1, `${label}は必須です`)
    .refine((val) => val.trim().length > 0, {
      message: `${label}は空白のみでは入力できません`,
    });

export const noForbiddenWords = (words: string[]) =>
  z.string().refine((val) => !words.some((w) => val.includes(w)), {
    message: "禁止語句が含まれています",
  });
