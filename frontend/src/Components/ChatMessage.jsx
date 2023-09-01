import './ChatMessage.css'
import {BiSolidUserCircle} from "react-icons/bi";

export default function ChatMessage({user,msg}){
    return(
        <div className="ChatMessage-div">
            <div className="ChatMessage-UserInfo-div">
            <div className="ChatMessage-UserIcon">{user[0]}</div>
            <h3>{user}</h3>
            </div>
            <div className="ChatMessage-Message-div">{msg}</div>
          </div>
    )
}