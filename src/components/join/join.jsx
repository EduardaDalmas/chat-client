import { useRef } from "react"
import io from 'socket.io-client'
import style from './join.module.css'
import {Input, Button} from '@mui/material'

export default function Join({setChatVisibility, setSocket}) {

    const usernameRef = useRef()

    const handleSubmit =  async () => {
        const username = usernameRef.current.value
        if (!username.trim()) return alert('Nome do usuário é obrigatório')
        const socket = await io.connect('http://localhost:3001')
        socket.emit('set_username', username)
        setSocket(socket)
        setChatVisibility(true)
    }

    return (
        <div className={style['join-container']}>
            <h1>Hello</h1>
            <input type="text" ref={usernameRef} placeholder="Nome do usuário" />
            <Button sx={{mt:2}} onClick={()=>handleSubmit()} variant="contained">Entrar</Button>
        </div>
    )
}