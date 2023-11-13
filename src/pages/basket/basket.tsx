import Button from '../../components/button/button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { basketSlice } from '../../store/basket/basketSlice';
import style from './style.module.css';

function Basket() {
  const dispatch = useAppDispatch();
  const { basket } = useAppSelector((state) => state.basket);
  const { deleteProduct } = basketSlice.actions;

  /**
   * Функция удаления товара из корзины
   * Удаение реализовано через индекс, так как товар может повторяться
   */
  function delProduct(index: number) {
    dispatch(deleteProduct(index));
  }

  return (
    <div className={style.container}>
      {/* Если в корзине присутствуют товары, то отобразится таблица с ними.
          В противном случае выводится текст "Корзина пуста" */}
      {
        basket.length ? (
          <div className={style.container__basket}>
            {basket.map((product, i) => (
              <div
                key={`${product.id}${i}`}
                className={style.container__basket_item}
              >
                <div>
                  <h5 className={style.container__basket_itemTitle}>{product.name}</h5>
                  <span>{product.price} &#8381;</span>
                </div>
                <Button onClick={() => delProduct(i)}>Убрать</Button>
              </div>
            ))}
            <span className={`${style.container__basket_item}  ${style.container__basket_total}`}>
              Итого: {basket.reduce((prev, cur) => prev + cur.price, 0)} &#8381;
            </span>
          </div>
        ) : (
          <span className={style.container_empty}>Корзина пуста &#128532;</span>
        )
      }
    </div>
  );
}

export default Basket;
