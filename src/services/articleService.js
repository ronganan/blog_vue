import Http from 'commons/utils/http';

const PAGELISTARTICLES = '/article/pageListArticles';
const QUERYARTICLE = '/article/getArticle';
const ADDARTICLE = '/article/addArticle';
const EDITARTICLE = '/article/editArticle';

export default {
    getArticlesPageList(data) {
        return Http.post(PAGELISTARTICLES,  data).then( res => res.data);
    },
    getArticle(data) {
        return Http.post(QUERYARTICLE,  data).then( res => res.data);
    },
    addArticle(data) {
        return Http.post(ADDARTICLE,  data).then( res => res.data);
    },
    editArticle(data) {
        return Http.post(EDITARTICLE,  data).then( res => res.data);
    },
}