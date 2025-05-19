import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import { toyService } from "../services/toy.service-remote.js"
import { useNavigate } from 'react-router-dom'
import { utilService } from "../services/util.service.js"
import { PopUp } from "../cmps/PopUp.jsx"
import { Chat } from "../cmps/chat.jsx"
import { useSelector } from "react-redux"
import { ChatUser } from "../cmps/ChatUsers.jsx"

export function ToyDetails() {
    const user = useSelector(storeState => storeState.userModule.loggedInUser)
    const [msgs, setMsgs] = useState([]);
    const navigate = useNavigate()
    const { toyId } = useParams()
    const [toy, setToy] = useState()
    const [isChatOpen, setIsChatOpen] = useState(false)

    useEffect(() => {
        toyService.getById(toyId).then(toy => {
            setToy(toy)
            setMsgs(toy.msgs || [])
        }
        )
    }, [toyId])

    async function addMsg(msg) {
        try {
            const saveMsg = await toyService.addMsg(toyId, msg)
            setToy(prevToy => ({
                ...prevToy, msgs: [...(prevToy.msgs || []), saveMsg]

            }))
            setMsgs(prevMsgs => [...prevMsgs, saveMsg])
        } catch (err) {
            console.log('Cant save msg', err);
        }
    }

    if (!toy) return 'Loading...'
    return (
        <section className="toy-details flex">
            <div className="details">
                <h2 className="toy-details-name">{toy.name}</h2>
                <p>{utilService.makeLorem(100)}</p>
                <p className="toy-details-price">Price:{toy.price}$</p>


                <div className="btn-details flex">
                    <div className="btn-back-styled-wrapper">
                        <button className="btn-back" onClick={() => navigate(`/toy`)}>
                            <div className="btn-back-box">
                                <span className="btn-back-elem">
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="arrow-icon"
                                    >
                                        <path
                                            fill="black"
                                            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                        ></path>
                                    </svg>
                                </span>
                                <span className="btn-back-elem">
                                    <svg
                                        fill="black"
                                        viewBox="0 0  24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="arrow-icon"
                                    >
                                        <path
                                            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>
                    <div className="btn-buy">
                        <div className="btn-buy-wrapper">
                            <div className="btn-buy-text">Buy Now</div>
                            <span className="btn-buy-icon">
                                <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <img className="toy-details-img" src={toy.imgUrl} alt=" Toy img" />
            <ChatUser sendMsg={addMsg} user={user} msgs={msgs} />

            {
                user &&
                <section>
                    <PopUp
                        isOpen={isChatOpen}
                        header={<h3>Chat about {toy.name}</h3>}
                        onClose={() => setIsChatOpen(false)}
                    >

                        <Chat />
                    </PopUp>

                </section>
            }
            {!isChatOpen &&
                <div class="open-chat" onClick={() => { setIsChatOpen(prev => !prev) }} >
                    <div className="background-chat"></div>
                    <svg viewBox="0 0 100 100" height="100" width="100" class="chat-bubble">
                        <g class="bubble">
                            <path d="M 30.7873,85.113394 30.7873,46.556405 C 30.7873,41.101961
          36.826342,35.342 40.898074,35.342 H 59.113981 C 63.73287,35.342
          69.29995,40.103201 69.29995,46.784744" class="line line1"></path>
                            <path d="M 13.461999,65.039335 H 58.028684 C
            63.483128,65.039335
            69.243089,59.000293 69.243089,54.928561 V 45.605853 C
            69.243089,40.986964 65.02087,35.419884 58.339327,35.419884" class="line line2"></path>
                        </g>
                        <circle cx="42.5" cy="50.7" r="1.9" class="circle circle1"></circle>
                        <circle r="1.9" cy="50.7" cx="49.9" class="circle circle2"></circle>
                        <circle cx="57.3" cy="50.7" r="1.9" class="circle circle3"></circle>
                    </svg>
                </div>}

        </section>
    )
}