import { listItem } from "../../services/list";
export default {

    namespace: 'shoppingList',

    state: {
        data: [
            { id: 5, title: '商品', sub: '1', price: 250, num: 2, store: '饲料公司', result: '交易成功' },
            { id: 2, title: '评价', sub: '2', price: 250, num: 2, store: '饲料公司', result: '交易成功' },
            { id: 3, title: '商家', sub: '3', price: 250, num: 2, store: '饲料公司', result: '交易成功' },
        ]
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/list') {
                    dispatch({
                        type: 'list'
                    });
                }
            });
        }
    },

    effects: {
        *list({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(listItem);
            yield put({ type: 'save', payload: data });
        },
        *delete({ payload }, { call, put }) {
            yield call(listItem, payload.id);
            yield put({ type: 'deleteSave', payload: payload.data});
        }
    },

    reducers: {    
        save(state, action) {
            return { ...state, ...action.payload };
        },
        deleteSave(state, { payload }) {

            return { ...state, data: payload };
        }
    },

};