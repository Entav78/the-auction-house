import { useEffect, useState } from 'react';
import { fetchListings } from '@/api/listings';
import ListingCard from '@/components/ListingCard';
import type { Listing } from '@/types';

const Home = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchListings()
      .then(setListings)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {listings.map((item) => (
        <ListingCard key={item.id} listing={item} />
      ))}
    </section>
  );
};

export default Home;
