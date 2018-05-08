import { hasItem } from "../publicapi";

export default {

    namespace: 'shoplist',
  
    state: {
        showlist: false,
        list: [],
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
            // console.log(judge);
            if (judge) {
                let recentlist = JSON.parse(JSON.stringify(list));
                for (let index = 0; index < recentlist.length; index++) {
                    const element = recentlist[index];
                    if (element.name === payload.name){
                        element.num++;
                        break;
                    }                   
                }
                return Object.assign({},state,{list: recentlist});
            }
            else {
                payload.num = 1;
                let recentlist = [ ...state.list, payload ];
                return Object.assign({}, state, { list: recentlist });
            }
        },

        decreaseFromlist(state, {payload}){
            const list =JSON.parse(JSON.stringify(state.list));
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
            return Object.assign({}, state, { list: recentlist });
        },

        showOrNotShow(state,{payload}){
            let temp = state.showlist;
            if(temp){
                temp = false;
            }
            else{
                temp = true;
            }
            return Object.assign({}, state, {showlist: temp});
        }
    },
  
  };
  