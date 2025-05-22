import { ReviewList } from "./ReviewList.jsx";



export function ToyReview({ review, handleInput, save,reviews }) {

    return (
        <section className="review-page">
            <h2>Reviews:</h2>
            <input
                type="text"
                onChange={handleInput}
                value={review.txt}
                name="txt"
            />
            <button onClick={() => save()}>save</button>
            <ReviewList reviews={reviews}/>
        </section>
    )
}