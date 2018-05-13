
export default {

    namespace: 'listdetail',

    state: {
        name: '小小',
        phone: '18395620531',
        list: {
            id: 1,
            store: 'XXX公司',
            result: '交易成功',
            price: 250,
            num: 2
        },
        footer: {
            // 订单编号
            num1: 20505466,
            time: '2018-5-11 08:12:55',
            endtime: '2018-5-20 08:12:55'
        },

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