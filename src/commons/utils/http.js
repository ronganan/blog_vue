import axios from 'axios';
import qs from 'qs';

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