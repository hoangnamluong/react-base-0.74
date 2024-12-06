import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
//reducers
import rootReducer from '../features/rootSlice';
import derivedReducer from '../features/derivedSlice';
//@ts-ignore
import logger from 'redux-logger';
import {PersistConfig, persistReducer, persistStore} from 'redux-persist';

const combinedReducers = combineReducers({
  root: rootReducer,
  derived: derivedReducer,
});

export type Store = ReturnType<typeof combinedReducers>;
export type AppDispatch = typeof store.dispatch;

const persistConfig: PersistConfig<Store> = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  timeout: 1000,
  debug: true,
  blacklist: ['derived'],
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
