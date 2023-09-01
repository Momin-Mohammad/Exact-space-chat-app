import "./SuggestionPopup.css";
const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
export default function SuggestionPopup({msg,setMsg,setSuggestion}){

    const selectUser=(name)=>{
        setMsg(msg+name);
        setSuggestion(false);
    }
    return(
        <div className="Suggestion-Popup-div">
           {
            user_list.map((ele)=>
            <p className="Suggestion-Name-div" onClick={()=>selectUser(ele)}>{ele}</p>
            )
           }
        </div>
    )
}