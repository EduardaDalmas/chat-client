import { useState } from 'react'
import './App.css'
import Join from './components/join/join'
import Chat from './components/chat/chat'

export default  function App() {
  const [chatVisibility, setChatVisibility] = useState(false)
  const [socket, setSocket] = useState(null)

  return (
    <>
      {
        // usar redux e react router
        chatVisibility ? <Chat socket={socket}  /> : <Join setSocket={setSocket} setChatVisibility={setChatVisibility} />
      }
    </>
  )
}

