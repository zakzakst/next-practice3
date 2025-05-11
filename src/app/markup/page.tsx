import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import styles from "./styles.module.css";
import clsx from "clsx";

const Page = () => {
  return (
    <div className="relative p-4 h-screen grid grid-rows-[1fr_max-content] gap-4">
      {/* TODO: スクロールの一番下に行くようにする */}
      <ul className={clsx("overflow-auto", styles.hiddenScrollbar)}>
        <li className="border-t py-2">
          <div>
            <div className="text-xs text-gray-500">2025/1/1 09:00</div>
            {/* TODO: 改行反映 */}
            <div className="text-sm h-screen">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              テキストが入ります。
            </div>
          </div>
        </li>
        <li className="border-t py-2">
          <div>
            <div className="text-xs text-gray-500">2025/1/1 09:00</div>
            {/* TODO: 改行反映 */}
            <div className="text-sm">
              テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
              テキストが入ります。
            </div>
          </div>
        </li>
      </ul>
      <div>
        <Textarea className="h-32 resize-none border-b-0 rounded-b-none" />
        <div className="bg-gray-100 border border-t-0 rounded-b-md px-3 py-2 grid grid-cols-[1fr_max-content]">
          <div className="flex items-center space-x-2">
            <Switch id="preview-mode" />
            <Label htmlFor="preview-mode">プレビュー</Label>
          </div>
          <div>
            <Button>追加</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
