import { getShopping } from "../../services/shopping";
export default {

    namespace: 'shopping',

    state: {
        data: [
            { id: 1, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' },
            { id: 2, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' },
            { id: 3, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' }
        ],
        checkedAll: false,
        priceAll: 0.00
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
             history.listen(({ pathname }) => {
                if (pathname === '/shopping') {         
                     dispatch({
                       type: 'fetch'
                     });
                }
            });
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(getShopping)
            yield put({ type: 'save', payload: data });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        change(state, { payload }) {    
            return { ...state, ...payload };
        }
    },

};