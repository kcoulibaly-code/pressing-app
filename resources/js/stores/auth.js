
export default {
    namespaced: true,

    state: {
        authUser: null,
        dashboardData: null,
        previous_user_id: null,
        redirect_url: null,
        interval_tbs_can_autosave: {},
        interval_autosaving_context: null,
        authcheck_user_context: null,
        load_balancer_request: 0,
        balancer_request_start_credit: 0,
        replicate_decision: null,
        store_tb_names : {},

        authenticated: false,
        user: null,

    },
    getters: {
        authUser(state) {
            return state.authUser
        },
        userFull(state) {
            const interested_keys = [ "sigle_devise", "sigle_devise_dis_name"]
            return {...state.user, ...state.authUser, ...interested_keys.reduce((acc, key) => {
                acc[key] = state.dashboardData[key]
                return acc
            }, {})}
        },
        dashboard(state) {
            return state.dashboardData
        },
        dashboardData(state) {
            return state.dashboardData
        },
        isAuthenticated(state) {
            return state.authUser != null
        },
        user(state) {
            return state.authUser
        },
        previous_user_id(state) {
            return state.previous_user_id
        },
        redirect_url(state) {
            return state.redirect_url
        },
        interval_tbs_can_autosave(state) {
            return state.interval_tbs_can_autosave
        },
        interval_autosaving_context(state) {
            return state.interval_autosaving_context
        },
        authcheck_user_context(state) {
            return state.authcheck_user_context
        },
        load_balancer_request(state) {
            return state.load_balancer_request
        },
        balancer_request_start_credit(state) {
            return state.balancer_request_start_credit
        },
        replicate_decision(state) {
            return state.replicate_decision
        },
        store_tb_names(state) {
            return state.store_tb_names
        },
        
    },
    mutations: {
        SET_DASHBOARD_DATA(state, value) {
            state.dashboardData = value
        },
        SET_USER(state, value) {
            state.authUser = value
            state.authenticated = true
            state.user = value
            state.user['role_uuid'] = value.role_id
            localStorage.setItem("userUuid", value.role_id)
        },
        CLEAR_USER(state) {
            state.authUser = null
            state.authenticated = false
            state.user = null
            localStorage.removeItem("userUuid")
        },
        SET_PREVIOUS_USER_ID(state, value) {
            state.previous_user_id = value
        },
        SET_REDIRECT_URL(state, value) {
            state.redirect_url = value
        },
        SET_INTERVAL_TBS_CAN_AUTOSAVE(state, value) {
            state.interval_tbs_can_autosave = value
        },
        SET_INTERVAL_AUTOSAVING_CONTEXT(state, value) {
            state.interval_autosaving_context = value
        },
        SET_AUTHCHECK_USER_CONTEXT(state, value) {
            state.authcheck_user_context = value
        },
        SET_LOAD_BALANCER_REQUEST(state, value) {
            state.load_balancer_request = value
        },
        SET_BALANCER_REQUEST_START_CREDIT(state, value) {
            state.balancer_request_start_credit = value
        },
        SET_REPLICATE_DECISION(state, value) {
            state.replicate_decision = value
        },
        SET_STORE_TB_NAMES(state, value) {
            state.store_tb_names = value
        },
        RESET_TB_NAMES(state) {
            state.store_tb_names = {};
        }
    },
    actions: {
        clearUser({ commit }) {
            commit('CLEAR_USER')
        },
        login({ commit }, data) {
            commit('SET_USER', data)
        },
        logout({ commit }) {
            commit('CLEAR_USER')
        },
        setDashboardData({ commit }, data) {
            commit('SET_DASHBOARD_DATA', data)
        },
        setUser({ commit }, data) {
            commit('SET_USER', data)
        },
        setPreviousUserId({ commit }, data) {
            commit('SET_PREVIOUS_USER_ID', data)
        },
        setRedirectUrl({ commit }, data) {
            commit('SET_REDIRECT_URL', data)
        },
        setIntervalTbsCanAutosave({ commit }, data) {
            commit('SET_INTERVAL_TBS_CAN_AUTOSAVE', data)
        },
        setIntervalAutosavinContext({ commit }, data) {
            commit('SET_INTERVAL_AUTOSAVING_CONTEXT', data)
        },
        setAuthcheckUserContext({ commit }, data) {
            commit('SET_AUTHCHECK_USER_CONTEXT', data)
        },
        setLoadBalancerRequest({ commit }, data) {
            commit('SET_LOAD_BALANCER_REQUEST', data)
        },
        setBalancerRequestStartCredit({ commit }, data) {
            commit('SET_BALANCER_REQUEST_START_CREDIT', data)
        },
        setReplicateDecision({ commit }, data) {
            commit('SET_REPLICATE_DECISION', data)
        },
        setTbStoreNames({ commit }, data) {
            commit('SET_STORE_TB_NAMES', data)
        },
        resetTb({ commit }) {
            commit("RESET_TB_NAMES");
        }
    }
}
