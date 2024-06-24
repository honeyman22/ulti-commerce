import ProductCard from "@/components/common/ProductCard";
import { productData } from "@/utils/deleteable/productdata";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <ProductCard data={productData[0]} feature />
    </main>
  );
}
