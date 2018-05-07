import { hasItem } from "../publicapi";

export default {

    namespace: 'shoplist',
  
    state: {
        list: [{name: '乐事', price: 10, num: 1}],
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
        addTolist(state, { payload }){
            const list = state.list;
            let judge = hasItem(list, payload, "name");
            console.log(judge);
            if (judge) {
                let recentlist = list.map((item) => {
                    if(item.name === payload.name){
                        item.num++;
                    }
                    return item;
                })
                return Object.assign({},state,{list: recentlist});
            }
            else {
                payload.num = 1;
                let recentlist = [ ...state.list, payload ];
                return Object.assign({}, state, { list: recentlist });
            }
        },

        decreaseFromlist(state, {payload}){
            const list = state.list;
            let recentlist = list.filter((item)=>{
                if ( item.name === payload.name ){
                    item.num--;
                }
                if( item.num === 0){
                    return false;
                }
                else{
                    return true;
                }
            })
            let newstate = {
                list: recentlist,
            }
            return Object.assign({},state,newstate)
        },
    },
  
  };
  