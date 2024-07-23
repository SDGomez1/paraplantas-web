import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    stars: v.number(),
    url: v.string(),
    category: v.string(),
    price: v.number(),
    featuredImage: v.optional(v.id("_storage")),
  }),
  categories: defineTable({
    cateoryName: v.string(),
    products: v.array(v.id("products")),
  }),
});
