import { configureStore } from '@reduxjs/toolkit';
import cardIdsReducer from './cardIdsSlice';
import cardsSlice from './cardsSlice';

export default configureStore({
  reducer: {
    cardIds: cardIdsReducer,
    cards: cardsSlice,
  },
});
