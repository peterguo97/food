import { address } from "../../services/writeAddress";
import { addressInfo } from "../../services/writeAddress";

export default {

    namespace: 'writeAddress',

    state: {
        name: '小小',
        phone: '',
        address: [
            '11', '1101', '110101'
        ],
        information: '',
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            history.listen(({ pathname }) => {
                const address = pathname.includes('/write/')
                if (address) {
                    dispatch({
                        type: 'fetch',
                        payload: 'getWriteAddress'
                    });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(address, payload);
            yield put({ type: 'save', payload: data });
        },
        *sendInfo( { payload }, { call, put }) {
            yield call(addressInfo, payload);
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};