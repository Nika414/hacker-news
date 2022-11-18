import { configureStore } from '@reduxjs/toolkit';
import cardIdsReducer from './cardIdsSlice';

export default configureStore({
  reducer: {
    cardIds: cardIdsReducer,
  },
});
