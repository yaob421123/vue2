//user.js  管理 用户登陆和退出

import Vue from 'vue'

export const USER_SIGNIN = 'USER_SIGNIN' //登录成功
export const USER_SIGNOUT = 'USER_SIGNOUT' //退出登录

export default {
    state: {
        isLogin:0,  // 0为 退出登陆， 1为登陆成功
        userInfo:{} //保存用户信息
    },
    getters:{
        isLogin : state => state.isLogin,
        userInfo: state => state.userInfo,
    },
    mutations: {
        [USER_SIGNIN](state, user) {
            state.isLogin = 1;
            state.userInfo = user
        },
        [USER_SIGNOUT](state) {
            state.isLogin = 0;
            state.userInfo = {};
        }
    },
    actions: {
        [USER_SIGNIN]({commit}, user) {
            commit(USER_SIGNIN, user)
        },
        [USER_SIGNOUT]({commit}) {
            commit(USER_SIGNOUT)
        }
    }
}