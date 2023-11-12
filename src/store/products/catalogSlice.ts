import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Catalog, InitialTypeCatalog } from '../types';

const initialState: InitialTypeCatalog = {
    catalog: [],
    error: null
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        get(state, action: PayloadAction<Catalog | undefined>) {
            if (action.payload?.items) {
                state.catalog = action.payload.items;
            }
        },
        errorMessage(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    }
});