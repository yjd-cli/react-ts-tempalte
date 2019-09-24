import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
// 使用路由中间件 可以拦截到跳转路径的特殊的 action
// 然后调用history 实现路径 跳转，并且把最新的路径信息写入仓库
import {routerMiddleware} from 'connected-react-router';
import history from './history';
import rootSaga from "./sagas";
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();
const middlewareEnhancer = applyMiddleware(routerMiddleware(history), sagaMiddleware);
const composedEnhancers = composeWithDevTools(middlewareEnhancer);
const store = createStore(rootReducer, composedEnhancers);

sagaMiddleware.run(rootSaga);

// if (process.env.NODE_ENV === 'development') {
//     if (module.hot) {
//         // @ts-ignore
//         module.hot.accept(rootReducer, () => store.replaceReducer(rootReducer));
//     }
// }

export default store;

