import React from "react";
import { Link } from "react-router-dom";
function Hindi() {
  return (
    <>
      <div className="heading__container__hindi">
      <h1 className="hindi__h1">अनलिमिटेड फ़िल्में, टीवी शो और बहुत कुछ.</h1>
      </div>
      <h2 className="hindi__h2">जहां चाहें देखें. जब चाहें डाउनलोड करें.</h2>
      <div className="h3__div">
      <h3 className="hindi__h3">देखने के लिए तैयार हैं? बस गेट स्टार्टेड बटन पर क्लिक करें और हमारी मुफ्त सेवाओं का आनंद लें।</h3>
      </div>
      <div className="btn__container">
      <Link to="/hindi-movies">
      <button className="button" style={{ verticalAlign: "middle" }}>
        <span>शुरू करें</span>
      </button>
      </Link >
      </div>
    </>
  );
}

export default Hindi;
