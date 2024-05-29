// hooks/useArtworks.js or hooks/useArtworks.ts
import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../lib/firebase';

export const useArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const artsRef = ref(db, 'arts');
    const unsubscribe = onValue(artsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const artList = Object.keys(data).map((key) => data[key]);
        setArtworks(artList);
      } else {
        setArtworks([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { artworks, loading };
};
