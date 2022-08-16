import React from "react";
import '../home/homepage.css'

const Home =()=>{

    return(
        <>
            <h1 className="title">Speech Text Summerization and Data Mining using NLP</h1>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">HomePage</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">AboutProject</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Summerizer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">AboutUs</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
            <marquee> This is our homepage</marquee>
        </>
    )
}

export default Home;