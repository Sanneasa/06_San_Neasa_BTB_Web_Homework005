import BookAll from "@/app/components/BookAll";
import BookCard from "@/app/components/BookCard";
import { getAllBookCategory, getAllBooks } from "@/service/bookService";


export default async function Book({searchParams}) {
  const searchResult = (await searchParams).search;
  const api = await getAllBooks(searchResult);
  const bookList = api.payload;
  const apiCate = await getAllBookCategory();
  const categories = apiCate.payload;

  return (
    <>
      <div className="w-fit h-fit rounded-2xl bg-gray-100">
        <BookAll title="All Books" categories={categories}/>
        <div className="grid grid-cols-2 pt-20 gap-20 w-[90%]">
          {bookList?.map((book) => (
            <div key={book?.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
