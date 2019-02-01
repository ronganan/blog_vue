import Http from 'commons/utils/http';

const QUERYATTYPES = '/common/getAcTypes';
const QUERYATTAGS = '/common/getAcTags';

export default {
    queryAcTypes(data) {
        return Http.get(QUERYATTYPES,  data).then( res => res.data);
    },
    queryAcTags(data) {
        return Http.get(QUERYATTAGS,  data).then( res => res.data);
    },
}