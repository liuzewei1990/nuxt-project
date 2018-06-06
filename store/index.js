import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

    state: {
        url: "http://118.190.149.38:8088/converge/native/service",
        md5Key: "RSGUVWXYZ0123456",
        lastUpdateOrderNo: "",
        publicParams: {
            version: "1.0.0",
            service: "",
            companyNo: "10077777",
            customerNo: "20034585",
            signData: ""
        }
    },
    mutations: {
        updateOrderNo(state, orderNo) {
            localStorage.setItem(orderNo, "");
            state.lastUpdateOrderNo = orderNo || "";
        }
    }
})

export default store