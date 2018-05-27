import { orders } from "../../services/list";

export default {

  namespace: 'order',

  state: {
        name: '小小',
        phone: '18395620531',
        address: '河北省保定市华北电力大学二小区',
        list: {
            id: 1,
            store: 'XXX公司',
            result: '确认订单',
            price: 250,
            num: 2
        },
  },
  subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/order') {         
                     dispatch({
                       type: 'fetch'
                     });
                }
            });
        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line  
            const { data } = yield call(orders);
            yield put({ type: 'save', payload: data});
            
        },
    },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
