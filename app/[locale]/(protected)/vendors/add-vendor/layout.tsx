import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Add new Vendor',
  description: 'Add  new vendor'
}
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  );
};

export default Layout;