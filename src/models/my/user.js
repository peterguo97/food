import { userIntro } from "../../services/userIntro";
export default {

    namespace: 'user',

    state: {
        img: '!#',
        name: '我的'
    },

    subscriptions: {
        setup({ dispatch, history }) {
            history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({
                        type: 'user',
                        payload: 'personInformation'
                    });
                }
            });
        }
    },

    effects: {
        *user({ payload }, { call, put }) {  // eslint-disable-line
            const { data } = yield call(userIntro, payload);
            yield put({ type: 'save', payload: data });
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload};
        },
    },

};