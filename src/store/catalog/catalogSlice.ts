import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Catalog, InitialTypeCatalog } from '../types';

const initialState: InitialTypeCatalog = {
    catalog: [],
    isLoading: false,
    error: null
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        // Загрузка карточек товаров
        loading(state) {
            state.isLoading = true;
        },
        // Получение товаров 
        get(state, action: PayloadAction<Catalog | undefined>) {
            if (action.payload?.items) {
                state.catalog = action.payload.items;
                state.isLoading = false;
            }
        },
        // Изменение текста ошибки, отображаемой на странице 
        errorMessage(state, action: PayloadAction<string>) {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
});