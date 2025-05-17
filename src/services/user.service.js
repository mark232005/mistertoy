import { httpService } from "./http.service.js"

export const userService = {
    getEmptyCredentials,
    loginUser,
    logoutUser,
    signupUser,
    getLoggedInUser
}
const STORAGE_KEY = 'loggedinUser'
const BASE_URL = 'auth/'


async function loginUser({ userName, password }) {
    try {
        const user = await httpService.post(BASE_URL + 'login', { userName, password })
        _setLoggedInUser(user)
        return user
    } catch (err) {
        console.log('Could not login');
        throw err
    }

}
async function logoutUser() {
    try {
        await httpService.post(BASE_URL + 'logout')
        sessionStorage.removeItem(STORAGE_KEY)
    } catch (err) {
        console.log('Could not logout');
        throw err
    }
}
async function signupUser(credentials) {
    try {
        const user = await httpService.post(BASE_URL + 'signup', credentials)
        _setLoggedInUser(user)
        return user
    } catch (err) {
        console.log('Could not sigup')
        throw err
    }

}
function getEmptyCredentials() {
    return { fullName: '', password: '', userName: '' }
}
function getLoggedInUser() {
    const entity = sessionStorage.getItem(STORAGE_KEY)
    return JSON.parse(entity)
}
function _setLoggedInUser(user) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}
