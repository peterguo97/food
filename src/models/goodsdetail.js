export default {

  namespace: 'goodsdetail',

  state: {
      
  },
  
  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
    //   yield put({ });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};