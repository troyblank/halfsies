import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Cookies from 'js-cookie';
import { USER_STORE_KEY } from './components/auth/reducer';

import reducers from './reducers';

const JWT_EXPIRE_DAYS = 90;

const enhancers = compose(
    applyMiddleware(thunk)
);

const store = createStore(reducers, enhancers);

const getTokenExpiration = () => {
    // If cookie is new give it the loosely coupled server setting of JWT_EXPIRE_DAYS
    const userCookie = Cookies.get(USER_STORE_KEY);
    let expiration = JWT_EXPIRE_DAYS;

    if (userCookie) {
        const { expireTime } = JSON.parse(userCookie);

        expiration = expireTime ? new Date(expireTime) : JWT_EXPIRE_DAYS;
    }

    return expiration;
};

store.subscribe(() => {
    const { authStore } = store.getState();
    const { userName, token, expireTime, refreshToken } = authStore;
    const data = JSON.stringify({ userName, token, expireTime, refreshToken });

    Cookies.set(USER_STORE_KEY, data, { expires: getTokenExpiration() });
});

export default store;
