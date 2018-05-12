
export default {

    namespace: 'shopping',

    state: {
        data: [
            { id: 1, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250 },
            { id: 2, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250 },
            { id: 3, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250 }
        ],
        checkedAll: false,
        priceAll: 0.00
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },

};