


export function ReviewList({reviews}){
    console.log(reviews);
return(
    <section>
        <ul>
        {reviews.map(review => {
  return (
    <li key={review._id}>
      <h1>{review.byUser.fullname}</h1>
      <p>{review.txt}</p>
    </li>
  )
})}
        </ul>
    </section>
)
}