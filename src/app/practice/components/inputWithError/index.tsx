"use client";

import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import clsx from "clsx";

type OwnProps = {
  name: string;
  label: string;
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
};

type Props = Omit<React.ComponentProps<"input">, keyof OwnProps> & OwnProps;

export const InputWithError = ({
  name,
  label,
  control,
  rules,
  className,
  ...rest
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
    <div className={clsx("flex flex-col gap-2", className)}>
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} {...field} {...rest} />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
