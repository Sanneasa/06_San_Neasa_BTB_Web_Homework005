import FilterComponent from "./FilterComponent";

export default function BookAll({
  title,
  categories = [],
  initialCategory = "All",
}) {
  return (
    <>
      <div className="p-10 mt-20 flex justify-between">
        <p className="text-[#087E8B] font-bold bg-white text-center w-fit py-4 px-8 rounded-2xl">
          {title}
        </p>
        <FilterComponent
          categories={categories}
          initialCategory={initialCategory}
        />
      </div>
      <div className="mx-auto w-[95%] h-[1px] bg-[#087E8B]"></div>
    </>
  );
}
