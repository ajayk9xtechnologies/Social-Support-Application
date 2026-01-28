import { legacy_createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import settingSlice from './store/settings/settingSlice'; // your root reducer

// Redux Persist configuration
const persistConfig = {
  key: 'root', 
  storage, 
};

// Wrap the root reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, settingSlice);

// Create the Redux store with the persisted reducer
const store = legacy_createStore(
  persistedReducer
);

// Create a persistor, which will be used to persist and rehydrate the store
const persistor = persistStore(store);

export { store, persistor };