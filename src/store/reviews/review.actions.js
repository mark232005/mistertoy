import { reviewService } from "../../services/review.service.js";
import { store } from "../store.js";
import { ADD_REVIEW, REMOVE_REVIEW, SET_REVIEW } from "./review.reducer.js";




export async function loadRevies(filterBy = {}) {
    console.log(filterBy);
    try {
        const reviews = await reviewService.query(filterBy)
        store.dispatch({ type: SET_REVIEW, reviews })

    } catch (err) {
        console.log('ReviewActions: err in loadReviews', err)
        throw err

    }
}

export async function addReview(review) {
    try {
        const addReview = await reviewService.add(review)
        store.dispatch(getActionAddReview(addReview))
    } catch (err) {
        console.log('ReviewActions: err in addReviews', err)
        throw err

    }
}

export async function removeReview(reviewId) {
    await reviewService.remove(reviewId)
    store.dispatch(getActionRemoveReview(reviewId))

}

export function getActionAddReview(review) {
    return { type: ADD_REVIEW, review }
}
export function getActionRemoveReview(reviewId) {
    return { type: REMOVE_REVIEW, reviewId }
}

