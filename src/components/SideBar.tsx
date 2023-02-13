import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import styles from "@/styles/Home.module.css";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "NFTs", href: "/nft", icon: UsersIcon, current: false },
  { name: "Stake", href: "/stake", icon: FolderIcon, current: false },
  {
    name: "Analytics (Soon)",
    href: "#",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Discover (Soon)",
    href: "#",
    icon: InboxIcon,
    current: false,
  },
  { name: "Swap (Soon)", href: "#", icon: ChartBarIcon, current: false },
];

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-64 border-r border-r-[#2D312F] mt-8">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={
            " text-gray-600 hover:bg-gray-50/[.06] hover:rounded-md hover:text-gray-900 flex justify-start items-center pr-20"
          }
        >
          <item.icon className={"mr-4 w-10 h-10"} aria-hidden="true" />

          <h1 className={styles.sideBarText}>{item.name}</h1>
        </a>
      ))}
    </div>
  );
}
