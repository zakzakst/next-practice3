"use client";

import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import { validationMessages } from "@/lib/validationMessages";
import { useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  name: string;
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
  maxLength: number;
};

export const MyTextarea = ({ name, control, rules, maxLength }: Props) => {
  const mergedRules: RegisterOptions = {
    ...rules,
    maxLength: rules?.maxLength ?? {
      value: maxLength,
      message: validationMessages.maxLength(maxLength),
    },
  };

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: mergedRules,
  });

  const currentLength = useMemo(() => {
    return field.value?.length || 0;
  }, [field]);

  return (
    <div>
      <Textarea />
      <div className="text-right text-sm">
        {currentLength} / {maxLength} 文字
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
