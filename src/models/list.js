export default {

    namespace: 'shoplist',
  
    state: {
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
        addTolsit(state, {payload} ){
            const list = state.list;
            list.push(payload);
            return {
                ...state.list, list
            }
        },

        removeFromlist(state, {payload}){
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
            return {
                ...state, ...newstate
            }
        },
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
  
  };
  