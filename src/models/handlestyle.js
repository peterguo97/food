export default {

    namespace: 'handlestyle',
  
    state: {
        active: 0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *fetch({ payload }, { call, put }) { // eslint-disable-line
        yield put({ type: 'save' });
      },
    },
  
    reducers: {
      save(state, action) {
        return { ...state, ...action.payload };
      },
      change(state, { payload }) {
          return { ...state, active: payload }
      }
    },
};
  