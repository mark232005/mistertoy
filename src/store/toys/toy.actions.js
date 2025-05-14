

import { toyService } from "../../services/toy.service-remote.js";
// import { toyService } from "../../services/toy.service.locl.js";
import { store } from "../store.js";
import { ADD_TOY, REMOVE_TOY, SET_FILTER_BY, SET_IS_LOADING, SET_SORT_BY, SET_TOYS, UPDATE_TOY } from "../toys/toy.reducer.js";


export async function loadToys() {
    const filterBy = store.getState().toyModule.filterBy
    const sortBy = store.getState().toyModule.sortBy

    store.dispatch({ type: SET_IS_LOADING, isLoading: true })

    try {
        const toys = await toyService.query(filterBy, sortBy)
        store.dispatch({ type: SET_TOYS, toys })
        return toys
    }
    catch (err) {
        console.log('Toys action -> Cannot load Toys', err)
        throw err
    }
    finally {

        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }

}
export async function removeToy(toyId) {
    try {
        const removedToy = await toyService.remove(toyId)
        store.dispatch({ type: REMOVE_TOY, toyId })
        return removedToy
    }
    catch (err) {
        console.log('car action -> Cannot remove car', err)
        throw err
    }
}
export async function saveToy(toy) {
    const type = toy._id ? UPDATE_TOY : ADD_TOY
    try {
        const saveToy = await toyService.save(toy)
        store.dispatch({ type: type, toy: saveToy })
        return saveToy
    }
    catch (err) {
        console.log('toy action -> Cannot save toy', err)
        throw err
    }
}

export function setFilterBy(filterBy) {
    store.dispatch({ type: SET_FILTER_BY, filterBy })
}
export function setSortBy(sortBy) {
    store.dispatch({ type: SET_SORT_BY, sortBy })

}
