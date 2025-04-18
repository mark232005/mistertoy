

import { toyService } from "../../services/toy.service.locl.js";
import { store } from "../store.js";
import { ADD_TOY, REMOVE_TOY, SET_FILTER_BY, SET_IS_LOADING, SET_TOYS, UPDATE_TOY } from "../toys/toy.reducer.js";


export function loadToys() {
    const filterBy = store.getState().toyModule.filterBy
    store.dispatch({ type: SET_IS_LOADING, isLoading: true })
    return toyService.query(filterBy).then(toys => {
        store.dispatch({ type: SET_TOYS, toys })
    }).catch(err => {
        console.log('Toys action -> Cannot load Toys', err)
        throw err
    })
        .finally(() => {
            store.dispatch({ type: SET_IS_LOADING, isLoading: false })
        })
}

export function removeToy(toyId) {
    return toyService.remove(toyId).then(
        () => { store.dispatch({ type: REMOVE_TOY, toyId }) }
    ).catch((err) => {
        console.log('car action -> Cannot remove car', err)
        throw err
    })
}
export function saveToy(toy) {
    const type = toy._id ? UPDATE_TOY : ADD_TOY
    return toyService.save(toy).then(saveToy => {
        store.dispatch({ type: type, saveToy })
        return saveToy
    }
    ).catch(err => {
        console.log('toy action -> Cannot save toy', err)
        throw err
    })
}

export function setFilterBy(filterBy) {
	store.dispatch({ type: SET_FILTER_BY, filterBy })
}
