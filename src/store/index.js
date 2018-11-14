import reducers from './reducers'
import { createStore, compose } from 'redux';

const store = createStore(
    reducers,
    compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

export default store;