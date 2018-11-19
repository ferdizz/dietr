import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';
import createSagaMiddleWare from 'redux-saga';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import combinedReducer from './reducers/index';
import rootSaga from './sagas/index';
import { loadState, saveState } from './utils/storage';
import throttle from 'lodash.throttle';

const sagaMiddleWare = createSagaMiddleWare();
const persistedState = loadState();

const store = createStore(
    combinedReducer,
    persistedState,
    compose(
        applyMiddleware(sagaMiddleWare),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleWare.run(rootSaga);

store.subscribe(
    throttle(() => {
        saveState({ user: store.getState().user });
    }, 1000)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
