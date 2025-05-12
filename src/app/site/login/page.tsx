import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="p-4 mx-auto max-w-md">
      <div className="grid items-center">
        <div className="border p-4 rounded grid gap-4">
          <div className="grid gap-2">
            <Label>メールアドレス</Label>
            <Input />
          </div>
          <div className="grid gap-2">
            <Label>パスワード</Label>
            <Input />
          </div>
          {/* <div className="grid gap-2">
            <Label>パスワード（確認）</Label>
            <Input />
          </div> */}
          <div>
            <Button className="w-full">ログイン</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
