import { MicrophoneContextProvider } from "@/components/context/MicrophoneContextProvider";
import Footer from "./Footer";
import Header from "./Header";
import HeaderSticky from "./HeaderSticky";
import { DeepgramContextProvider } from "@/components/context/DeepgramContextProvider";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
     <MicrophoneContextProvider>
     
     <DeepgramContextProvider> 
      <>
      <HeaderSticky />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      </>
     </DeepgramContextProvider>
   </MicrophoneContextProvider>
     
    </>
  );
}

export default MainLayout;
