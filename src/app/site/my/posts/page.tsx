import { Button } from "@/components/ui/button";
import { Star, Github, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PostList } from "../../components/postList";
import { Pagination } from "../../components/pagination";

const Page = () => {
  return (
    <div className="p-4 mx-auto max-w-5xl">
      <div className="grid grid-cols-[1fr_4fr] gap-6">
        <div>
          <div className="aspect-square rounded-full overflow-hidden">
            <img
              src="https://picsum.photos/id/237/200/200"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-1 mt-4">
            <h1 className="font-bold text-2xl">山田太郎</h1>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>0</span>
            </div>
            <p>自己紹介文</p>
            <Button>変更する</Button>
          </div>
          <Separator className="my-4" />
          <div>
            <div className="flex gap-1 items-center">
              <Github className="w-4 h-4" />
              <Link href="#" className="text-sm">
                tyamada
              </Link>
            </div>
            <div className="flex gap-1 items-center">
              <Twitter className="w-4 h-4" />
              <Link href="#" className="text-sm">
                tyamada
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <h2 className="font-bold text-2xl">最新投稿一覧</h2>
            <div className="flex items-center ml-auto gap-2">
              <span>公開ステータス</span>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべて</SelectItem>
                  <SelectItem value="public">公開</SelectItem>
                  <SelectItem value="private">下書き</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <PostList className="mt-4" />
          <Pagination className="mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Page;
