
export const getAllBooks = async (query) => {
     const bookList = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${
      query ? `?search=${query}`: ""
     }`);
     const response = await bookList.json();
     return response;
}

export const getBookById = async (id) => {
   const book = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/book/${id}`);
   const response = await book.json();
   return response;
}
export const getAllBookCategory = async () => {
  const carton = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/book_category`
  );
  const response = await carton.json();
  return response;
};
