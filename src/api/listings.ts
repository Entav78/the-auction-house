import { getListingsUrl } from '@/constants/api';

export async function fetchListings() {
  const response = await fetch(getListingsUrl());
  if (!response.ok) {
    throw new Error(`Failed to fetch listings: ${response.status}`);
  }
  const data = await response.json();
  return data.data;
}
