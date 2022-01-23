import storage from 'redux-persist/lib/storage';
import {createStore, applyMiddleware, compose} from 'redux'
import {
    persistReducer,
    persistStore
} from 'redux-persist';
import rootReducer from "./reducer";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    
export default () => {
    let store = createStore(persistedReducer,composeEnhancers(applyMiddleware()));
    let persistor = persistStore(store);
    return { store, persistor };
  }