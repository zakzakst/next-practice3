"use client";

import { createContext } from "react";

export type AlertDialogState = {
  isOpen: boolean;
  message: string;
  cancelButtonLabel?: string;
  okButtonLabel?: string;
};

export const initialState: AlertDialogState = {
  isOpen: false,
  message: "",
  cancelButtonLabel: "いいえ",
  okButtonLabel: "はい",
};

export const AlertDialogStateContext =
  createContext<AlertDialogState>(initialState);

export type AlertDialogAction = {
  showAlertDialog: (state?: Partial<Omit<AlertDialogState, "isOpen">>) => void;
  hideAlertDialog: () => void;
};

export const initialAction: AlertDialogAction = {
  showAlertDialog: () => {},
  hideAlertDialog: () => {},
};

export const AlertDialogActionContext = createContext(initialAction);
