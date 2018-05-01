import *as loginImg from "../services/getLoginImg";
import { query } from "../services/login";

export default {
    namespace: 'login',
    state: {
        user: '',
        userPassword: '',
        userCode: '',
        img: ''
    },

    subscripitions: {
        setup( {dispatch, history }) {
            history.listen(( { pathname }) => {
                if(pathname === '/login') {
                    dispatch({
                        type: 'codeImg',
                        payload: 'loginCodeIMg'
                    });
                }
            });
        }
    },

    effects: {
        * codeImg({ payload }, { put, call }) {
          const { data } = yield call(loginImg.fetch, payload);
          yield put({ type: 'save', payload: data});
        },
        * submit({ payload }, { put, call }) {
            const { data } = yield call(query, payload);
            // 为了跟新验证码图片
            yield put({ type: 'save', data});
        }
    },
    reducers: {
        save(state, { payload }) {
            return { ...state, img: payload}
        },
        userName(state, { payload }) {
            return { ...state, user: payload };
        },
        userPassword(state, { payload }) {
            return { ...state, userPassword: payload };
        },
        userCode(state, { payload }) {
            return { ...state, userCode: payload };
        },
        // submit(state) {
        //     request('/api/users', {
        //         method: 'POST',
        //         body: JSON.stringify({...state}),
        //     });
        //     return {...state};
        // },

        // changeCode(state) {
        //     request('./api/users', {
        //         method: 'GET'
        //     })
        //     return {...state}
        // },
    }
};