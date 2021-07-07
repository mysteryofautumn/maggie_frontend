import axios from 'axios'
const baseURL = 'http://localhost:8000' //backend service
axios.defaults.timeout = 10000
axios.defaults.baseURL = baseURL
axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/json'

//base http methods for restful apis
function post(url, params) {
    return axios.post(url, params)
}

function get(url, params) {
    return axios.get(url, params)
}

function getItems(params) {
    return get('./getItems/', params)
}

function addItem(params) {
    return post('./addItem/', params)
}

function deleteItem(params) {
    return post('./deleteItem/', params)
}


function editItem(params) {
    return post('./editItem/', params)
}

export default {
    getItems,
    addItem,
    deleteItem,
    editItem
}

