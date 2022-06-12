import React,{useState} from 'react'

export default function TextForm(props) {

  const [text , setText]=useState('') ;

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
  }
const handleCopyText=()=>{
   var text = document.getElementById("myBox");
   text.select();
   text.setSelectionRange(0,9999);
   navigator.clipboard.writeText(text.value);
}
  const handleOnChange = (e)=>{
    setText(e.target.value);
  }

  // const [text , setText]=useState('') ;
  return (
    <>
    <div> 
    <h1>{props.heading}</h1>
      <div className="mb-3">
         
         <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
    </div>

    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length } words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes of read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
