import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputWithError } from ".";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const user = userEvent.setup();

const TestComponent = () => {
  const { control, handleSubmit } = useForm<{ email: string }>({
    resolver: zodResolver(
      z.object({ email: z.string().email("エラーメッセージ") })
    ),
    defaultValues: { email: "" },
  });
  return (
    <form onSubmit={handleSubmit(() => {})}>
      <InputWithError name="email" control={control} label="メールアドレス" />
      <button type="submit">送信</button>
    </form>
  );
};

test("ラベル文言が反映される", () => {
  render(<TestComponent />);
  expect(screen.getByText("メールアドレス")).toBeInTheDocument();
});

test("バリデーションが正しく挙動する", async () => {
  render(<TestComponent />);
  const inputEl = screen.getByRole("textbox");
  await user.type(inputEl, "invalid email");
  await act(() => {
    expect(screen.getByDisplayValue("invalid email")).toBeInTheDocument();
  });
  await user.click(screen.getByRole("button", { name: "送信" }));
  await act(() => {
    expect(screen.getByText("エラーメッセージ")).toBeInTheDocument();
  });
  await user.clear(inputEl);
  await user.type(inputEl, "sample@mail.com");
  await act(() => {
    expect(screen.queryByText("エラーメッセージ")).not.toBeInTheDocument();
  });
});
