import { useRef } from "react"
import io from 'socket.io-client'

export default function Join({setChatVisibility}) {

    const usernameRef = useRef()

    const handleSubmit =  async () => {
        const username = usernameRef.current.value
        if (!username.trim()) return alert('Nome do usuário é obrigatório')
        const socket = await io.connect('http://localhost:3001')
        setChatVisibility(true)
    }

    return (
        <div>
            <h1>Join</h1>
            <input type="text" ref={usernameRef} placeholder="Nome do usuário" />
            <button onClick={() => handleSubmit()}>Entrar</button>
        </div>
    )
}