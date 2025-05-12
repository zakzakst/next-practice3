import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PostList } from "./components/postList";
import { Pagination } from "./components/pagination";

const Page = () => {
  return (
    <div className="p-4 mx-auto max-w-5xl">
      <div className="flex gap-4 items-center">
        <h1 className="font-bold text-2xl">最新投稿一覧</h1>
        <div className="flex items-center ml-auto gap-2">
          <span>並び順</span>
          <Select defaultValue="updatedAt">
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="updatedAt">更新日時順</SelectItem>
              <SelectItem value="starCount">スター数順</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <PostList className="mt-4" />
      <Pagination className="mt-4" />
    </div>
  );
};

export default Page;
