"use client";

import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  value: string;
  label: React.ReactNode;
};

type Props = {
  name: string;
  options: Option[];
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
  placeholder?: string;
};

export const MySelect = ({
  name,
  options,
  control,
  rules,
  placeholder,
}: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <div>
      <Select
        onValueChange={(value) => field.onChange(value)}
        value={field.value}
      >
        <SelectTrigger>
          <SelectValue placeholder={placeholder || "項目を選択してください"} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
