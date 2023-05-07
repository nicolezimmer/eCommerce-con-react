import React, { useEffect, useState } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { ImSpinner3 } from 'react-icons/im';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase/config';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const bd = getFirestore();
    const productos = bd.collection('productos');

    const filteredProductos = categoryId
      ? productos.where('category', '==', categoryId)
      : productos;

    filteredProductos.get()
      .then((res) => {
        const newItem = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(newItem);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));

  }, [categoryId]);

  return (
    <div>
      {loading ? (
        <div className='spinner'>
          <ImSpinner3 />
        </div>
      ) : (
        <ItemList productos={items} />
      )}
    </div>
  );
};
