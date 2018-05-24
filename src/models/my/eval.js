import { evals } from "../../services/log";
import { Toast } from 'antd-mobile';

export default {

    namespace: 'eval',

    state: {
       url: ''
    },
     subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                const address = pathname.includes('/eval/');
                // console.log(state);
                if (address) {
                     dispatch({
                       type: 'url',
                       payload: pathname
                     });
                }
            });
        }
    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            const data = yield call(evals, payload);      
            if(data.message) {
                Toast.info('评价成功', 1);
            } else {
                Toast.info('你还未收到货物不能评价', 1);
            }
            
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        url(state, { payload }) {
            return { ...state, url: payload}
        }
    },

};