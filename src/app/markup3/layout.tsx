type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="mx-auto max-w-sm w-full">{children}</div>;
};

export default Layout;
