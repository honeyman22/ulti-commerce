import ProductCard from "@/components/common/ProductCard";
import PrimaryBanner from "@/components/home/PrimaryBanner";
import SecondBanner from "@/components/home/SecondBanner";
import { productData } from "@/utils/deleteable/productdata";

export default function Home() {
  return (
    <main className="flex  flex-col gap-6 items-center p-4 ">
      <PrimaryBanner />
      <SecondBanner />
      <div className="w-full flex gap-4   overflow-hidden">
        <ProductCard data={productData[0]} feature />{" "}
        <ProductCard data={productData[0]} feature />
      </div>
    </main>
  );
}
