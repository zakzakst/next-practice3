import { TodoDoneState } from "@/types/todo";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export type TodoListFilterParams = {
  selectedState: TodoDoneState | "all";
  // keyword?: string;
};

type Props = {
  params: TodoListFilterParams;
  onChangeParams: (params: Partial<TodoListFilterParams>) => void;
};

type Item = {
  value: TodoDoneState | "all";
  label: React.ReactNode;
};

export const StateItems: Item[] = [
  {
    value: "all",
    label: "全て",
  },
  {
    value: "done",
    label: "完了",
  },
  {
    value: "wip",
    label: "対応中",
  },
];

export const TodoListFilter = ({ params, onChangeParams }: Props) => {
  const onChangeRadio = (value: string) => {
    // console.log(value);
    onChangeParams({ selectedState: value as TodoDoneState | "all" });
  };

  return (
    <div>
      <div className="grid grid-cols-[max-content_1fr]">
        <div>状態</div>
        <RadioGroup value={params.selectedState} onValueChange={onChangeRadio}>
          {StateItems.map((item) => (
            <div key={item.value} className="flex items-center space-x-2">
              <RadioGroupItem value={item.value} id={item.value} />
              <Label htmlFor={item.value}>{item.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
