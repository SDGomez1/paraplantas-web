"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import CategorySection from "./CategorySection";

export default function CategoryCreators() {
  const categories = useQuery(api.categories.getCategories);
  const categoriesSections = categories?.map((category) => {
    if (category.products.length > 0) {
      return <CategorySection key={category._id} category={category} />;
    }
  });
  return <>{categoriesSections}</>;
}
