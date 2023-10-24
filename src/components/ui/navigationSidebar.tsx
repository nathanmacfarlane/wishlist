"use client";

import { LucideIcon, User, Users, Menu } from "lucide-react";

import { useOnClickOutside } from "usehooks-ts";

import Link from "next/link";
import { PropsWithChildren, RefObject, useRef, useState } from "react";
import { Button } from "./button";

const NAV_ITEMS = [
  { title: "My List", route: "/", Icon: User },
  { title: "Friends", route: "/friends", Icon: Users },
];

/* eslint-disable @next/next/no-img-element */
export type NavigationProps = PropsWithChildren<{}>;

export const NavigationSidebar: React.FC<NavigationProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const ref = useRef(null);

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
            <NavItem key={item.title} {...item} />
          ))}
        </ul>
      </div>
    </aside>
  );

  return (
    <div>
      <div ref={ref}>
        <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-background dark:border-gray-700 px-5 py-3 sm:py-5">
          <div className="flex items-center gap-x-2">
            <Button
              onClick={() => setSidebarOpen(true)}
              variant="ghost"
              size="icon"
              className="sm:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
            Header
          </div>
        </nav>
        <div className="hidden sm:block">{sidebar}</div>
        <div className="sm:hidden">{sidebarOpen ? sidebar : null}</div>
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-1 mt-16">{children}</div>
      </div>
    </div>
  );
};

const NavItem = (props: { title: string; route: string; Icon: LucideIcon }) => {
  const { title, route, Icon } = props;
  return (
    <li>
      <Link
        href={route}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      >
        <Icon className="h-5 w-5" />
        <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
      </Link>
    </li>
  );
};
