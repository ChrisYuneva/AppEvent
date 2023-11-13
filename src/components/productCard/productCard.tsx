import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { basketSlice } from '../../store/basket/basketSlice';
import { Product } from '../../store/types';
import style from './style.module.css';
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';

interface productCardProps {
  product: Product;
}

function ProductCard({ product }: productCardProps) {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();
  const { addProduct } = basketSlice.actions;

  const [isBuy, setIsBuy] = useState(false);

  /**
   * Функция добавления товара в корзину
   * Если товар уже был добавлен в корзину, то произойдет редирект в корзину
   */
  function add() {
    if(isBuy) {
      navigate('/basket');
    } else {
      dispatch(addProduct(product));
      setIsBuy(true);
    }
  }

  return (
    <div className={style.card}>
      <span className={style.card__text}>{product.name}</span>
      <img src={product.image} alt={product.name} className={style.card__img} />
      <div className={style.card__buy}>
        <span className={`${style.card__text} ${style.card__price}`}>
          {product.price} &#8381;
        </span>
        <Button onClick={add} isBuy={isBuy}>
          {isBuy ? 'Оформить заказ' : 'Добавить в корзину'}
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
