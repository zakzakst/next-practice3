import { AlertDialogProvider } from "./provider";
import { AlertDialog } from "@/components/organisms/alertDialog";
import { render, screen } from "@testing-library/react";

const TestComponent = () => {
  return (
    <AlertDialogProvider defaultState={{ message: "テキスト", isOpen: true }}>
      <AlertDialog />
    </AlertDialogProvider>
  );
};

// TODO: テストコード上手くできない。対応方法調べる
test("メッセージが反映される", () => {
  render(<TestComponent />);
  // screen.debug();
  expect(screen.getByRole("alertdialog")).toBeInTheDocument();
});
