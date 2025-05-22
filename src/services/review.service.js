import { httpService } from "./http.service"


const BASE_URL = 'review/'
export const reviewService = {
    query,
    add,
    remove
}

async function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}
async function add({ txt, aboutToyId }) {
    return httpService.post(BASE_URL, { txt, aboutToyId })

}
async function remove(reviewId) {
    return httpService.delete(BASE_URL + reviewId)
}