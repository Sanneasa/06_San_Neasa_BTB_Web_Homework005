import { Home } from "iconsax-react";
import Link from "next/link";
import SubCartoonCategory from "./SubCartonCategory";


export default function CategoryCartoon({ title }) {
  return (
    <div className="flex gap-2 items-center pt-10 p-10">
      <Link href="/" className="flex items-center gap-1 mt-1">
        <Home size={24} color="#0B3954" />
        <p className="text-[#0B3954] font-bold text-xl">Home</p>
      </Link>
      <span className="text-[#0B3954] text-2xl mx-1 font-bold">›</span>
      <SubCartoonCategory title="Category Cartoon" />
      <span className="text-[#0B3954] text-2xl font-bold mx-1">›</span>
      <Link
        href="/book-categories/how-do-you-live"
        className="flex items-center gap-1 mt-1"
      >
        <p className="text-red-500 font-bold text-xl">{title}</p>
      </Link>
    </div>
  );
}
