import Link from "next/link";
import clsx from "clsx";
import { Star } from "lucide-react";

const PostListItem = () => {
  return (
    <Link href="#" className="block border">
      <div className="aspect-2/1">
        <img
          src="https://picsum.photos/id/237/200/200"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-4 p-2">
        <div className="flex-grow">
          <p className="font-bold">タイトル</p>
          <p className="text-sm text-gray-500">ディスクリプション</p>
        </div>
        <div className="flex-shrink-0 flex flex-col items-center">
          <span>0</span>
          <button>
            <Star className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
};

type Props = React.ComponentProps<"ul">;

export const PostList = ({ className, ...rest }: Props) => {
  return (
    <ul
      className={clsx(
        "grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4",
        className
      )}
      {...rest}
    >
      {[...Array(9)].map((_, index) => (
        <li key={index}>
          <PostListItem />
        </li>
      ))}
    </ul>
  );
};
