import {
  Pagination as UiPagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  // PaginationLink,
  // PaginationNext,
  // PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type Props = {
  current: number;
  length: number;
  onMove: (page: number) => void;
  className?: string;
};

export const Pagination = ({ current, length, onMove, className }: Props) => {
  const handleOnMove = (page: number, isCurrent: boolean = false) => {
    if (isCurrent || page < 1 || page > length) return;
    onMove(page);
  };

  if (!length) return null;

  return (
    <UiPagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <Button
            aria-label="Go to previous page"
            size="default"
            className="gap-1 px-2.5 sm:pl-2.5"
            variant="ghost"
            disabled={current === 1}
            onClick={() => handleOnMove(current - 1)}
          >
            <ChevronLeftIcon />
            <span className="hidden sm:block">Previous</span>
          </Button>
        </PaginationItem>
        {[...Array(length)].map((_, index) => {
          const pageNum = index + 1;
          const isCurrent = pageNum === current;
          return (
            <PaginationItem key={pageNum}>
              <Button
                variant={isCurrent ? "outline" : "ghost"}
                size="icon"
                onClick={() => handleOnMove(pageNum, isCurrent)}
                // disabled={isCurrent}
              >
                {pageNum}
              </Button>
            </PaginationItem>
          );
        })}
        <PaginationItem>
          <Button
            aria-label="Go to next page"
            size="default"
            className="gap-1 px-2.5 sm:pr-2.5"
            variant="ghost"
            disabled={current === length}
            onClick={() => handleOnMove(current + 1)}
          >
            <span className="hidden sm:block">Next</span>
            <ChevronRightIcon />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </UiPagination>
  );
};
