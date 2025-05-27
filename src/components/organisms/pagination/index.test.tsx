import { Pagination } from ".";
import { render, screen } from "@testing-library/react";

test("現在ページに設定したボタンが描画される", () => {
  render(<Pagination limit={5} total={51} current={5} />);
  expect(screen.getByRole("button", { name: "5" })).toBeInTheDocument();
});
