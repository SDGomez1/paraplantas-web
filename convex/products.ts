import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getProductsById = query({
  args: {
    productsId: v.array(v.id("products")),
  },
  handler: async (ctx, args) => {
    const productsListPromise = args.productsId.map(async (productId) => {
      return await ctx.db.get(productId);
    });
    const productsList = await Promise.all(productsListPromise);
    return productsList;
  },
});
export const getProductFeaturedImage = query({
  args: {
    featuredImageId: v.optional(v.id("_storage")),
  },
  handler: async (ctx, args) => {
    if (args.featuredImageId) {
      const url = await ctx.storage.getUrl(args.featuredImageId);
      return url;
    }
  },
});
