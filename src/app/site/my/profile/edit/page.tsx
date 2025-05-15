import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const Page = () => {
  return (
    <div className="p-4 mx-auto max-w-3xl">
      <div className="flex gap-4 items-center">
        <h1 className="font-bold text-2xl">最新投稿一覧</h1>
        <p className="ml-auto">
          登録されたプロフィールは一般公開され、誰でも閲覧できます
        </p>
      </div>
      <div className="grid grid-cols-[1fr_2fr] mt-4 gap-4">
        <div>
          <div className="aspect-square rounded-full overflow-hidden">
            {/* eslint-disable-next-line */}
            <img
              src="https://picsum.photos/id/237/200/200"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline">写真を変更する</Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="flex justify-between items-center">
              <Label>ユーザー名</Label>
              <span>0 / 32</span>
            </div>
            <Input className="mt-2" />
          </div>
          <div>
            <div className="flex justify-between items-center">
              <Label>自己紹介文</Label>
              <span>0 / 128</span>
            </div>
            <Textarea className="mt-2" rows={3} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Twitter</Label>
              <Input className="mt-2" />
            </div>
            <div>
              <Label>GitHub</Label>
              <Input className="mt-2" />
            </div>
          </div>
        </div>
      </div>
      <Separator className="my-6" />
      <div className="text-center">
        <Button size="lg">プロフィールを変更する</Button>
      </div>
    </div>
  );
};

export default Page;
