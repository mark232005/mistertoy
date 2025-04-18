import { storageService } from "./async-storage.service.js"
import { utilService } from "./util.service.js"

const STORAGE_KEY = 'toyDB'

__createToys()

export const toyService ={
    query,
    getById,
    remove,
    save,
    getDefaultFilter

}


function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
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
        name: '',
        imgUrl: '',
        price: '',
        lables: [],

    }
}

function createToy() {
    return {
        name: utilService.makeLorem(20),
        imgUrl: '',
        price: utilService.getRandomIntInclusive(25, 250),
        lables: [],
        inStock: true

    }
}

function __createToys() {
    const toys = utilService.loadFromStorage(STORAGE_KEY)
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
    return { name: '',inStock:null,lables:[]  }
}