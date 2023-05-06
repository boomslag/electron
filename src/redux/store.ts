import { configureStore, ThunkMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, PersistConfig } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer, { RootState } from './reducers';

const persistConfig: PersistConfig<RootState> = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk as ThunkMiddleware<RootState>],
});
const persistor = persistStore(store);

export { store, persistor };
