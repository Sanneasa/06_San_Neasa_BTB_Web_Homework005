"use client";
import { useRouter } from "next/navigation";

export default function FilterComponent({
  categories = [],
  initialCategory = "All",
}) {
  const router = useRouter();

  const handleChange = (category) => {
    const params = new URLSearchParams(window.location.search);
    category === "All"
      ? params.delete("category")
      : params.set("category", category);

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <select
      defaultValue={initialCategory}
      onChange={(e) => handleChange(e.target.value)}
      className="text-[#b3b0b0] bg-white text-center w-fit py-4 px-8 rounded-2xl"
    >
      <option value="All">All Categories</option>
      {categories.map((item) => (
        <option key={item.id} value={item.id}>
          {item.cartoon_genre || item.book_cate_name || "Unnamed Category"}
        </option>
      ))}
    </select>
  );
}
