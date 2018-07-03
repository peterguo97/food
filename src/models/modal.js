export default {

  namespace: 'modal',

  state: {
      isModal: false,
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