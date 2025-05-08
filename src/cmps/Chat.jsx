import Textarea from '@mui/joy/Textarea';
import { useState, useRef, useEffect } from 'react';



export function Chat() {

    const messagesEndRef = useRef(null)
    const [msgs, setMsgs] = useState([])
    const [userInput, setUserInput] = useState('')
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [msgs]);

    function addMsg(txt, from) {
        const newMsg = {
            txt,
            from,
            timestamp: new Date().toLocaleTimeString(),
            id: Date.now()
        }
        setMsgs(prevMsg => [...prevMsg, newMsg])
    }
    function handleInput() {
        if (!userInput.trim()) return
        addMsg(userInput, 'user')
        setTimeout(() => {
            addMsg(`Sure thing honey`, 'Support')
        }, 1000);
        setUserInput('')
    }

    return (
        <section className='chat-container'>
            <div className='chat-msg'>
                {msgs.map(msg => {
                    return (
                        <div key={msg.id} className={msg.from === 'user' ? 'You' : msg.from}>
                            <section>

                                <h3>{msg.from === 'user' ? 'You' : msg.from}:</h3>
                            </section>
                            <p>{msg.txt}</p>
                            <span>{msg.timestamp}</span>
                        </div>

                    )
                })}
                <div ref={messagesEndRef} />

            </div>

            <div className='flex' style={{ position: 'fixed', top: '685px' }}>
                <Textarea
                    onChange={(ev) => setUserInput(ev.target.value)}
                    color="primary"
                    disabled={false}
                    minRows={2}
                    placeholder="Type your message here..."
                    size="md"
                    variant="outlined"
                    sx={{ width: '270px' }}
                    value={userInput}
                />
                <button class="send-button" onClick={() => handleInput()}>
                    Send
                    <svg
                        class="send-icon"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                    </svg>
                </button>

            </div>
        </section>
    )
}