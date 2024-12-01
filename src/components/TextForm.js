import React, {useState} from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success")
    }

    const handleLoClick = () =>{
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success")
    }

    const handleClear = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared!", "success")
    }

    const handleCopy = () =>{
        navigator.clipboard.writeText(Text);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!","success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const [Text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={Text} onChange={handleOnChange} id="mybox" rows="8" style={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}}></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 mt-3" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 mt-3" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-2 mt-3" onClick={handleCopy}>Copy text</button>
        <button disabled={Text.length===0} className="btn btn1 mx-2 mt-3" onClick={handleClear}>
            <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" className="icon">
                <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
            </svg>
        </button>
    </div>
    <div className="container my-5" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {Text.length} Characters</p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h1>Preview</h1>
        <p>{Text}</p>
    </div>
    </>
  );
}
