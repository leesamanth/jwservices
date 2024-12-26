import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Vendors',
  description: 'Vendors List'
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;