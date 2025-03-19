
import CategoryBook from "@/app/components/CategoryBook";
import { getBookById } from "@/service/bookService";
import Image from "next/image";

export default async function DetailPage({ params }) {
  const { bookId } = await params;
  const api = await getBookById(bookId);
  const book = api.payload;
  return (
    <>
      <div>
        <div className="h-full w-full bg-gray-100 rounded-2xl  relative mt-50 ">
          <CategoryBook title={book.book_title} />
          {/* Image Section */}
          <div className="absolute  -top-40 right-20">
            <Image
              width={330}
              height={330}
              className=" rounded-xl shadow-md shadow-gray-500"
              src={book?.image}
              alt="Book cover: How Do You Live?"
            />
          </div>

          {/* Text Section */}
          <div className="pt-64 p-10">
            <p className="text-[#0B3954] font-bold text-xl pb-4">
              {book?.book_title}
            </p>
            <div className="flex gap-2">
              <p>by</p>
              <p className="text-[#087E8B] font-bold text-xl pb-2">
                {book?.book_author}
              </p>
            </div>
            <p className="w-full text-gray-500">{book?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
