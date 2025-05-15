import { AlertDialogProvider } from "@/components/organisms/alertDialog/provider";
import { AlertDialog } from "@/components/organisms/alertDialog";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <AlertDialogProvider>
      {children}
      <AlertDialog />
    </AlertDialogProvider>
  );
};

export default Layout;
