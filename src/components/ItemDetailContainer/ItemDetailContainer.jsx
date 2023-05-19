
import React, { useEffect, useState } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';
import { Error } from '../Error/Error';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const bd = getFirestore();
    const productos = bd.collection('productos');
    const itemRef = productos.doc(itemId);

    itemRef.get()
      .then(doc => {
        if (doc.exists) {
          setItem({ id: doc.id, ...doc.data() });
        } else {
          setError(true);
          console.log('No existe el producto');
        }
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [itemId]);

  return (
    <section>
      {loading && <ImSpinner3 />}
      {error && <Error/>}
      {!loading && !error && <ItemDetail {...item} />}
    </section>
  );
};

