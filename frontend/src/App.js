import './App.css';
import { useState } from 'react';
import MessageForm from './Components/MessageForm';
import ChatMessage from './Components/ChatMessage';
import SuggestionPopup from './Components/SuggestionPopup';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
function App() {
  const[chat,setChat] = useState([]);
  const [msg,setMsg] = useState("");
  const[suggestion,setSuggestion] = useState(false);
 
  const sendMsg=(e)=>{
    e.preventDefault();
    let newMsg = {
      user : user_list[Math.floor(Math.random()*5)],
      msg : msg
    }
    setChat([...chat,newMsg]);
    setMsg("");
    let element = document.getElementById("element");
    element.scrollTo(0,element.scrollHeight)
}
  return (
    <div className="App">
      <div id="element" className="ChatMessage-Main-div">
        {
          chat?.map((ele,index)=>
          <div key={index}>
          <ChatMessage
          user = {ele.user}
          msg = {ele.msg}
           />
           </div>
          )
        }
      </div>
      {
      suggestion?
      <SuggestionPopup 
      msg={msg}
      setMsg={setMsg}
      setSuggestion={setSuggestion}/> : null
      }
      <MessageForm 
      setSuggestion = {setSuggestion}
      msg = {msg}
      setMsg = {setMsg}
      sendMsg={sendMsg} />
    </div> 
  );
}

export default App;
