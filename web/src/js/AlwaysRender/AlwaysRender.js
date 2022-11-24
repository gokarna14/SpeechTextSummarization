import React from "react";

import Home from "../home/Home";
import AboutProject from "../AboutProject/AboutProject";
import Summarizer from "../Summarizer/Summarizer";
import AboutUs from "../AboutUs/AboutUs";

const AlwaysRender =()=>{
    return(
        <>
            <h5>This portion will always render...</h5>
            <i>Put the modules below this !</i>

            <hr />
            <Home></Home>
            <hr />
            <AboutProject></AboutProject>
            <hr />
            <Summarizer></Summarizer>
            <hr />
            <AboutUs></AboutUs>
            <hr />


        </>
    )
}

export default AlwaysRender;