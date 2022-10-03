import React from "react";
// import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function English() {
  return (
    <div>
      <div className="heading__container__eng__h1">
        <h1 className="eng__h1">Unlimited movies, TV shows and more.</h1>
      </div>
      <h2 className="eng__h2">Watch anywhere. Download anytime.</h2>
      <h3 className="eng__h3">
        Ready to watch? Just click on get startded button & enjoy our free
        services .
      </h3>
      {/* <Button variant="contained" color='error' size="large">Get Started</Button> */}
      <div className="btn__container">
      <Link to="/english-movies">
      <button className="button" style={{ verticalAlign: "middle" }}>
        <span>Get Started</span>
      </button>
      </Link>




      </div>
      {/* <div className="eng__iframe">
      <iframe className="ifrm__eng" width="560" height="315" src="https://www.youtube.com/embed/yhDx81hGbp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="eng__content__container">
      <h1 className="eng__content__h1" > #NetflixForAll | Netflix India</h1>
      <hr className="hr__content" />
      <h2 className="eng__content__h2"> Maar dhaad, pyaar vyaar, thrillers or serial-killers. We’ve got it all!Watch your kind of Netflix. Now on any device at Free of Cost.</h2>
      </div>
      
      </div> */}
    </div>
  );
}

export default English;
