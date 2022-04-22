
import React, { useState } from 'react'




export default function Textform(props) {
    const HandleUpClick = () => {
        let NewText = text.toUpperCase();
        setText(NewText);
        console.log("uppercase was clicked")
        props.showAlert(" uppercase operation", "success :")
    };
    const HandlelowClick = () => {
        let NewText = text.toLowerCase();
        setText(NewText);
        console.log("LowerCase was clicked");
        props.showAlert(" LOwerCase operation", "success :")
    };
    const HandleClear = () => {
        let NewText = ("")
        setText(NewText);
        console.log("clear Text was clicked")
    };
    const HandleOnChange = (event) => {
        console.log("onChange was clicked")
        setText(event.target.value)
    };
    const [text, setText] = useState('');

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={HandleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? 'rgb(13 61 108)' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convrt To UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={HandlelowClick}>Convrt To LowerCase</button>
                <button className="btn btn-danger mx-2" onClick={HandleClear}>Clear Text</button>
            </div>
            <div className="container my-3 " style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length - 1} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length}minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter somthing in above box to Preview"}</p>

            </div>
        </>
    )
}
