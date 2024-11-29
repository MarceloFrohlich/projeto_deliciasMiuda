import LeftSideBar from "../components/leftSidebar/leftSidebar";
import MainHeader from "../components/mainheader/mainheader";
import "../globals.css";


export default function PainelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-[100vw] h-[100vh] overflow-y-auto fine-line-scrollbar relative font-sans">

      <MainHeader />

      <div className="h-full w-full flex flex-1">
        <LeftSideBar />
        <div className='flex-1'>
          {children}
        </div>

      </div>
    </section>
  );
}
