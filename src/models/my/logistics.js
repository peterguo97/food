import { log } from "../../services/log";
export default {

    namespace: 'logistics',

    state: {
        log: 1
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                const address = pathname.includes('/logistics/');            
                if (address) {
                    dispatch({
                        type: 'fetch',
                        payload: 'logistics'
                    });
                }
            });
        }
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(log, payload);
            yield put({ type: 'save', payload: data });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};