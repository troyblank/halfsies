export const LOG_RECEIVED = 'LOG_RECEIVED';
export const ADD_LOG = 'ADD_LOG';

export const logReceived = (log) => ({ type: LOG_RECEIVED, log });
export const addLog = (log) => ({ type: ADD_LOG, log });

export const getLog = () => (
    /* istanbul ignore next */
    (dispatch) => {
        fetch('https://uifz55jtu0.execute-api.us-west-2.amazonaws.com/prod/getlog', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((response) => {
                const { log } = JSON.parse(response.body);

                dispatch(logReceived(log));
            });
    }
);
