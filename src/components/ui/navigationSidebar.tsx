"use client";

import { LucideIcon, User, Users, Menu } from "lucide-react";

import { useOnClickOutside } from "usehooks-ts";

import Link from "next/link";
import { PropsWithChildren, useRef, useState } from "react";
import { Button } from "./button";
import { HStack } from "./hstack";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { title: "My List", route: "/my-list", Icon: User },
  { title: "Friends", route: "/friends", Icon: Users },
];

export type NavigationProps = PropsWithChildren<{}>;

export const NavigationSidebar: React.FC<NavigationProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef(null);

  const pathname = usePathname();

  console.log("router.pathname: ", pathname);

  useOnClickOutside(ref, (event) => {
    event.preventDefault();
    setSidebarOpen(false);
  });

  const sidebar = (
    <aside
      className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-background border-r border-gray-200 dark:border-gray-700"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-background">
        <ul className="space-y-2 font-medium">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.title}
              onPress={() => setSidebarOpen(false)}
              isActive={pathname === item.route}
              {...item}
            />
          ))}
        </ul>
      </div>
    </aside>
  );

  return (
    <div>
      <div ref={ref}>
        <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-background dark:border-gray-700 px-5 h-[60px]">
          <HStack justify="between" className="h-full items-center">
            <div className="flex items-center gap-x-2">
              <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                variant="ghost"
                size="icon"
                className="sm:hidden"
              >
                <Menu className="h-6 w-6" />
              </Button>
              Wishlist
            </div>
            <UserButton afterSignOutUrl="/" />
          </HStack>
        </nav>
        <div className="hidden sm:block">{sidebar}</div>
        <div className="sm:hidden">{sidebarOpen ? sidebar : null}</div>
      </div>
      <div className="p-4 sm:ml-64 mt-16">{children}</div>
    </div>
  );
};

const NavItem = (props: {
  title: string;
  route: string;
  Icon: LucideIcon;
  isActive?: boolean;
  onPress: () => void;
}) => {
  const { title, route, onPress, isActive, Icon } = props;
  return (
    <li>
      <Link
        href={route}
        onClick={onPress}
        className={cn(
          isActive && "bg-gray-100 dark:bg-gray-700",
          "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
        )}
      >
        <Icon className="h-5 w-5" />
        <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
      </Link>
    </li>
  );
};
