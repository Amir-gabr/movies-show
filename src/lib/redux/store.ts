import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../redux/moviesSlice"; 
import { detailsReducer } from "../redux/detailsSlice"; 
import { topRateMoviesReducer } from "../redux/topRateSlice"; 


export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    details:detailsReducer,
    topRate:topRateMoviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;