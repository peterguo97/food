import { evals } from "../../services/log";
import { Toast } from 'antd-mobile';

export default {

    namespace: 'eval',

    state: {
       
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
    },

};