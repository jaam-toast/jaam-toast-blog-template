import Footer from "./footer";
import Meta from "./meta";

const Layout = ({ preview, children }) => {
  return (
    <>
      <Meta />
      <div className="p-5">
        <main className="p-10">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
