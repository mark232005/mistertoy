import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { toyService } from "../services/toy.service-remote.js"
import { useNavigate } from 'react-router-dom'
import { utilService } from "../services/util.service.js"

export function ToyDetails() {
    const navigate = useNavigate()
    const { toyId } = useParams()
    const [toy, setToy] = useState()
    useEffect(() => {
        toyService.getById(toyId).then(toy => setToy(toy))
    }, [toyId])
    if (!toy) return 'Loading...'
    return (
        <section className="toy-details flex">
            <div className="details">
                <h2 className="toy-details-name">{toy.name}</h2>
                <p>{utilService.makeLorem(100)}</p>
                <p className="toy-details-price">Price:{toy.price}$</p>

                <div className="btn-details flex">
                    <div class="btn-back-styled-wrapper">
                        <button class="btn-back" onClick={() => navigate(`/toy`)}>
                            <div class="btn-back-box">
                                <span class="btn-back-elem">
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="arrow-icon"
                                    >
                                        <path
                                            fill="black"
                                            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                        ></path>
                                    </svg>
                                </span>
                                <span class="btn-back-elem">
                                    <svg
                                        fill="black"
                                        viewBox="0 0  24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="arrow-icon"
                                    >
                                        <path
                                            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>
                    <div class="btn-buy">
                        <div class="btn-buy-wrapper">
                            <div class="btn-buy-text">Buy Now</div>
                            <span class="btn-buy-icon">
                                <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <img className="toy-details-img" src={toy.imgUrl} alt=" Toy img" />

        </section>
    )
}