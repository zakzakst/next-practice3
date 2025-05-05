"use client";

import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

type Props = {
  label: React.ReactNode;
  name: string;
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
};

export const MyCheckbox = ({ label, name, control, rules }: Props) => {
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
      <div className="flex items-center space-x-2">
        <Checkbox
          id={name}
          onCheckedChange={field.onChange}
          value={field.value}
        />
        <Label
          htmlFor={name}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </Label>
      </div>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
