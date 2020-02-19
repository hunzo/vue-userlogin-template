const user = {
    namespaced: true,
    state: {
        userinfo: null,
        isLogin: false
    },
    mutations: {
        SET_USERINFO(state, payload) {
            state.userinfo = payload
        },
        LOGIN(state) {
            state.isLogin = true
        },
        LOGOUT(state) {
            state.isLogin = false
        }
    },
    actions: {
        setUserInfo({commit}, payload) {
            // let payload = {
            //     username: username,
            //     token: 'token',
            //     timeout: 'timeout',
            //     password: password
            // }
            // payload.
            // payload.push({
            //     token: 'token',
            //     timeout: 'timeout',

            // })
            payload.token = 'toooooooookkkkkkkkkkeeeeeeeeeeennnnnnnn'
            payload.timeout = 1235
            console.log(payload.password)
            commit('SET_USERINFO', payload)
        },
        login({commit}) {
            commit('LOGIN')
        },
        logout({commit}) {
            commit('LOGOUT')
        }
    },
    getters: {
        isLogin: state => state.isLogin,
        sessionInfo: state => state.userinfo
    }

}

export default user