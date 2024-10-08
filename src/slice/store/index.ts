// store.js
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cardSliceTs from '../card.slice.ts';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import persistReducer from 'redux-persist/es/persistReducer';
import EncryptedStorage from 'react-native-encrypted-storage';
import persistStore from 'redux-persist/es/persistStore';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
}

const rootReducer = combineReducers({
  card: cardSliceTs,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;