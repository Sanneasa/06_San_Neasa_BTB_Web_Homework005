
import {  Eye } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";


export default function SchoolCard({ cartoon }) {
  return (
    <div className="p-12">
      <Link href={`/cartoons/${cartoon?.id}`} className="block">
        <Image
          width={300}
          height={200}
          alt="The Hidden Treasure"
          src={cartoon?.image}
          className="object-cover rounded-2xl shadow-md shadow-gray-500"
        />
        <div className="px-4">
          <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
            {cartoon?.ct_title}
          </h3>
          <div className="mt-2 flex gap-4 items-center">
            <Eye size={24} color="#087E8B" />
            <p className="text-[#087E8B] font-bold">
              {cartoon?.view_count} view
            </p>
            <p className="text-[#087E8B] font-bold">|</p>
            <p className="text-[#087E8B] font-bold">
              {cartoon?.published_year}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
