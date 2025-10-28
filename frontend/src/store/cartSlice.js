import { createSlice } from '@reduxjs/toolkit';

/*
 Initial state 
 items: Array of cart items
 totalQuantity: Total number of items in cart
 totalAmount: Total price of all items in cart
 */
const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

//Handles adding, removing, updating quantities, and clearing cart.
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const quantity = newItem.quantity || 1; // Default to 1 if not provided
      const existingItem = state.items.find(item => item.id === newItem.id);
      state.totalQuantity += quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: quantity,
          totalPrice: newItem.price * quantity,
        });
      } else {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.totalPrice + (newItem.price * quantity);
      }
      state.totalAmount = state.totalAmount + (newItem.price * quantity);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
      state.totalAmount = state.totalAmount - existingItem.price;
    },
    updateItemQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        const quantityDiff = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
        state.totalQuantity += quantityDiff;
        state.totalAmount += existingItem.price * quantityDiff;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItemToCart, removeItemFromCart, updateItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
