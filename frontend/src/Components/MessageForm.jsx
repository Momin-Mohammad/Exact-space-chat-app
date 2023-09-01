import { useState } from "react"
import './MessageForm.css'
export default function MessageForm({msg,sendMsg,setMsg,setSuggestion}){
 
  const checkTag =(value)=>{
    setMsg(value);
    if(value[value.length-1] === "@"){
      setSuggestion(true);
    }else{
      setSuggestion(false);
    }
  }
    return(
        <form onSubmit={sendMsg} className="Message-typing-div">
        <textarea className="Message-Input" value={msg} onChange={(e)=>checkTag(e.target.value)} type="text" />
        <button className="Message-Submit-btn" type="submit">Send</button>
      </form>
    )
}