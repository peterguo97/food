import { query } from "../services/register";

export default {

    namespace: 'register',

    state: {
        hasError: false,
        value: '',
        userPassword: '',
        userPasagain: '',
        code: '',
        checked: false
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
        },
    },

    effects: {
        // *fetch({ payload }, { call, put }) {  // eslint-disable-line
        //     yield put({ type: 'save' });
        // },
        *sendData( { payload }, { call, put }) {
            yield call(query, payload);
        }
    },

    reducers: {
        sendData(state, action) {
            return { ...state };
        },
        changeErrorTrue(state, { payload }) {
            return { ...state, hasError: true};
        },
        changeErrorFalse(state, { payload }) {
            return { ...state, hasError: false };
        },
        value(state, { payload }) {
            return { ...state, value: payload };
        },
        password(state, { payload }) {
            return { ...state, userPassword: payload };
        },
        passwordAgain(state, { payload }) {
            return { ...state, userPasagain: payload };
        },
        verifCode(state, { payload }) {
            return { ...state, code: payload };
        },
        check(state, { payload }) {
            return { ...state, checked: payload };
        }
    },

};