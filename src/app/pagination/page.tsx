import { Pagination } from "@/components/organisms/pagination";

const Page = () => {
  return (
    <div className="p-4">
      <Pagination
        limit={5}
        total={51}
        current={5}
        className="custom-class"
        aria-label="ページネーション"
      />
      {/* <Pagination limit={0} total={0} current={0} /> */}
    </div>
  );
};

export default Page;
