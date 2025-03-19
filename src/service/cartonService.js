export const getAllCarton = async (query) => {
    const cartonList = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${
    query ? `?search=${query}`:""
    }`);
    const response = await cartonList.json();
    return response;
}
export const getCarton = async (id) => {
    const carton = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon/${id}`)
    const response = await carton.json();
    return response;
}

export const getAllCategoryCarton = async () => {
  const carton = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cartoon_genre`);
  const response = await carton.json();
  return response;
};

