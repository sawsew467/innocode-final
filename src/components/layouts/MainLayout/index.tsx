import Footer from "./Footer";
import Header from "./Header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mt-24 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
