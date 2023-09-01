import { useState } from "react"
import './MessageForm.css';
import {GoSmiley} from "react-icons/go"
export default function MessageForm({emojiBox,msg,sendMsg,checkTag}){
 
    return(
        <form onSubmit={sendMsg} className="Message-typing-div">
        <textarea className="Message-Input" value={msg} onChange={(e)=>checkTag(e.target.value)} type="text" />
        <div className="Message-emoji-div" onClick={emojiBox}><GoSmiley /></div>
        <button className="Message-Submit-btn" type="submit">Send</button>
      </form>
    )
}