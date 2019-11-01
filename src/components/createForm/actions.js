import { getUpToDateToken } from '../auth/actions';
import { balanceReceived } from '../balance/actions';

export const CREATE_HALFSIE_PENDING = 'CREATE_HALFSIE_PENDING';
export const CREATE_HALFSIE_ERROR = 'CREATE_HALFSIE_ERROR';
export const CREATE_HALFSIE_SUCCESS = 'CREATE_HALFSIE_SUCCESS';

export const createHalfsiePending = () => ({ type: CREATE_HALFSIE_PENDING });
export const createHalfsieError = (errorMessage) => ({ type: CREATE_HALFSIE_ERROR, errorMessage });
export const createHalfsieSuccess = () => ({ type: CREATE_HALFSIE_SUCCESS });

export const createHalfsie = (formData) => (
    /* istanbul ignore next */
    (dispatch, getState) => {
        const { authStore } = getState();
        const log = {
            date: new Date().toUTCString(),
            ...formData
        }
        
        dispatch(createHalfsiePending());

        getUpToDateToken(dispatch, authStore)
        .then((accessToken) => {
            const body = { accessToken, log };

            fetch('https://uifz55jtu0.execute-api.us-west-2.amazonaws.com/prod/createHalfsie', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
            .then((response) => response.json())
            .then((response) => {
                const { balance } = JSON.parse(response.body);

                dispatch(balanceReceived(balance));
                dispatch(createHalfsieSuccess());
            });
        });
    }
);
