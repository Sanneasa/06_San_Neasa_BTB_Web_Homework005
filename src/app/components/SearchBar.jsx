"use client"
import Form from "next/form";
import { usePathname } from "next/navigation";
import React from "react";
export default function SearchBar() {
  const pathname = usePathname();
  return (
    <>
      <Form action={`${pathname}`} className="py-4 px-6 rounded-full bg-gray-100 flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
        <input
          type="text"
          placeholder="Search anything you want to"
          className=" bg-transparent w-full focus:outline-none pr-4  border-0 focus:ring-0 px-0 py-0"
          name="search"
        />
      </Form>
    </>
  );
}
