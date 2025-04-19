

export function ToyPreview({toy}){
    console.log(toy);
return(
    <section className="toy-card " >
        <h1>{toy.name}</h1>
        <p>Price:{toy.price}$</p>
        <p>{toy.isStock?'Not in stock':'In stock'}</p>
        <div className=" btn-card flex">

        <button>Remove</button>
        <button>Edit</button>
        </div>
    </section>
)
}