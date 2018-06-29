import { getShopping } from "../../services/shopping";
import { isPay } from "../../services/shopping";
import { deleteList } from "../../services/shopping";
import { routerRedux } from 'dva/router';

export default {

    namespace: 'shopping',

    state: {
        
          /*   { id: 1, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' },
            { id: 2, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' },
            { id: 3, intro: '这是一袋小狗饲料啦啦啦啦啦啦啦啦啦啦啦', checked: false, num: 1, price: 250, img: '' } */
        
        data: [
            {
              id: 1,
              intro: '这是一袋小狗饲料啦dsafd打的地方撒旦地方撒范德萨发撒的发生 法撒旦法撒旦是费大发大发的发顺丰是的发生都十分大方的发生啦啦啦啦啦啦啦啦啦啦',
              checked: false,
              num: 1,
              price: 250,
              img: ''
            },
             {
               id: 2,
               intro: '这是发送到',
               checked: false,
               num: 1,
               price: 250,
               img: ''
             },
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
        *pay({ payload }, { call, put}) {
            const data = yield call(isPay, payload);
            if(data.data.message === 'address') {
                yield put(routerRedux.push(`/write/0/${data.data.id}`));
            } else if(data.data.message === 'success') {
                yield put(routerRedux.push(`/order/${data.data.id}`));
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