export const BALANCE_RECEIVED = 'BALANCE_RECEIVED';

export const balanceReceived = (amount) => ({ type: BALANCE_RECEIVED, amount });

export const getBalance = () => (
    /* istanbul ignore next */
    (dispatch) => {
        fetch('https://uifz55jtu0.execute-api.us-west-2.amazonaws.com/prod/getbalance', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => response.json())
            .then((response) => {
                const { balance } = JSON.parse(response.body);

                dispatch(balanceReceived(balance));
            });
    }
);
