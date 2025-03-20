// src/app/(root)/book/page.js
import BookAll from "@/app/components/BookAll";
import BookCard from "@/app/components/BookCard";
import { getAllBookCategory, getAllBooks } from "@/service/bookService";

export default async function Book({ searchParams }) {
 const search = (await searchParams)
 const searchResult = search.search || "";
 const categoryFilter = search.category || "";

 const api = await getAllBooks(searchResult);
 const bookListRaw = api.payload || [];

 const apiCate = await getAllBookCategory();
 const categories = apiCate.payload || [];

   const bookList =
    !categoryFilter
      ? bookListRaw
      : bookListRaw.filter((book) => book.book_cate_id === Number(categoryFilter));


  return (
    <div className="w-full h-fit rounded-2xl bg-gray-100">
      <BookAll
        title="All Books"
        categories={categories}
        searchParams={searchParams}
      />
      <div className="grid grid-cols-2 pt-20 gap-20 w-[90%] mx-auto">
        {bookList.length > 0 ? (
          bookList.map((book) => (
            <div key={book?.id}>
              <BookCard book={book} />
            </div>
          ))
        ) : (
          <p>No books found.</p>
        )}
      </div>
    </div>
  );
}
