import { useState } from "react";
import thala from "./thala.mp3"
import "./style.css"
function App() {
  const mp3 = new Audio(thala)
  const bimg = document.getElementsByClassName("b-img")[0]
  const options = document.getElementsByClassName("options")
  const [invputval,setValue] = useState("");
  let result_text = document.getElementById("result-text");
  const handleOnChange = (e)=>{
  setValue(e.target.value)
  }

  const handleOnclick = ()=>{
    let sum = 0
    for(let i =0;i<invputval.length;i++)
    {
      sum = sum + parseInt(invputval[i])
    }
    
    if(invputval === "7")
    {
      result_text.innerHTML="THALA FOR A REASON"
      result_text.style.color="black"
      mp3.play();
      options[0].style.display="flex";
      bimg.style.opacity="1"
      setTimeout(()=>{
        bimg.style.backgroundImage="url('url(http://localhost:3000/static/media/thala.ae8b5605a34cfbaa0ae1.jpg)')"  
      },5000)
    }

    else if(invputval.length === 7)
    {
      mp3.play();
    }

    else if(sum === 7)
    {
      mp3.play();
    }
    else{
      
    }
  }

  return (
    <>
    <div className="main-container">
        <div className="header">Thala</div>
        <div className="input-submit-btn">
            <input placeholder="type a word" id="inputvalue" value={invputval} onChange={(e)=>{handleOnChange(e)}}  /><button onClick={()=>{handleOnclick()}}>Check</button>
        </div>
        <div className="result">
            <h2 id="result-text"></h2>
        </div>
        <div className="options">
            <button>Share</button> <button>Reset</button>
        </div>
        <div className="b-img">
        </div>
    </div>
    </>
    );
}

export default App;
