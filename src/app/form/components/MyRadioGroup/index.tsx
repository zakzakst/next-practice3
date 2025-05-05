"use client";

import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Item = {
  value: string;
  label: React.ReactNode;
};

type Props = {
  name: string;
  items: Item[];
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
};

export const MyRadioGroup = ({ name, items, control, rules }: Props) => {
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
      <RadioGroup defaultValue={field.value} onValueChange={field.onChange}>
        {items.map((item) => (
          <div key={item.value} className="flex items-center space-x-2">
            <RadioGroupItem value={item.value} id={item.value} />
            <Label htmlFor={item.value}>{item.label}</Label>
          </div>
        ))}
      </RadioGroup>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
