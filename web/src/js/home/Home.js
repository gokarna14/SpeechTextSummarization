import React from "react";
import '../home/homepage.css'

const Home =()=>{

    return(
        <>
<div class="navbar">
  <ul >
    <li><a  href="#homePage" class="active">HomePage</a></li>
    <li ><a href="#aboutProject">AboutProject</a></li>
    <li ><a  href="#summarizer">Summarizer</a></li>
    <li ><a href="#aboutus">AboutUs</a></li>
  </ul>
 </div>
 
 <h1 className="title" id="homePage">Speech Text Summerization and Data Mining using NLP</h1>
            <marquee> This is our homepage</marquee>
            </>
    )
}

export default Home;