type Props = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div className="p-4 mx-auto max-w-3xl">
      <div className="aspect-3/1">
        <img
          src="https://picsum.photos/id/237/900/300"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="grid grid-cols-[1fr_max-content] gap-4 mt-4">
        <div className="flex gap-4 items-center">
          <h1 className="font-bold text-2xl">投稿 {id}</h1>
          <p className="ml-auto">投稿の概要</p>
        </div>
        <div className="aspect-square border-4 rounded-full w-8 grid place-content-center">
          0
        </div>
      </div>
      <div className="mt-4">
        <p>
          テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。テキストが入ります。
        </p>
      </div>
    </div>
  );
};

export default Page;
