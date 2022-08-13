import React from "react";
import { useState } from "react";
import './Summarizer.css'

const Summarizer =()=>{

    const [speech, setSpeech] = useState('')


    const speechInput=()=>{
        alert(`The speech you entered is \n ${speech}`)
    }

    return(
        <>
        <small><b><i>Created By Gokarna Adhiakri</i></b></small>
    
            <h1>Speech Text Summarization !</h1>
            <div className="niceCentre">
                <div>
                    <textarea   type="textarea" 
                                name="speechText" 
                                id="speechText" 
                                className="bigInput" 
                                title={"Enter the text here ..."}
                                placeholder="Enter your speech here ..."
                                onChange={(e)=>{setSpeech(e.target.value)}}
                    />
                    <hr />
                    <button className="btn btn-outline-danger"
                        onClick={speechInput}
                    >Submit</button>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default Summarizer;
