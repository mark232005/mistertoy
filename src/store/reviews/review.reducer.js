
export const SET_REVIEW = 'SET_REVIEW'
export const ADD_REVIEW = 'ADD_REVIEW'
export const REMOVE_REVIEW = 'REMOVE_REVIEW'

const initialState = {
    reviews: []
}

export function reviewReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SET_REVIEW:
            return {
                ...state,
                reviews: action.reviews,
            }
        case ADD_REVIEW:
            return {
                ...state,
                reviews: [...state.reviews, action.review]
            }
case REMOVE_REVIEW:
    return{
        ...state,reviews:state.reviews.filter(review=> review._id !== action.reviewId)
    }

        default:
            return state
    }

}