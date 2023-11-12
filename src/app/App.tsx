import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import './App.css';
import { useEffect } from 'react';
import { useAppDispatch } from '../hooks/hooks';
import { basketSlice } from '../store/basket/basketSlice';

function App() {
  const dispatch = useAppDispatch();
  const { getBasket } = basketSlice.actions;

  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem('basket') ?? '');
    dispatch(getBasket(basket));
  }, []);

  return (
    <div id="detail">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
