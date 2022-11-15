import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
  },
  reducers: {
    renderCards(state, action) {
      state.cards.push(...action.payload);
    },
  },
});

export const { renderCards } = cardsSlice.actions;
export default cardsSlice.reducer;
