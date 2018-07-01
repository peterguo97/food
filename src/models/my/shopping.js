import { getShopping } from "../../services/shopping";
import { isPay } from "../../services/shopping";
import { deleteList } from "../../services/shopping";
import { routerRedux } from 'dva/router';
import { Toast } from "antd-mobile";

export default {

    namespace: 'shopping',

    state: {
        
          /*   { id: 1, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' },
            { id: 2, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' },
            { id: 3, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' } */
        
        data: [],
        checkedAll: false
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
        *pay({ payload }, { call, put}) {
            const data = yield call(isPay, payload);
            if(data.data.message === 'address') {
                yield put(routerRedux.push(`/write/0/${data.data.id}`));
            } else if(data.data.message === 'success') {
                yield put(routerRedux.push(`/order/${data.data.id}`));
            } else if(data.data.message === 'understock') {
                Toast.info('库存不足', 1);
            }
        },
        *deleteChange({ payload }, { call, put}) {
            const data = yield call(deleteList, payload);
            yield put({ type: 'change', payload: data});
        }
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