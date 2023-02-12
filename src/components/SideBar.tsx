/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
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

const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "NFTs", href: "#", icon: UsersIcon, current: false },
  { name: "Stake", href: "#", icon: FolderIcon, current: false },
  { name: "Analytics", href: "#", icon: CalendarIcon, current: false },
  { name: "Discover", href: "#", icon: InboxIcon, current: false },
  { name: "Swap", href: "#", icon: ChartBarIcon, current: false },
];

export default function SideBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="w-1/6  border-r border-r-[#2D312F]">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={
            " text-gray-600 hover:bg-gray-50 hover:text-gray-900 flex justify-start items-center"
          }
        >
          <item.icon
            className={
              "text-gray-600 hover:bg-gray-50 hover:text-gray-900 mr-4 w-10 h-10"
            }
            aria-hidden="true"
          />
          <h1>{item.name}</h1>
        </a>
      ))}
    </div>
  );
}
