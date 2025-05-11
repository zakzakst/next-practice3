type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return <div className="mx-auto max-w-2xl w-full">{children}</div>;
};

export default Layout;
