import { Pagination } from "@/components/organisms/pagination";

const Page = () => {
  return (
    <div className="p-4">
      <Pagination limit={5} total={51} current={5} />
    </div>
  );
};

export default Page;
