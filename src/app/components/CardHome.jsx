import { Tag } from "iconsax-react";
import Link from "next/link";
import Image from "next/image";

export default function CardHome() {
  return (
    <div>
      <Link
        href="/book"
        className="group relative block bg-black w-[300px] h-[400px] rounded-2xl"
      >
        <Image
          alt="home"
          src="/images/book.png" // Use a string path to the image in public/
          width={500} // Required: match the container width
          height={600} // Required: match the container height
          className="absolute inset-0 w-full h-full rounded-2xl object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-2 sm:p-2 lg:p-2">
          <p className="text-[#087E8B] font-bold bg-white text-center w-fit py-2 px-2 rounded-2xl flex gap-2">
            <Tag size={24} color="#087E8B" />
            Book
          </p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center p-4 transform opacity-0 transition-all group-hover:opacity-100">
          <p className="text-2xl text-white font-bold text-center">
            View all <br />
            Availible <br />
            Book
          </p>
        </div>
      </Link>
    </div>
  );
}
