import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useMemo } from "react";

type Item = {
  type: "number" | "ellipsis";
  value: number | null;
};

type Props = {
  limit: number;
  total: number;
  current: number;
};

export const Pagination = ({ limit, total, current }: Props) => {
  const max = Math.ceil(total / limit);

  const items: Item[] = useMemo(() => {
    const result: Item[] = [];
    result.push({
      type: "number",
      value: 1,
    });
    if (current > 4) {
      result.push({
        type: "ellipsis",
        value: null,
      });
    }
    const r = 1; // ボタンを表示する範囲currentのプラスマイナス
    const r1 = current - r;
    const r2 = current + r;
    for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) {
      result.push({
        type: "number",
        value: i,
      });
    }
    if (r2 + 1 < max) {
      result.push({
        type: "ellipsis",
        value: null,
      });
    }
    if (r2 < max)
      result.push({
        type: "number",
        value: max,
      });
    return result;
  }, [current, max]);

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <Button size="icon" aria-label="前" disabled={current === 1}>
            <ChevronLeftIcon />
          </Button>
        </PaginationItem>
        {items.map((item, index) => (
          <PaginationItem
            key={index}
            aria-current={current === item.value ? "page" : undefined}
          >
            {item.type === "ellipsis" && <PaginationEllipsis />}
            {item.type === "number" && <Button>{item.value}</Button>}
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button size="icon" aria-label="次" disabled={current === max}>
            <ChevronRightIcon />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};
