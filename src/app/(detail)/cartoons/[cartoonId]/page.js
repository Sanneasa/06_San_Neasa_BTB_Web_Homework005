
import CategoryCartoon from "@/app/components/CategoryCartoon";
import { getCarton } from "@/service/cartonService";
import { Eye } from "iconsax-react";
import Image from "next/image";

export default async function CartonDetail({ params }) {
  const { cartoonId } = await params;
  const api = await getCarton(cartoonId);
  const carton = api.payload;
  return (
    <>
      <div>
        <div className="h-full w-full bg-gray-100 rounded-2xl  relative mt-50 ">
          <CategoryCartoon title={carton?.ct_title} />
          {/* Image Section */}
          <div className="absolute  -top-40 right-20">
            <Image
              width={330}
              height={330}
              className=" rounded-xl shadow-md shadow-gray-500"
              src={carton?.image}
              alt="Book cover: How Do You Live?"
            />
          </div>

          {/* Text Section */}
          <div className="pt-64 p-10">
            <p className="text-[#0B3954] font-bold text-xl pb-4">
              {carton?.ct_title}
            </p>
            <div className="flex gap-2">
              <p>by</p>
              <p className="text-[#087E8B] font-bold text-xl pb-2">
                {carton?.ct_creator}
              </p>
            </div>
            <div className="my-2 flex gap-4 items-center">
              <Eye size={24} color="#087E8B" />
              <p className="text-[#087E8B] font-bold">
                {carton?.view_count} view
              </p>
              <p className="text-[#087E8B] font-bold">|</p>
              <p className="text-[#087E8B] font-bold">
                {carton?.published_year}
              </p>
            </div>
            <p className="w-full text-gray-500">{carton?.ct_description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
