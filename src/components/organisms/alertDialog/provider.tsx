"use client";

import { useCallback, useState } from "react";
import {
  AlertDialogActionContext,
  AlertDialogState,
  AlertDialogStateContext,
  initialState,
} from "./context";

type Props = {
  children: React.ReactNode;
  defaultState?: Partial<AlertDialogState>;
};

export const AlertDialogProvider = ({ children, defaultState }: Props) => {
  const [state, setState] = useState({ ...initialState, ...defaultState });

  const showAlertDialog = useCallback(
    (props?: Partial<Omit<AlertDialogState, "isOpen">>) => {
      setState((prev) => ({ ...prev, ...props, isOpen: true }));
    },
    []
  );

  const hideAlertDialog = useCallback(() => {
    setState((prev) => ({ ...prev, isOpen: false }));
  }, []);

  return (
    <AlertDialogStateContext.Provider value={state}>
      <AlertDialogActionContext.Provider
        value={{ showAlertDialog, hideAlertDialog }}
      >
        {children}
      </AlertDialogActionContext.Provider>
    </AlertDialogStateContext.Provider>
  );
};
