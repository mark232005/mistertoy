import { httpService } from './http.service'

const BASE_URL = 'toy/'
const labels = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered',
]

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,

    getDefaultFilter,
    getDefaultSort,
   labels
 
}

function query(filterBy = {},sortBy={}) {
    return httpService.get(BASE_URL, {filterBy,sortBy})
    // return axios.get(BASE_URL, {params: { filterBy, sortBy, pageIdx }})
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    const method = toy._id ? 'put' : 'post'
    return httpService[method](BASE_URL, toy)
}

function getEmptyToy() {
    return {
        name:'',
        imgUrl: '',
        price: '',
        labels: [],
        inStock: ''

    }
}


function getDefaultFilter() {
    return {
        txt: '',
        inStock: null,
        labels: [],
    
    }
}

function getDefaultSort() {
    return { type: '', desc: 1 }
}



