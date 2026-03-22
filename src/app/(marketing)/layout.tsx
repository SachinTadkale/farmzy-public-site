import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import SmoothScroll from "@/components/layout/smoothscroll";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <Navbar />
      <div className="relative">
        {children}
      </div>
      <Footer />
    </SmoothScroll>
  );
}
