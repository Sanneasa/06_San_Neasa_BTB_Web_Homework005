"use client";
import {
  Airplane,
  Book,
  Camera,
  Code,
  Edit,
  EmojiHappy,
  Home,
  Music,
  Setting,
  Video,
  Weight,
} from "iconsax-react";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function SideBar() {
  const pathname = usePathname();
  const isActive = (path) => pathname === path;
  const defaultIconColor = "#C81D25";
  const iconSize = 24;
  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/book", icon: Book, label: "Book Categories" },
    { href: "/school", icon: EmojiHappy, label: "Old-school Cartoons" },
    { href: "/video", icon: Video, label: "Movies & TV show" },
    { href: "/music", icon: Music, label: "Music" },
    { href: "/camera", icon: Camera, label: "Photography" },
    { href: "/sport", icon: Weight, label: "Sports & Fitness" },
    { href: "/code", icon: Code, label: "Technology & Gadgets" },
    { href: "/travel", icon: Airplane, label: "Travel & Exploration" },
    { href: "/writing", icon: Edit, label: "Writing & Journaling" },
  ];

  return (
    <div className="h-screen">
      <aside className="w-full h-full bg-white shadow-md">
        <div className="h-[220px]">
          <div className="p-4 flex justify-center">
            <Image
            priority
              height={120}
              width={120}
              className="rounded-full"
              src="https://i.pinimg.com/736x/03/7b/22/037b2242152e89a42ff372e3c7b3d8ae.jpg"
              alt="profile"
            />
          </div>
          <div className="flex justify-center">
            <p className="text-xl">San Neasa</p>
          </div>
          <p className="text-[#087E8B] pl-20">sanneasa28@gmail.com</p>
        </div>
        <nav className="mt-5 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center px-2 py-2 text-base font-medium rounded-md gap-4 ${
                isActive(item.href) ? "bg-[#F9D8D6]" : "hover:bg-gray-100"
              }`}
            >
              <item.icon size={iconSize} color={defaultIconColor} />
              <p
                className={`${
                  isActive(item.href) ? "text-[#C81D25]" : "text-gray-600"
                }`}
              >
                {item.label}
              </p>
            </Link>
          ))}
        </nav>
        <div className="p-3">
          <Link
            href="#"
            className="mt-1 group flex items-center px-2 py-2 text-base font-medium gap-4 h-[40px] w-[250px] bg-gray-200 rounded-2xl"
          >
            <Setting size={24} color="#212121" />
            <p>Settings</p>
          </Link>
        </div>
      </aside>
    </div>
  );
}
