import style from './style.module.css';
import { Link, useNavigate } from 'react-router-dom';
import basketImg from '../../assets/icons/basket.svg';
import { useAppSelector } from '../../hooks/hooks';

function Header() {
  const { basket } = useAppSelector((state) => state.basket);
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <h1 className={style.header__logo} onClick={() => navigate('/')}>
        App Event
      </h1>
      <Link to={'/'} className={style.header__link}>
        Каталог
      </Link>
      <Link
        to={'/basket'}
        className={`${style.header__link} ${style.header__basket}`}
      >
        Корзина
        <img src={basketImg} alt='Корзина' />
        <span className={style.header__count}>{basket.length}</span>
      </Link>
    </header>
  );
}

export default Header;
