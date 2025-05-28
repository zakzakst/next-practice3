import { Pagination } from ".";
import { render, screen } from "@testing-library/react";

test("現在ページに設定したボタンが描画される", () => {
  render(<Pagination limit={5} total={51} current={5} />);
  expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
});

test("現在ページが1の場合、前ボタンが無効になる", () => {
  render(<Pagination limit={5} total={51} current={1} />);
  expect(screen.getByRole("button", { name: "前" })).toBeDisabled();
});

test("現在ページが最後の場合、次ボタンが無効になる", () => {
  render(<Pagination limit={5} total={51} current={11} />);
  expect(screen.getByRole("button", { name: "次" })).toBeDisabled();
});
