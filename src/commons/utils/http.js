import axios from 'axios';
import qs from 'qs';
import router from '@/router';
import {Notification} from 'element-ui';
axios.defaults.timeout = 15000
export default {
    get(url, params) {
        return axios({
            method: 'GET',
            url: url,
            params: params,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then( (res) => res ).catch( (err) => err )
    },
    post(url, data) {
        return axios({
            method: 'POST',
            url: url,
            data: qs.stringify(data),
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            }
        })
    }
} 
axios.interceptors.response.use(function(response) {
    // Do something with response data
    let code = response.resultCode || response.data.resultCode;
    let msg = response.resultMessage || response.data.resultMessage;
    //代表超时
    if (code === 401) {
        localStorage.clear();
        Notification({
            title: msg,
            type: 'warning'
        });
        if (location.href.split('#')[1] != "/index/login/") {
            setTimeout(function() {
                router.replace('/index/login/');
            }, 1000);
        }
    }
    // 传参错误
    if (code === 400) {
        Notification({
            title: "参数格式错误!",
            type: 'warning'
        });
    }
    return response;
}, function(error) {
    var message;
    switch (error.status || error.response.status) {
        case 0:
            message = '请求超时，请稍后重试！';
            break;
        case 404:
            message = '请求的地址不存在，请联系管理员！';
            break;
        case 401:
            localStorage.clear();
            message = error.resultMessage || error.response.data.resultMessage;
            setTimeout(function() {
                router.replace('/index/login/');
            }, 1000);
            break;
        case 400:
            if (error.response && error.response.data && error.response.data.resultMessage) {
                message = error.response.data.resultMessage;
            } else {
                message = '参数格式错误！';
            }
            break;
        case 502:
            message = '服务无响应，请联系管理员！';
            break;
        case 500:
            if (error.response && error.response.data && error.response.data.resultMessage) {
                message = error.response.data.resultMessage;
            } else {
                message = '服务异常，请联系管理员！';
            }
            break;
        default:
            message = '服务异常，请联系管理员！';
            break;
    }
    Notification({
        title: message,
        type: 'error'
    });
    // Do something with response error
    return Promise.reject(error.response || error);
});