import axios from 'axios'
// import store from '@/JS/store'
// 创建axios实例
const service = axios.create({
    baseURL: 'http://123.58.133.111:52744',
    timeout: 15000// 请求超时时间

})

service.interceptors.response.use(
    // config => {
    //     config.Headers['Content-Type'] = 'application/json;charset = utf-8'
    //     return config
    // },
    //请求正常则返回
    function (response) {
        return Promise.resolve(response)
    },
    function (error) {
        // 请求错误则向store commit这个状态变化
        const httpError = {
            hasError: true,
            status: error.response.status,
            statusText: error.response.statusText
        }
        store.commit('ON_HTTP_ERROR', httpError)
        return Promise.reject(error)
    }
)
export default service