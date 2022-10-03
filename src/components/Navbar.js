import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="btn">
        {/* <select>
          <option>
            <Link to="/">English</Link>
          </option>

          <option>
            <Link to="/hindi">हिन्दी</Link>
          </option>
        </select> */}
        <span style={{paddingRight: "20px"}}>  <Link to="/">English</Link></span>
        <span style={{color: "white"}}><Link to="/hindi">हिन्दी</Link></span>
      </div>
      <div className="netflix__logo">
        <img className="logo__img" src="./netflixlogo.png" alt="logo" />
      </div>
    </>
  );
}

export default Navbar;
