import { compose,legacy_createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer'; 
import { persistStore, persistReducer } from 'redux-persist';
import storage  from 'redux-persist/lib/storage';

const persistConfig = {
    key:'root',
    storage,
    blacklist:['user']

}

const persistedReducer = persistReducer(persistConfig,rootReducer)
//shuny papka gechirmeli middlewares diyen. ozun doredip
// const loggerMiddleware = (store)=>(next)=>(action)=>{
//     if(!action.type){
//         return next(action);
//     }
//     // console.log('type', action.type);
//     // console.log('payload: ',action.payload);
//     console.log('curretState',store.getState())
//     next(action);

//     console.log( 'next state: ', store.getState() )
// }
const middleWares = [logger]
// const middleWares = [logger]
const composedEnhancers = compose(applyMiddleware(...middleWares))

export const store = legacy_createStore(persistedReducer,undefined,composedEnhancers)

export const persistor = persistStore(store);