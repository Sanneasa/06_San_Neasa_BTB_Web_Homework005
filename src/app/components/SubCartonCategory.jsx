import Link from "next/link";

export default function SubCartoonCategory({ title }) {
  return (
    <>
      <Link href="/school" className="flex items-center gap-1 mt-1">
        <p className="text-[#0B3954] font-bold text-xl">{title}</p>
      </Link>
    </>
  );
}
