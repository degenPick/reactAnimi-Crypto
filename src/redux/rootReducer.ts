import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// slices
import adminUserReducer from './slices/adminUsers';

import { priceSliceName, reducer as priceReducer } from './price/price.slice';
import { userSliceName, reducer as userReducer } from './user/user.slice';

// ----------------------------------------------------------------------

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: [],
};

// export const productPersistConfig = {
//   key: 'product',
//   storage,
//   keyPrefix: 'redux-',
//   whitelist: ['sortBy', 'checkout'],
// };

const rootReducer = combineReducers({
  adminUser: adminUserReducer,
  [priceSliceName]: priceReducer,
  [userSliceName]: userReducer,
  // product: persistReducer(productPersistConfig, productReducer),
});

export default rootReducer;
