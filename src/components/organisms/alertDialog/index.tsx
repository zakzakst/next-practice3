"use client";

import {
  AlertDialog as ShadcnAlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
} from "@/components/ui/alert-dialog";
import { useAlertDialogState, useAlertDialogAction } from "./hooks";

export const AlertDialog = () => {
  const { isOpen, message, okButtonLabel, cancelButtonLabel } =
    useAlertDialogState();

  const { hideAlertDialog } = useAlertDialogAction();

  const handleOpenChange = (open: boolean) => {
    if (!open) hideAlertDialog();
  };

  return (
    <ShadcnAlertDialog open={isOpen} onOpenChange={handleOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>確認</AlertDialogTitle>
          <AlertDialogDescription>{message}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {cancelButtonLabel && (
            <AlertDialogCancel>{cancelButtonLabel}</AlertDialogCancel>
          )}
          {okButtonLabel && (
            <AlertDialogAction>{okButtonLabel}</AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  );
};
