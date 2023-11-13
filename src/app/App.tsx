import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import './App.css';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { basketSlice } from '../store/basket/basketSlice';

function App() {
  const dispatch = useAppDispatch();
  const { getBasket } = basketSlice.actions;

  /**
   * При первом открытии страницы получаются данные из localStorage о состоянии корзины
   * и записываются в store для корректного отображения состояния на странице
   */
  useEffect(() => {
    const basket = localStorage.getItem('basket');
    if(basket) {
      dispatch(getBasket(JSON.parse(basket)));
    }
  }, []);

  /**
   * loyout страницы
   * Header используется для навигации по приложению
   * Outlet для отображения контента
   */
  return (
    <div id="detail">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
