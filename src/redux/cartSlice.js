import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    AddItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...action.payload, qty: 1 });
      }
    },

    RemoveItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    // 🔼 Increase quantity
    incrementQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.qty += 1;
      }
    },

    // 🔽 Decrease quantity
    decrementQty: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        if (item.qty > 1) {
          item.qty -= 1;
        } else {
          // ❌ Remove item if qty becomes 0
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }
    },
  },
});

export const { AddItem, RemoveItem, incrementQty, decrementQty } = cartSlice.actions;
export default cartSlice.reducer;
