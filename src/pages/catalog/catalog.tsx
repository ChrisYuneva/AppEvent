import { useEffect } from 'react';
import { api } from '../../api/getData';
import ProductCard from '../../components/productCard/productCard';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { catalogSlice } from '../../store/catalog/catalogSlice';
import style from './style.module.css';
import Loader from '../../components/loader/loader';

function Catalog() {
  const dispatch = useAppDispatch();
  const { loading, get, errorMessage } = catalogSlice.actions;
  const { isLoading, catalog, error } = useAppSelector((state) => state.catalog);

  /**
   * Запрос для получения списка товаров
   * Если запрос выполнен успешно и возвращает список товаров, то данные передаются в store
   * В противном случае на страницу выводится ошибка
   */
  function getAllProducts() {
    if(catalog.length === 0) {
      dispatch(loading());
    }
    api('https://appevent.ru/dev/task1/catalog')
      .then((response) => dispatch(get(response)))
      .catch(() => dispatch(errorMessage('Ошибка! Пожалуйста, попробуйте позже.')));
  }

  /**
   * Вызов получения списка товаров, если он не был получен ранее
   */
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
      {
        isLoading && <Loader />
      }
      {
        catalog.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))
      }
    </main>
  );
}

export default Catalog;
