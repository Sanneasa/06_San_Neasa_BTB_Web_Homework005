import { ArrowCircleDown } from "iconsax-react";

export default function OldSchool() {
  return (
    <>
      <div className="p-10  mt-20 flex justify-between">
        <p className=" text-[#087E8B] font-bold bg-white text-center w-fit py-4 px-8 rounded-2xl">
          Old School Carton
        </p>
        <p className=" text-[#b3b0b0] bg-white text-center w-fit py-4 px-8 rounded-2xl flex gap-5">
          Filter By Category
          <ArrowCircleDown size={24} color="#B9B9B9"></ArrowCircleDown>
        </p>
      </div>
      <div className=" mx-auto w-[95%] h-[1px] bg-[#087E8B]"></div>
    </>
  );
}
