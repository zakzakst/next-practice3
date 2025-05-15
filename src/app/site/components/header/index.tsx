import Link from "next/link";
import clsx from "clsx";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

type Props = React.ComponentProps<"header">;

export const Header = ({ className, ...rest }: Props) => {
  return (
    <header
      className={clsx(
        "flex gap-4 items-center px-4 py-2 bg-gray-100 h-12",
        className
      )}
      {...rest}
    >
      <Link href="/" className="font-bold">
        XXXXX
      </Link>
      <ul className="ml-auto flex gap-4 items-center">
        <li>
          <Link href="/my/posts/" className="underline">
            My Posts
          </Link>
        </li>
        <li>
          <Link href="/my/posts/create/" className="underline">
            Create Post
          </Link>
        </li>
      </ul>
      <Separator orientation="vertical" className="bg-gray-400" />
      <div className="flex items-center gap-2">
        <span>山田太郎</span>
        <Popover>
          <PopoverTrigger>
            <span className="inline-block w-8 h-8 rounded-full overflow-hidden">
              {/* eslint-disable-next-line */}
              <img
                src="https://picsum.photos/id/237/200/200"
                alt=""
                className="w-full h-full object-cover"
              />
            </span>
          </PopoverTrigger>
          <PopoverContent className="w-fit">
            <Button variant="link">ログアウト</Button>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};
