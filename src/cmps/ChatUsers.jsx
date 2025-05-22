import { useRef, useState, useEffect } from "react";

export function ChatUser({ user, msgs, sendMsg }) {
    const messagesEndRef = useRef(null)
    const [userInput, setUserInput] = useState('')
    useEffect(() => {
        
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msgs]);
    function addMsg(txt) {
        const newMsg = {
            txt
        }
        sendMsg(newMsg)
    }
    function handleInput() {
        if (!userInput.trim()) return
        addMsg(userInput)
        setUserInput('')
    }


    return (
        <section className="chat-user-container flex">
            <h2>Chat:</h2>
            <div className="chat">
                {(msgs || []).map(msg => {
                    return (
                        <div key={msg.id}>
                            <section>
                                <h3>{msg.by?.fullname || user?.fullname || 'Guest'}</h3>
                            </section>
                            <p>{msg.txt}</p>
                        </div>

                    )
                })}
                <div ref={messagesEndRef} />
            </div>
            <div className="flex">

                <input value={userInput} type="text" onChange={(ev) => setUserInput(ev.target.value)} />
                <button onClick={()=>handleInput()}>send</button>
            </div>

        </section>
    )
}