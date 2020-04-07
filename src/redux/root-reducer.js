import  { combineReducers } from 'redux';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';
import { persistReducer } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import  directoryReducer from './directory.reducer';
import shopReducer from './shop.reducer';


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer 
});
const persistConfig = {
    key : 'root',
    storage,
    whitelist : ['cart']    
};

export default  persistReducer(persistConfig,rootReducer);