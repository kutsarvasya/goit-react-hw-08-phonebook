import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   blacklist: ['filter'],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({ reducer });

// export const persistor = persistStore(store);
