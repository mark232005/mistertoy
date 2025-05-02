import { useParams } from "react-router-dom"
import { useEffect ,useState } from 'react'
import { toyService } from "../services/toy.service-remote.js"

export function ToyDetails(){
    const { toyId } = useParams()
    const [toy,setToy]=useState()
    useEffect(()=>{
        toyService.getById(toyId).then(toy=>setToy(toy))
    },[toyId])
if(!toy) return 'Loading...'
    return(
        <section className="toy-details">
            <h2>{toy.name}</h2>
            <p>Price:{toy.price}$</p>

        </section>
    )
}