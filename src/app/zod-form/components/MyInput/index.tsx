"use client";

import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import { useMemo } from "react";
import { Input } from "@/components/ui/input";
import clsx from "clsx";

type Props = {
  name: string;
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
  maxLength: number;
};

export const MyInput = ({ name, control, rules, maxLength }: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  const currentLength = useMemo(() => {
    return field.value?.length || 0;
  }, [field]);

  const isOverMaxLength = useMemo(() => {
    return currentLength > maxLength;
  }, [currentLength, maxLength]);

  return (
    <div>
      <Input id={name} {...field} />
      <div
        className={clsx("text-right text-sm", {
          "text-red-500": isOverMaxLength,
        })}
      >
        {currentLength} / {maxLength} 文字
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
