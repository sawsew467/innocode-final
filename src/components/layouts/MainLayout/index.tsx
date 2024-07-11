import Footer from "./Footer";
import Header from "./Header";
import HeaderSticky from "./HeaderSticky";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderSticky />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
