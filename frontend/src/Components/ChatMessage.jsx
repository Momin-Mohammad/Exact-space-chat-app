import './ChatMessage.css'
import {BiSolidUserCircle} from "react-icons/bi";

export default function ChatMessage({user,msg}){
    return(
        <div className="ChatMessage-div">
            <p><BiSolidUserCircle /></p>
            <h3>{user}</h3>
            <p>{msg}</p>
          </div>
    )
}