import 'antd/dist/antd.css';
import './index.css';
import '@assets/styles/reset.less';
import React from 'react';
import ReactDOM from 'react-dom';
import store from '@redux-store/index';
import history from '@redux-store/history';
import {ConfigProvider} from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import {Provider} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import 'moment/locale/zh-cn';
import App from './App';

function renderApp() {
    ReactDOM.render(
        <ConfigProvider locale={zh_CN}>
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path='/' component={App}/>
                </ConnectedRouter>
            </Provider>
        </ConfigProvider>
        , document.getElementById('root'));
}

renderApp();

if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
        module.hot.accept();
    }
}