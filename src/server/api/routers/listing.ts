import { createTRPCRouter, publicProcedure } from "../trpc";

export const listingRouter = createTRPCRouter({
  // get all listings
  all: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.listings.findMany({
      orderBy: { make: "desc" },
    });
  }),
});
