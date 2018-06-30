import { address } from "../../services/writeAddress";
import { addressInfo } from "../../services/writeAddress";
import { routerRedux } from 'dva/router';

export default {

    namespace: 'writeAddress',

    state: {
        id: '',
        name: '',
        phone: '',
        address: [
            '11', '1101', '110101'
        ],
        information: '',
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            history.listen(({ pathname }) => {
                const address = pathname.includes('/write/');
                const getId = pathname.substr(7);
                if (address) {
                    dispatch({
                        type: 'fetch',
                        payload: getId
                    });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(address, payload);
            yield put({ type: 'save', payload: data });
        },
    
        *sendInfoLink( { payload }, { call, put }) {
            const data = yield call(addressInfo, payload);
            if (data.data.message) {
              yield put(routerRedux.push('/address'));
            }
        }
    },

    reducers: {
        save(state, action) {  
            return { ...state, ...action.payload };
        },
    },

};