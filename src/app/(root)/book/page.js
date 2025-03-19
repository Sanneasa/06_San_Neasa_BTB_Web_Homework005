// src/app/(root)/book/page.js
import BookAll from "@/app/components/BookAll";
import BookCard from "@/app/components/BookCard";
import { getAllBookCategory, getAllBooks } from "@/service/bookService";

export default async function Book({ searchParams }) {
 const searchResult = searchParams?.search || "";
 const categoryFilter = searchParams?.category ?? "All";
 const api = await getAllBooks(searchResult);
 const bookListRaw = api.payload || [];
 const apiCate = await getAllBookCategory();
 const categories = apiCate.payload || [];

  const bookList =
    categoryFilter === "All"
      ? bookListRaw
      : bookListRaw.filter((book) => book.book_cate_id === categoryFilter);

  return (
    <div className="w-fit h-fit rounded-2xl bg-gray-100">
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
