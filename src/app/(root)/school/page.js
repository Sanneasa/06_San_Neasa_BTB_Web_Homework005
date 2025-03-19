
import BookAll from "@/app/components/BookAll";
import SchoolCard from "@/app/components/SchoolCard";
import { getAllCarton, getAllCategoryCarton } from "@/service/cartonService";

export default async function School({searchParams}) {
  const searchResult = (await searchParams).search;
  const api = await getAllCarton(searchResult);
  const cartonList = api.payload;
  const categoryApi = getAllCategoryCarton()
  const categoryCarton = categoryApi.payload;
  return (
    <>
      <div className="bg-gray-100 w-fit h-fit rounded-2xl">
        <BookAll title="Old School Cartoon" categoryCarton={categoryCarton} />
        <div className="grid grid-cols-3 mx-auto w-[90%]">
          {cartonList.map((carton) => (
            <div key={carton?.id}>
              <SchoolCard carton={carton} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
