import { useQuery } from "convex/react";
import { Doc } from "../../../convex/_generated/dataModel";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import ProductCard from "./ProductCard";
import { api } from "../../../convex/_generated/api";

export default function CategorySection(props: {
  category: Doc<"categories">;
}) {
  const productsIds = useQuery(api.categories.getDevicesByCategory, {
    category: props.category._id,
  });
  const productArray =
    productsIds && productsIds !== undefined ? productsIds.slice(0, 10) : [];
  const products = useQuery(api.products.getProductsById, {
    productsId: productArray,
  });
  const productCards = products?.map((product) => {
    if (product) return <ProductCard key={product._id} product={product} />;
  });
  return (
    <section className="flex flex-col py-6 bg-white mx-16 rounded-xl">
      <h2 className="font-bold text-3xl px-16 mb-8">
        {props.category.cateoryName}
      </h2>
      <ScrollArea>
        <div className="flex gap-10 pointer-events-auto px-16">
          {productCards}
        </div>
        <ScrollBar orientation="horizontal"></ScrollBar>
      </ScrollArea>
    </section>
  );
}
