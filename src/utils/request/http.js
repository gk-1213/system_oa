import axios from "axios";
import {getToken} from './auth'
import {TOKEN} from'../constant'

let baseUrl = 'http://192.168.3.162:9000'

// 创建axios实例，在这里可以设置请求的默认配置
const instance = axios.create({
    timeout: 5000, 
    baseURL: baseUrl 
})


instance.defaults.headers.post['Content-Type'] = 'application/json';

/** 添加请求拦截器 **/
instance.interceptors.request.use(config => {
    var token = getToken(TOKEN)
    if (token) {
        config.headers['token'] = token//在请求头中加入token
    }
    return config
}, error => {
    return Promise.reject(error)
})

/** 添加响应拦截器  **/
instance.interceptors.response.use(response => {
        return Promise.resolve(response.data)
}, error => {
    if (error.response) {
        if (error.response.status === 401) {
            this.props.history.push('/login');
        }
        return Promise.reject(error)
    } else {
        return Promise.reject('请求超时, 请刷新重试')
    }
})

/* 统一封装get请求 */
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'get',
            url,
            params,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

/* 统一封装post请求  */
export const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'post',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}
/* 统一封装gput请求 */
export const put = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'put',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

/* 统一封装delete请求  */
export const deleted = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: 'delete',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}





