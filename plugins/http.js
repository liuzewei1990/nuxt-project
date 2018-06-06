
import vue from "vue";
import axios from "axios";
import qs from "qs";

axios.interceptors.request.use(function (config) {
    config.headers.common['x_real_ip'] = "http://118.190.149.38:8088/converge/online/quick/pay";
    return config;
}, function (error) {
    return Promise.reject(error);
})

axios.interceptors.response.use(function (response) {

    if (response && response.status === 200) {

        return response.data;
    } else {
        return {
            resultCode: -102,
            resultMsg: "HTTP状态码：" + response.status
        };
    }
}, function (error) {
    console.dir(error);
    if (error.code == "ECONNABORTED") {
        return Promise.resolve({
            resultCode: -100,
            resultMsg: "请求超时,请稍候再试！",
        });
    } else {
        return Promise.resolve({
            resultCode: -100,
            resultMsg: "请求失败，请检查网络！",
        });
    }
})


vue.prototype.post = function (url, data, isLoading) {
    return axios({
        method: "post",
        url: url,
        // baseURL: baseURL,
        data: qs.stringify(data),
        timeout: 10000,
        isLoading: isLoading == false ? false : true,
        headers: {
            // "X-requested-With": "XMLHttpRequest",
            //使用form表单进行数据交互
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
        }
    })
}

vue.prototype.postJson = function (url, data, isLoading) {
    return axios({
        method: "post",
        url: url,
        // baseURL: baseURL,
        data: data,
        timeout: 10000,
        isLoading: isLoading == false ? false : true,
        headers: {
            // "X-requested-With": "XMLHttpRequest",
            //使用form表单进行数据交互
            "Content-Type": "application/json"
        }
    })
}

vue.prototype.get = function (url, params, isLoading) {
    return axios({
        method: "GET",
        url: url,
        // baseURL: baseURL,
        params: params,
        timeout: 10000,
        isLoading: isLoading == false ? false : true,
        // headers: {
        //           "X-requested-With": "XMLHttpRequest"
        // }
    })
};