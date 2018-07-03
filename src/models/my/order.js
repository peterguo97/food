import { orders } from "../../services/list";

export default {

  namespace: 'order',

  state: {
        id: '',
        name: '',
        phone: '',
        address: '',
        list: []
  },
  subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                const address = pathname.includes('/order/');
                const listId = pathname.substr(7);          
                if (address) {         
                     dispatch({
                       type: 'fetch',
                       payload: listId
                     });
                }
            });
        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line  
            const { data } = yield call(orders, payload);
            yield put({ type: 'save', payload: data});
        }
    },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
