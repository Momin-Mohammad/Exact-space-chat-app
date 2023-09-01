import { useState } from 'react';
import './ChatMessage.css'
import {AiFillLike} from "react-icons/ai";

export default function ChatMessage({user,msg}){
    const [count,setCount] = useState(0);
    return(
        <div className="ChatMessage-div">
            <div className="ChatMessage-UserInfo-div">
            <div className="ChatMessage-UserIcon">{user[0]}</div>
            <h3>{user}</h3>
            </div>
            <div className="ChatMessage-Message-maindiv">
            <div className="ChatMessage-Message-div">{msg}</div>
            <div 
            style={{color:"#1483fa",cursor:"pointer"}} 
            onClick={()=>setCount(prev=>prev+1)}><AiFillLike /></div>
            <h5>{count}</h5>
            </div>
          </div>
    )
}