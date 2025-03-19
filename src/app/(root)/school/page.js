import BookAll from "@/app/components/BookAll";
import SchoolCard from "@/app/components/SchoolCard";
import { getAllCarton, getAllCategoryCarton } from "@/service/cartonService";

export const dynamic = "force-dynamic";

export default async function School({ searchParams }) {
 
  const searchQuery = searchParams?.search || "";
  const categoryId = searchParams?.category
    ? Number(searchParams.category)
    : null;


  const [cartons, categories] = await Promise.all([
    getAllCarton(searchQuery),
    getAllCategoryCarton(),
  ]);


  const filteredCartons = categoryId
    ? cartons.payload?.filter((c) => c.cartoon_genre_id === categoryId) || []
    : cartons.payload || [];

  return (
    <div className="bg-gray-100 w-fit h-fit rounded-2xl">
      <BookAll
        title="Old School Cartoon"
        categories={categories.payload || []}
        initialCategory={categoryId?.toString() || "All"}
      />
      <div className="grid grid-cols-3 mx-auto w-[90%] pt-20 gap-20">
        {filteredCartons.map((carton) => (
          <SchoolCard key={carton.id} carton={carton} />
        ))}
      </div>
    </div>
  );
}
