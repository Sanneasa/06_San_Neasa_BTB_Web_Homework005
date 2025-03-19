import Link from "next/link";

export default function SubBookCategory({title}) {
    return (
      <>
        <Link href="/book" className="flex items-center gap-1 mt-1">
          <p className="text-[#0B3954] font-bold text-xl">{title}</p>
        </Link>
      </>
    );
}