import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import { USER_STORE_KEY } from './components/auth/reducer';

import reducers from './reducers';

const enhancers = compose(
    applyMiddleware(thunk)
);

const store = createStore(reducers, enhancers);

store.subscribe(() => {
    // 90 day life JWT
    const { auth } = store.getState();
    const { userName, token, expireTime, refreshToken } = auth;
    const data = JSON.stringify({ userName, token, expireTime, refreshToken });

    Cookies.set(USER_STORE_KEY, data, { expires: 90 });
});

export default store;
