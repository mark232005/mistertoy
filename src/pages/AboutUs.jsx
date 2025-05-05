import { MyMap } from "../cmps/GoogleMap.jsx";
import React, { useState } from 'react'

export function AboutUs() {

    const [center, setCenter] = useState({
        lat: 32.7940,
        lng: 34.9896,
    })

    function handleClick(city) {
        console.log(city);
        switch (city) {
            case 'tel-aviv':
                setCenter({
                    lat: 32.0853,
                    lng: 34.7818,
                })
                break;
            case 'eilat':
                setCenter({
                    lat: 29.5581,
                    lng: 34.9482,
                })
                break
            case 'beer sheva':
                setCenter({
                    lat: 31.2518,
                    lng: 34.7913,
                })
                break
            case 'hifa':
                setCenter({
                    lat: 32.7940,
                    lng: 34.9896,
                })
                break
            case 'rehovot':
                setCenter({
                    lat: 31.8922,
                    lng: 34.8094,
                })
                break
        }

    }
    return (
        <section className="about-us-page" >
            <article>
                <h2>About us:</h2>
                <p> Israel, located in Be'er Sheva, Eilat, Rehovot, Tel Aviv, and Haifa, the company provides a wide variety of high-quality toys to customers of all ages. Over the years, the company has gained a reputation for excellence, offering a diverse range of products that cater to both children and collectors alike.
                    As a trusted name in the industry, the company prides itself on its commitment to customer satisfaction and its ability to stay ahead of trends in the ever-evolving toy market. With a focus on innovation and quality, the company continues to grow and expand, bringing joy to families across the country.

                </p>
            </article>
            <div className="map flex">
                <MyMap center={center} />
                <div className="btn-map flex">
                    
                <h3>We would be happy to have you visit one of our branches:</h3>
                    <button class="map-btn" onClick={() => handleClick('tel-aviv')}>
                        <span>Tel-Aviv</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>

                    <button class="map-btn" onClick={() => handleClick('rehovot')}>
                        <span>Rehovot</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>

                    <button class="map-btn" onClick={() => handleClick('eilat')}>
                        <span>Eilat</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>

                    <button class="map-btn" onClick={() => handleClick('hifa')}>
                        <span>Hifa</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>

                    <button class="map-btn" onClick={() => handleClick('beer sheva')}>
                        <span>Be'er Sheva</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>

                </div>
            </div>
        </section>
    )
}