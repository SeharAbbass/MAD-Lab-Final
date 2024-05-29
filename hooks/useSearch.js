// hooks/useSearch.js or hooks/useSearch.ts
import { useState, useEffect } from 'react';

export const useSearch = (artworks) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);

  useEffect(() => {
    if (searchQuery) {
      const filtered = artworks.filter((art) =>
        art.aName && art.aName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredArtworks(filtered);
    } else {
      setFilteredArtworks(artworks);
    }
  }, [searchQuery, artworks]);

  return { searchQuery, setSearchQuery, filteredArtworks };
};
