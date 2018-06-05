import {get,post} from 'src/utils/request'

const api = {
    getDate(obj){ return get(obj)},
    postData(obj){return post(obj)}
}

export default api;

