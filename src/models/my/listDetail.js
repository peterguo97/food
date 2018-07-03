import { refundList } from "../../services/listDetail";
import { orders } from "../../services/list";


export default {

    namespace: 'listdetail',

    state: {
        id: '',
        name: '',
        phone: '',
        store: '',
        result: '',
        list: [],
        footer: {},
        storeId: '1'
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            history.listen(({ pathname }) => {
                const address = pathname.includes('/listdetail/');
                const id = pathname.substr(12);

                if (address) {
                    dispatch({
                        type: 'fetch',
                        payload: id
                    });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(orders, payload);
            yield put({ type: 'save', payload: data});
        },
        *refund({ payload }, { call, put }) {
            const { data } = yield call(refundList);
            if(data) {
                console.log(1);
            }
        }
    },

    reducers: {
        save(state, action) {  
            return { ...state, ...action.payload };
        },
    },

};