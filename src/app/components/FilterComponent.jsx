
export default function FilterComponent({ listCategory, categoryCarton }) {
  // if(path === "")

  return (
    <div>
      <select
        defaultValue={"All"}
        id="pricingType"
        name="pricingType"
        className="text-[#b3b0b0] bg-white text-center w-fit py-4 px-8 rounded-2xl flex gap-5 p-2"
      >
        {listCategory?.map((item) => (
          <option value={item.id}>
            {item.cartoon_genre || item.book_cate_name}
          </option>
        ))}
      </select>
    </div>
  );
}