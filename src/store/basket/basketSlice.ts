import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Catalog, InitialTypeBasket, InitialTypeCatalog, Product } from '../types';

const initialState: InitialTypeBasket = {
    basket: []
};

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<Product>) {
            state.basket = [...state.basket, action.payload];
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        deleteProduct(state, action: PayloadAction<number>) {
            state.basket.splice(action.payload, 1);
            localStorage.setItem('basket', JSON.stringify(state.basket));
        }, 
        getBasket(state, action: PayloadAction<Product[]>) {
            state.basket = action.payload;
        }
    }
});