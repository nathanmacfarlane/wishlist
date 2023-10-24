import { Inter } from "next/font/google";

import { NavigationSidebar } from "@/components/ui/navigationSidebar";

const inter = Inter({ subsets: ["latin"] });

export default function RouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NavigationSidebar>{children}</NavigationSidebar>;
}
