
import FilterComponent from "./FilterComponent";

export default function BookAll({ title, categories, categoryCarton }) {
  return (
    <>
      <div className="p-10  mt-20 flex justify-between">
        <p className=" text-[#087E8B] font-bold bg-white text-center w-fit py-4 px-8 rounded-2xl">
          {title}
        </p>
        <FilterComponent
          listCategory={categories}
          categoryCarton={categoryCarton}
        />
      </div>
      <div className=" mx-auto w-[95%] h-[1px] bg-[#087E8B]"></div>
    </>
  );
}
