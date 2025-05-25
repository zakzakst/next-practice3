import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  // PaginationLink,
  // PaginationNext,
  // PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useMemo } from "react";

type Item = {
  type: "number" | "ellipsis";
  value: number | null;
};

export const Pagination = () => {
  const limit = 5;
  const total = 46;
  const page: number = 5;

  const itemLength = Math.ceil(total / limit);
  // console.log(itemLength);
  // const items = Array(itemLength)
  //   .fill(null)
  //   .map((_, index) => ({
  //     label: index + 1,
  //   }));
  // console.log(items);
  // const items: number[] = useMemo(() => {
  //   return [page - 1, page, page + 1];
  // }, []);

  const items: Item[] = useMemo(() => {
    return [
      {
        type: "number",
        value: 1,
      },
      {
        type: "ellipsis",
        value: null,
      },
      {
        type: "number",
        value: page - 1,
      },
      {
        type: "number",
        value: page,
      },
      {
        type: "number",
        value: page + 1,
      },
      {
        type: "ellipsis",
        value: null,
      },
      {
        type: "number",
        value: itemLength,
      },
    ];
  }, [itemLength]);

  const isPrevItemActive = page !== 1;
  const isNextItemActive = page !== itemLength;

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <Button size="icon" aria-label="前" disabled={!isPrevItemActive}>
            <ChevronLeftIcon />
          </Button>
        </PaginationItem>
        {items.map((item, index) => (
          <PaginationItem
            key={index}
            aria-current={page === item.value ? "page" : undefined}
          >
            {item.type === "ellipsis" && <PaginationEllipsis />}
            {item.type === "number" && <Button>{item.value}</Button>}
          </PaginationItem>
        ))}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        {/* {Array(itemLength)
          .fill(null)
          .map((_, index) => (
            <PaginationItem
              key={index}
              aria-current={page === index + 1 ? "page" : undefined}
            >
              <Button>{index + 1}</Button>
            </PaginationItem>
          ))} */}
        {/* {items.map((item) => (
          <PaginationItem
            key={item}
            aria-current={page === item ? "page" : undefined}
          >
            <Button>{item}</Button>
          </PaginationItem>
        ))} */}
        {/* <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem> */}
        <PaginationItem>
          <Button size="icon" aria-label="次" disabled={!isNextItemActive}>
            <ChevronRightIcon />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};
