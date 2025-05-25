import { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "Smart Spoon - وجبات صحية لجسم قوي",
  description = "خدمة توصيل وجبات صحية عالية البروتين مع برامج تغذية مخصصة للرياضيين ومحبي اللياقة البدنية في عُمان",
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col rtl">
      <Navbar />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
