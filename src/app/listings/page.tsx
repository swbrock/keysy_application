import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const listings = await api.listing.all();

  return (
    <HydrateClient>
      <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
        <h1 className="mb-8 text-4xl font-bold">Latest Listings</h1>
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="rounded-lg border p-4 shadow hover:shadow-lg"
            >
              <h2 className="mb-2 text-2xl font-semibold">{listing.make}</h2>
              <p className="mb-1">Model: {listing.model}</p>
              <p className="mb-1">Year: {listing.year}</p>
              <p className="mb-1">Price: ${listing.price}</p>
            </div>
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}
