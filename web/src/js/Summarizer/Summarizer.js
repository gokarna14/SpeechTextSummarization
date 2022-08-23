import React from "react";
import { useState } from "react";
import './Summarizer.css'
import { Helmet } from 'react-helmet'
//  sudo chmod 777 web   
// ls -la /usr/local/lib/node_modules     


const Summarizer =()=>{

    const [speech, setSpeech] = useState('')

    const speechInput=()=>{
        alert(`The speech you entered is \n ${speech}`)
    }
    
    return(
        <>
        <div className="mac-book-pro141-container">
      <Helmet>
        <title>Use Helmet to set up title</title>
      </Helmet>
      <div className="mac-book-pro141-mac-book-pro141">
        <span className="mac-book-pro141-text">
          <span>Summarization of your speech !</span>
        </span>
        <div className="">
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
        <img
          src="/playground_assets/vector117-94t5b.svg"
          alt="Vector117"
          className="mac-book-pro141-vector1"
        />
        <img
          src="/playground_assets/vector218-su9j.svg"
          alt="Vector218"
          className="mac-book-pro141-vector2"
        />
        <img
          src="/playground_assets/vector319-frq.svg"
          alt="Vector319"
          className="mac-book-pro141-vector3"
        />
      </div>
    </div>
  </>
    )
}


export default Summarizer;