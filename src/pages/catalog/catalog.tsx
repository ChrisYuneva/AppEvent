import { useEffect } from 'react';
import { api } from '../../api/getData';
import ProductCard from '../../components/productCard/productCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { catalogSlice } from '../../store/products/catalogSlice';
import style from './style.module.css';

function Catalog() {
  const dispatch = useAppDispatch();
  const { get, errorMessage } = catalogSlice.actions;
  const { catalog, error } = useAppSelector((state) => state.catalog);

  function getAllProducts() {
    api('https://appevent.ru/dev/task1/catalog').then((response) =>
      dispatch(get(response))
    ).catch(error => dispatch(errorMessage('Ошибка! Пожалуйста, попробуйте позже.')));
  }

  useEffect(() => {
    if (!catalog.length) {
      getAllProducts();
    }
  }, []);

  return (
    <main className={style.container}>
      {
        error && <span>{error}</span>
      }
      {catalog.map((product) => (
        <ProductCard
          product={product}
          key={product.id}
        />
      ))}
    </main>
  );
}

export default Catalog;
