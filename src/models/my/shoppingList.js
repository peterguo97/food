import { listItem } from "../../services/list";
// import { routerRedux } from 'dva/router';
/* //  { id: 5, store: '饲料公司', result: '交易成功', isPay: true,
                main: [
                    {title: '商品', num: 2, price: 250},
                    {title: '商品', num: 2, price: 250},
                    {title: '商品', num: 2, price: 250}
                ]
            },
            { id: 6, store: '饲料公司', result: '交易成功', isPay: false,
                main: [
                    {title: '商品', num: 2, price: 250},
                ]
            } */
        
export default {

    namespace: 'shoppingList',

    state: {
        data: [
            {
              id: 5,
              store: '饲料公司',
              result: '交易成功',
              isPay: true,
              main: [{
                  title: '商品',
                  num: 2,
                  price: 250
                },
                {
                  title: '商品',
                  num: 2,
                  price: 250
                },
                {
                  title: '商品',
                  num: 2,
                  price: 250
                }
              ]
            },
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
            const data = yield call(listItem, payload.id);
            if(data.data.message) {
                 yield put({
                   type: 'deleteSave',
                   payload: payload.data
                 });
            } else {

            }
           
        },
        // *logis({ payload }, { call, put}) {
        //     const  data = yield call(logistics, payload);
        //     console.log(data);
        //     // 有时间弄一个404页面
        //     if(data.message) {
        //         yield put(routerRedux.push('/logistics'));
        //     }
        // },
        // *eval({ payload }, { call, put }) {
        //     const data = yield call(evals, payload);
        //     console.log(data);
        //     // 有时间弄一个404页面
        //     if (data.message) {
        //         yield put(routerRedux.push('/eval'));
        //     }
        // }
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