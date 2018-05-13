import { address } from "../../services/address";
import { staticAddress } from "../../services/address";

export default {

    namespace: 'address',

    state: {
        data: [
            { id: 1, name: '小小', phone: 12345678910, address: '河北省保定市莲池区华电路689号河北省啦啦啦啦', checked: true },
            { id: 2, name: '小小', phone: 12345678910, address: '河北省保定市莲池区华电路689号河北省啦啦啦啦', checked: false }
        ]
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/address') {
                    dispatch({
                        type: 'fetch',
                        payload: 'getAddress'
                    });
                }
            });
        }
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(address, payload);
            yield put({ type: 'save', payload: data })
        },
        *staticaddress( { payload }, { call, put }) {          
            yield call(staticAddress, {id: payload.id, staticaddress: payload.staticaddress});
            yield put({ type: 'change', payload: payload })
        }
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        change(state, { payload}) {
            return { ...state, ...payload };
        }
    },

};