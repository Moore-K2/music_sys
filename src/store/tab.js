export default {
    state: {
        isCollapse: false
    },
    actions: {},
    mutations: {
        HANDELCOLLAPSE(state) {
            state.isCollapse = !state.isCollapse
        }
    },

}