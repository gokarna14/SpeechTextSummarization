import React from "react";
import abhay from "../AboutUs/files/abhay.jpg"
import style from './files/custom.css'
import silence from "../AboutUs/files/silence.jpg"
import gokarna from "../AboutUs/files/gokarna.jpg"
import kshitiz from "../AboutUs/files/kshitiz.jpg"
const AboutUs =()=>{

    return(
        <>
           <div>
            <img id ='img1' src= {abhay} style={{style}}/>
            <img id = 'img1'src= {silence} style={{style}}/>
            <img id='ktaru' src= {kshitiz} style={{style}} />
            <img id='ktaru' src= {gokarna} style={{style}} />
           </div>

        </>
    )

}

export default AboutUs;
