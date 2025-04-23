import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const STORAGE_KEY = 'toyDB'

__createToys()
const labels = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered'
  ];
  

export const toyService = {
    query,
    getById,
    remove,
    save,
    getDefaultFilter,
    getDefaultSort,
    getEmptyToy,
    labels

}


function query(filterBy = {},sortBy={}) {
    return storageService.query(STORAGE_KEY).then(
        toys => {
            var toysToShow = [...toys]
            if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                toysToShow = toysToShow.filter(toy => regExp.test(toy.name))
            }
            if (typeof filterBy.inStock === 'boolean') {
                toysToShow = toysToShow.filter(toy => toy.inStock === filterBy.inStock)
            }
            if(sortBy.type==='name'){
                toysToShow.sort((a,b)=>{
                    return a.name.localeCompare(b.name)
                })
           }
            if(sortBy.type==='price'){
                toysToShow.sort((a,b)=>(a.price-b.price))

            }
            if(sortBy.type==='date'){
                toysToShow.sort((a,b)=>(a.createdAt-b.createdAt))
            }
            return toysToShow
        }
    )
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}
function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        return storageService.post(STORAGE_KEY, toy)
    }
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
function createToy() {
    return {
        name: utilService.makeLorem(2),
        imgUrl: '',
        price: utilService.getRandomIntInclusive(25, 250),
        lables: [],
        inStock: true

    }
}

function __createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (toys && toys.length > 0) return
    toys = []
    for (var i = 0; i < 12; i++) {
        const toy = createToy()
        toy._id = utilService.makeId()
        toy.createdAt = Date.now()
        toys.push(toy)
    }
    utilService.saveToStorage(STORAGE_KEY, toys)
}
function getDefaultFilter() {
    return { txt: '', inStock: null, lables: [] }
}
function getDefaultSort() {
    return { type: '', desc: 1 }
}
