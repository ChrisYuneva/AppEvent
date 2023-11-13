import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialTypeBasket, Product } from '../types';

const initialState: InitialTypeBasket = {
    basket: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        /**
         * Добавление товара в корзину 
         */
        addProduct(state, action: PayloadAction<Product>) {
            state.basket = [...state.basket, action.payload];
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        /**
         * Удаления товара из корзины 
         */
        deleteProduct(state, action: PayloadAction<number>) {
            state.basket.splice(action.payload, 1);
            localStorage.setItem('basket', JSON.stringify(state.basket));
        }, 
        /**
         * Восстановление товаров в корзине после перезагрузки страницы 
         */
        getBasket(state, action: PayloadAction<Product[]>) {
            state.basket = action.payload;
        }
    }
});