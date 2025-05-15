"use client";

import { useAlertDialogAction } from "@/components/organisms/alertDialog/hooks";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { showAlertDialog, hideAlertDialog } = useAlertDialogAction();

  return (
    <div>
      <Button
        onClick={() =>
          showAlertDialog({
            message: "test",
            okButtonLabel: "実行",
            cancelButtonLabel: "キャンセル",
          })
        }
      >
        開く
      </Button>
      <Button onClick={() => hideAlertDialog()}>閉じる</Button>
    </div>
  );
};

export default Page;
