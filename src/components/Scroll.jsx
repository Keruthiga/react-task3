import React from "react";
import "./Scroll.css";
function Scroll() {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <h4 style={{ textTransform: "capitalize", textAlign: "center" }}>
          Tourist places to Tamilnadu
          <br />
          Here are the top places to visit in tamilnadu in 2023
        </h4>
        <div className="row">
          <div className="col-12 city-routing">
            <a href="#chennai">Chennai</a>
            <a href="#kodaikanal">Kodaikanal</a>
            <a href="#madurai">Madurai</a>
            <a href="#kumbaKonam">KumbaKonam</a>
            <a href="#theni">Theni</a>
            <a href="#rameshwaram">Rameshwaram</a>
            <a href="#ooty">Ooty</a>
            <a href="#kanyakumari">Kanyakumari</a>
            <a href="#yercaud">Yercaud</a>
            <a href="#hogenakkal">Hogenakkal</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Scroll;