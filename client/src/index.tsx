import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import createSagaMiddleWare from "redux-saga";

import { createStore, applyMiddleware, compose } from "redux";
import combinedReducer from "./reducers/index";
import rootSaga from "./sagas/index";
import { loadState, saveState } from "./utils/storage";
import { throttle } from "lodash";

const sagaMiddleWare = createSagaMiddleWare();
const persistedState = loadState();

const store = createStore(
    combinedReducer,
    persistedState,
    compose(
        applyMiddleware(sagaMiddleWare),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
            (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleWare.run(rootSaga);

store.subscribe(
    throttle(() => {
        saveState({ ...store.getState(), user: store.getState().user });
    }, 1000)
);

const rootEl = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootEl
);

if (module.hot) {
    module.hot.accept("./App", () => {
        const NextApp = require("./App").default;
        ReactDOM.render(<NextApp />, rootEl);
    });
}

registerServiceWorker();
