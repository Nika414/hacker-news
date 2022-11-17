import { createSlice } from '@reduxjs/toolkit';

const cardIdsSlice = createSlice({
  name: 'cardIds',
  initialState: {
    cardIds: [],
  },
  reducers: {
    renderCardIds(state, action) {
      state.cardIds.push(...action.payload);
      console.log(action.payload);
    },
  },
});

export const { renderCardIds } = cardIdsSlice.actions;
export default cardIdsSlice.reducer;
