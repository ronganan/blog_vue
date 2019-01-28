import Http from 'commons/utils/http';

const LOGIN = '/user/login';

export default {
    login(data) {
        return Http.post(LOGIN,  data).then( res => res.data);
    }
}