import './App.css';
import { useState } from 'react';
import MessageForm from './Components/MessageForm';

const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
function App() {
  const[chat,setChat] = useState([]);
  const [msg,setMsg] = useState("");
 
  const sendMsg=(e)=>{
    e.preventDefault();
    let newMsg = {
      user : user_list[Math.floor(Math.random()*5)],
      msg : msg
    }
    setChat([...chat,newMsg])
}
  return (
    <div className="App">
      <div>
        {
          chat?.map((ele)=>
          <div>
            <h3>{ele.user}</h3>
            <p>{ele.msg}</p>
          </div>
          )
        }
      </div>
      <MessageForm 
      setMsg = {setMsg}
      sendMsg={sendMsg} />
    </div> 
  );
}

export default App;
