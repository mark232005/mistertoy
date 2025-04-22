import { useNavigate } from 'react-router-dom'

export function ToyPreview({toy,remove}){
    const navigate = useNavigate()
return(
    <article  >
        <h1>{toy.name}</h1>
        <p>Price:{toy.price}$</p>
        <p>{toy.isStock?'Not in stock':'In stock'}</p>
        <div className=" btn-card flex">

        </div>
    </article>
)
}