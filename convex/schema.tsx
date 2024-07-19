import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    stars: v.number(),
    url: v.string(),
  }),
});
