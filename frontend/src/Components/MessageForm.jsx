import { useState } from "react"
import './MessageForm.css'
export default function MessageForm({sendMsg,setMsg}){
 
    return(
        <form onSubmit={sendMsg} className="Message-typing-div">
        <input onChange={(e)=>setMsg(e.target.value)} type="text" />
        <button type="submit">Send</button>
      </form>
    )
}