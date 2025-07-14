import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedProduct } from './types';

interface ProductState {
  selected: SelectedProduct | null;
}

const initialState: ProductState = {
  selected: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<SelectedProduct>) {
      state.selected = action.payload;
    },
    clearSelectedProduct(state) {
      state.selected = null;
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } = productSlice.actions;
export const selectSelectedProduct = (state: { product: ProductState }) => state.product.selected;
export default productSlice.reducer; 