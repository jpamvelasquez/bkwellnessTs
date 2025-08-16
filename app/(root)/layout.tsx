import Footer from "@/components/footer/footer";
import Banner from "@/components/header/banner";

import Header from "@/components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  min-h-screen flex-col">
      <Banner />
      <Header />

      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
}
