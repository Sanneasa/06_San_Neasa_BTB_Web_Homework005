import BookAll from "@/app/components/BookAll";
import SchoolCard from "@/app/components/SchoolCard";
import { getAllCarton, getAllCategoryCarton } from "@/service/cartonService";

export const dynamic = "force-dynamic";

export default async function School({ searchParams }) {
 const search = (await searchParams)
  const searchResult = search.search || "";
  const categoryFilter = search.category || "";
 
  const api = await getAllCarton(searchResult);
  const cartoonListRaw = api.payload || [];
  
  const apiCate = await getAllCategoryCarton();
  const categories = apiCate.payload || [];
 
    const cartoonList = 
    !categoryFilter
      ? cartoonListRaw
      : cartoonListRaw.filter(
          (cartoon) => cartoon.ct_genre_id === Number(categoryFilter)
        );

        console.log("Carton:",cartoonList)
 

  return (
    <div className="bg-gray-100 w-full h-fit rounded-2xl">
      <BookAll
        title="Old School Cartoon"
        categories={categories}
        searchParams={searchParams}
      />
      <div className="grid grid-cols-4 mx-auto w-[90%] pt-20 gap-20">
        {cartoonList.length > 0 ? (
          cartoonList.map((cartoon) => (
            <div key={cartoon?.id}>
              <SchoolCard cartoon={cartoon} />
            </div>
          )
          )
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}
