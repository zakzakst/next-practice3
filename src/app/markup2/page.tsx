import { Button } from "@/components/ui/button";
import { Pencil, Check, Trash2, Plus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Page = () => {
  return (
    <div className="p-4">
      <div className="p-3 bg-gray-200">
        <div className="grid grid-cols-[max-content_1fr] gap-4 items-center">
          <div>状態</div>
          <RadioGroup className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="filter1"
                id="filter1"
                className="bg-white"
              />
              <Label htmlFor="filter1">フィルター1</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="filter2"
                id="filter2"
                className="bg-white"
              />
              <Label htmlFor="filter2">フィルター2</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <div className="grid gap-2 mt-4">
        <div className="p-3 border rounded grid gap-2 grid-cols-[max-content_1fr_max-content]">
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300"
              aria-label="完了にする"
            >
              <Check />
            </Button>
          </div>
          <div>
            <div className="pt-1">タスク1</div>
            <div className="mt-1 text-sm text-gray-500">
              作成日：2025/1/1（2025/1/4 編集済）
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label="編集する">
              <Pencil />
            </Button>
            <Button variant="outline" size="icon" aria-label="削除する">
              <Trash2 />
            </Button>
          </div>
        </div>
        <div className="p-3 border rounded grid gap-2 grid-cols-[max-content_1fr_max-content]">
          <div>
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300"
              aria-label="完了にする"
            >
              <Check />
            </Button>
          </div>
          <div>
            <div className="pt-1">タスク1</div>
            <div className="mt-1 text-sm text-gray-500">
              作成日：2025/1/1（2025/1/4 編集済）
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" aria-label="編集する">
              <Pencil />
            </Button>
            <Button variant="outline" size="icon" aria-label="削除する">
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Button variant="outline" className="w-full">
          <Plus />
          タスクを追加
        </Button>
      </div>
    </div>
  );
};

export default Page;
