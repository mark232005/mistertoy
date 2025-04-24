import { useNavigate } from 'react-router-dom'

export function ToyPreview({toy,remove}){
    const navigate = useNavigate()
    console.log(toy.inStock);
return(
    <article  >
        <img className='img-card' src={toy.imgUrl} alt="התמונה של המוצר" />
        <div className='card'>
        <h1 className='name-card'>{toy.name}</h1>
        <p className='price-card'><span className='green'> $</span>{toy.price}</p>
        <p className={toy.inStock?'green':'red'}>{toy.inStock?'In stock':'Not in stock'}</p>

        </div>
    </article>
)
}