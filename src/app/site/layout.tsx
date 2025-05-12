import { Header } from "./components/header";
import { Footer } from "./components/footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="min-h-screen flex flex-col relative">
        <Header className="sticky top-0" />
        <main className="flex-grow">{children}</main>
        <Footer className="sticky bottom-0" />
      </div>
    </>
  );
};

export default Layout;
