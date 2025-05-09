import type { Listing } from '@/types';

interface ListingCardProps {
  listing: Listing;
}

const ListingCard = ({ listing }: ListingCardProps) => {
  const { title, description, media, endsAt, _count } = listing;

  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <h2 className="text-xl font-semibold">{title}</h2>

      {media?.[0] && (
        <img
          src={media[0].url}
          alt={media[0].alt}
          className="w-full h-48 object-cover my-2"
        />
      )}

      <p className="text-sm text-gray-700">{description}</p>
      <p className="text-xs text-gray-500 mt-2">
        Ends: {new Date(endsAt).toLocaleString()}
      </p>
      <p className="text-xs text-gray-600">Bids: {_count.bids}</p>
    </div>
  );
};

export default ListingCard;
