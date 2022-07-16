import axios from "axios"
import router from "../router"
const instance = axios.create({
    baseURL: "http://localhost:8080/", // baseURL会在发送请求时拼接在url参数前面 ;ulr = baseURL + request url
    timeout: 5000
})

// 请求拦截
instance.interceptors.request.use(
        function(config) {
            return config
        },
        function(err) {
            return Promise.reject(err)
        }
    )
    // 响应拦截
instance.interceptors.response.use(
    function(response) {
        // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
        // 否则的话抛出错误
        if (response.status == 200) {
            return response
        } else {
            return Promise.reject(response)
        }
    },
    // 状态码不是200的情况
    function(err) {
        return Promise.reject(err)
    }
)