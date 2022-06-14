import { configureStore,ThunkAction,Action } from '@reduxjs/toolkit';
import { moviesApi,moviesApiReducer } from '../services/services';



export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApiReducer
    },middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
