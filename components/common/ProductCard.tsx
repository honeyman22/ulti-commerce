import { Rating } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { IoHeart } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";

const ProductCard = ({
  data,
  feature,
}: {
  data: {
    quantity: number;
    price: number;
    finalPrice: number;
    discountPrice: number;
    createdAt: string;
    name: string;
    shortDescription: string;
    image: string;
    new: boolean;
  };
  feature?: boolean;
}) => {
  const product = {
    quantity: 1,
    price: 10000,
    finalPrice: 10010,
    discountPrice: 10,
    createdAt: "2022-11-11T14:47:39.000Z",
    name: "Product Name",
    shortDescription:
      "edewd yfewu fyuewg fjhdjhfg ay fhgreuy fiiuhfgasdjhgfhs u",
    image:
      "https://govisually.com/wp-content/uploads/2023/03/use-bokeh-for-product-photography.png",
    new: true,
  };
  return (
    <div className="group relative p-2.5 rounded border">
      <div className="image-container w-[196px] sm:w-[300px] h-[196px] sm:h-[332px] relative">
        <Image
          className="rounded object-cover"
          src={product.image}
          alt="Product Image"
          layout="fill"
        />
      </div>

      <div className="px-3 mt-4 sm:mt-7 flex flex-col ">
        <h3 className="font-bold ">{product.name}</h3>
        <p className="text-sm font-medium text-gray">
          Small appliances, kitchen
        </p>
        {feature ? (
          <p className="font-semibold text-primary">Discount upto -45%</p>
        ) : (
          <>
            <p className="text-lg font-semibold text-primary">
              Rs {product.finalPrice}{" "}
              <span className="text-sm line-through font-normal text-gray">
                Rs {product.price}
              </span>
            </p>
            <Rating
              defaultValue={2}
              color="yellow"
              value={2.5}
              fractions={2}
              readOnly
            />
          </>
        )}
        {!feature && (
          <div className="group-hover:flex hidden flex-col gap-2 absolute top-5 right-5">
            <button className="w-9 h-9 rounded-full  bg-white shadow-sm flex items-center justify-center">
              <IoHeart size={24} className="text-gray" />
            </button>
            <button className="w-9 h-9 rounded-full  bg-white shadow-sm flex items-center justify-center">
              <MdShoppingCart size={24} className="text-gray" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
