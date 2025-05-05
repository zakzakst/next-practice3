"use client";

import { useController } from "react-hook-form";
import type { Control, RegisterOptions } from "react-hook-form";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  name: string;
  // eslint-disable-next-line
  control: Control<any>;
  rules?: RegisterOptions;
  placeholder?: string;
  calendarDisabled?: (date: Date) => boolean;
};

export const MyDatePicker = ({
  name,
  control,
  rules,
  placeholder,
  calendarDisabled,
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
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !field.value && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {field.value ? (
              format(field.value, "PPP")
            ) : (
              <span>{placeholder || "日付を選択してください"}</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={field.value}
            onSelect={field.onChange}
            disabled={calendarDisabled}
            initialFocus
          />
        </PopoverContent>
      </Popover>
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
