const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen grid grid-rows-[max-content_1fr]">
      <div className="bg-gray-500 h-16 top-0 sticky z-10">HEADER</div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
