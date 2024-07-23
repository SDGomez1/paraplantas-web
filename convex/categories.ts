import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getCategories = query({
  args: {},
  handler: async (ctx, args) => {
    const categories = await ctx.db.query("categories").collect();
    return categories;
  },
});

export const getDevicesByCategory = query({
  args: {
    category: v.id("categories"),
  },
  handler: async (ctx, args) => {
    const category = await ctx.db.get(args.category);
    return category?.products;
  },
});
