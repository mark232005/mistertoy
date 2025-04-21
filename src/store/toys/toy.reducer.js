import { toyService } from "../../services/toy.service.locl.js"



export const SET_TOYS = 'SET_TOYS'
export const REMOVE_TOY = 'REMOVE_TOY'
export const ADD_TOY = 'ADD_TOY'
export const UPDATE_TOY = 'UPDATE_TOY'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_FILTER_BY = 'SET_FILTER_BY'
export const SET_SORT_BY='SET_SORT_BY'

const initialState = {
    toys: [],
    isLoading: false,
    filterBy:toyService.getDefaultFilter(),
    sortBy:toyService.getDefaultSort(),
    labls:[]
}

export function toyReducer(state = initialState, action = {}) {
    let toys
    switch (action.type) {
        case SET_TOYS:
            return {
                ...state, toys: action.toys
            }
        case REMOVE_TOY:
              toys = state.toys.filter(toy => toy._id !== action.toyId)
            return { ...state, toys, lastToys: state.toys }

        case ADD_TOY:
            toys = [action.toy, ...state.toys]
            return { ...state, toys, lastToys: state.toys }

        case UPDATE_TOY:
            return {
                ...state, toys: state.toys.map(toy => toy._id === action.toy._id ? action.toy : toy)
            }

        case SET_IS_LOADING:
            return {
                ...state, isLoading: action.isLoading
            }
            case SET_FILTER_BY:
                return {
                    ...state, filterBy: { ...state.filterBy, ...action.filterBy }
                }
            case SET_SORT_BY:
                return {
                    ...state, sortBy: { ...state.sortBy, ...action.sortBy }
                }

        default:
            return state
    }
}