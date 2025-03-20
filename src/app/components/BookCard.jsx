import Link from "next/link"; // Correct import for navigation
import Image from "next/image";

export default function BookCard({book}) {
  return (
    <div className="p-10 relative ">
      <Link
        href={`/books/${book?.id}`}
        className="h-[350px] w-full flex bg-white flex-col items-center border border-gray-200 rounded-xl shadow-sm md:flex-row hover:shadow-md transition-shadow"
      >
        <Image
          width={200}
          height={300} // Adjusted height to fit container better
          className="absolute -top-7 left-20 object-cover rounded-xl shadow-md shadow-gray-500"
          src={book?.image}
          alt="Book cover: How Do You Live?"
        />
        <div className="p-5 flex-1">
          <div className="absolute left-80 top-14">
            {" "}
            {/* Adjusted top-50 to top-10 for better spacing */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {book?.book_title}
            </h5>
            <p className="mb-3 text-gray-700 w-[75%] line-clamp-10">
              {book.description}
              </p>
          </div>
          <div className="absolute bottom-20 left-24 w-[170px] px-2 py-4 bg-[#BFD7EA] flex items-center justify-center rounded-2xl">
            <span className="text-sm font-semibold">READ FULL ARTICLE</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
