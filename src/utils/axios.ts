import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios"
import { showToast } from 'vant';


const BASE_URL = 'http://localhost:3001'
// 不带全局loading的请求实例
export const requestWithoutLoading: AxiosInstance = createBaseInstance()
// 带全局loading的请求实例
// 传入函数是因为需要在处理请求结果handleResponse之前处理loading
// 所以要在内部插入loading拦截器的处理逻辑
export const request: AxiosInstance = createBaseInstance()
mixinLoading(request.interceptors)
// 通用的axios实例
function createBaseInstance() {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_BASE_API,
    })

    instance.interceptors.response.use(handleResponse, handleError)
    return instance
}

function handleError(e: { message: any }) {
    showToast('出错啦');
    throw e
}

function handleResponse(response: any) {
    return response.data
}

function mixinLoading(interceptors: any) {
    interceptors.request.use(loadingRequestInterceptor)
    function loadingRequestInterceptor(config: AxiosRequestConfig) {
        showToast('加载中')

        return config
    }
}