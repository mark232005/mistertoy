import { userService } from "../../services/user.service.js";
import { store } from '../store.js'
import { SET_USER } from "./user.reducer.js";




export async function login(credentials) {
    try {
        const user = await userService.loginUser(credentials)
        store.dispatch({ type: SET_USER, user })
    }
    catch (err) {
        console.log('user actions -> Cannot login', err)
        throw err

    }
}
export async function signup(credentials) {
    try {
        const user = await userService.signupUser(credentials)
        store.dispatch({ type: SET_USER, user })
    } catch (err) {
        console.log('user actions -> Cannot signup', err)
        throw err
    }

}
export async function logout() {
    try {
        await userService.logoutUser()
        store.dispatch({ type: SET_USER, user: null })
    } catch (err) {
        console.log('user actions -> Cannot signup', err)
        throw err
    }

}