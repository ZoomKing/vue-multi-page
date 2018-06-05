import {get,post} from '@/utils/request'

const api = {
    getDate(obj){ return get(obj)},
    postData(obj){return post(obj)}
}

export default api;

