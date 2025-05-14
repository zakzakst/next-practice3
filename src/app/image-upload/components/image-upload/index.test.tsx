import { ImageUpload } from ".";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("画像選択した場合、プレビューにimg要素が出る", async () => {
  const { container } = render(<ImageUpload />);
  const user = userEvent.setup();
  const file = new File(["hello"], "hello.png", { type: "image/png" });
  const fileInput = container.querySelector("input") as HTMLInputElement;
  await user.upload(fileInput, file);
  expect(container.querySelector("img")).toBeInTheDocument();
});
