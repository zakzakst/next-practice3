"use client";

import { useContext } from "react";
import { AlertDialogStateContext, AlertDialogActionContext } from "./context";

export const useAlertDialogState = () => {
  return useContext(AlertDialogStateContext);
};

export const useAlertDialogAction = () => {
  return useContext(AlertDialogActionContext);
};
