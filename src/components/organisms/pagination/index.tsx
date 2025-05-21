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

export const Pagination = () => {
  const limit = 5;
  const total = 46;
  const page: number = 10;

  const itemLength = Math.ceil(total / limit);
  // console.log(itemLength);
  // const items = Array(itemLength)
  //   .fill(null)
  //   .map((_, index) => ({
  //     label: index + 1,
  //   }));
  // console.log(items);

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
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        {Array(itemLength)
          .fill(null)
          .map((_, index) => (
            <PaginationItem
              key={index}
              aria-current={page === index + 1 ? "page" : undefined}
            >
              <Button>{index + 1}</Button>
            </PaginationItem>
          ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <Button size="icon" aria-label="次" disabled={!isNextItemActive}>
            <ChevronRightIcon />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};
