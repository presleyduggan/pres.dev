import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Home.css";
import Bio from "../components/home/Bio.jsx";
import BioMobile from "../components/home/BioMobile.jsx";

function Home() {
  const [mobileWidth, setmobileWidth] = useState(isMobile());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    //console.log("width = "+width+" and height="+height);

    return width;
  }

  function isMobile() {
    let width = getWindowDimensions();
    //console.log("Width = "+width);
    if (width < 420) {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    function handleResize() {
      //setmobileWidth(isMobile(getWindowDimensions()));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = "pres.dev";
  }, []);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  function getBio(isMobile) {
    if (isMobile) {
      //console.log(isMobile);
      return <BioMobile />;
    } else {
      return <Bio />;
    }
  }

  return (
    <div style={{ backgroundColor: "beige" }}>
      <div className="min-h-screen">
        {getBio(mobileWidth)}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
