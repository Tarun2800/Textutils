import React, { useState } from "react";

export default function Textform(props) {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","primary");
  };
  const handlelowclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase","success");

  };
  const handleclear = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Clear text","danger");

  };
  const handleExtraspace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Remove extraspace","secondary");

  };
  const handleCapti = () => {
    let str = text.charAt(0).toUpperCase() + text.slice(1);
    setText(str);
    props.showAlert("converted to captilized","info");

  };
  const handlesp = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode=== 'dark'?'white':'#042743'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label"
          ></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange} styel={{ backgorund: props.mode === 'dark' ? 'grey' : 'white', color:props.mode==='dark'?'white':'#042743' }}
            id="mybox"
            rows={8}
            defaultValue={""}
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleUpclick}
          
        >
          Convert to UpperCase
        </button>
        <button className="btn btn-success mx-2" onClick={handlelowclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-secondary mx-2" onClick={handleExtraspace}>
          Remove ExtraSpace
        </button>
        <button className="btn btn-info mx-2" onClick={handleCapti}>
          Convert to Captlized
        </button>
        <button className="btn btn-warning mx-2" onClick={handlesp}>
          Speak
        </button>
        <button className="btn btn-danger mx-2" onClick={handleclear}>
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h1>Preview</h1>
        <p>{text.lenght>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}