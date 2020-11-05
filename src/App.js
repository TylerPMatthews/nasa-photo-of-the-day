import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_LINK } from "./constants/index";
import NasaPhoto from "./components/NasaPhoto";
import OldNasaPhoto from "./components/OldNasaPhoto";
import styled from "styled-components";

const StyledApp = styled.div`
h2{
  position: relative;
  font-family: sans-serif;
  text-transform: uppercase;
  font-size: 2em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
}

@keyframes animate {
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
}
}
p{
  margin-right:25%;
  margin-left:25%;

}

button{
  margin-bottom:5%;
}






`;
function App() {
  //set initilal state of the Nasa photo
  const [nasaPhoto, setNasaPhoto] = useState(true);
  const [oldNasaPhoto, setOldNasaPhoto] = useState(true);
  //grab data from Nasa API
  useEffect(() => {
    axios
      //API_LINK can be found in constants/index.js
      .get(`${API_LINK}`)
      .then((res) => {
        const apiData = res.data;
        setNasaPhoto(apiData);
      })
      .catch((err) => {
        console.log("Axios error has occured");
      });
  }, []);
  //Grabs yesterdays Nasa photo of the day API
  useEffect(() => {
    axios
      .get(`${API_LINK}&date=2020-11-03`)
      .then((res) => {
        const oldApiData = res.data;
        console.log(oldApiData);
        setOldNasaPhoto(oldApiData);
      })
      .catch((err) => {
        console.log("axios error");
      });
  }, []);
  //constants used for toggles
  const firstNasa = document.querySelector(".nasa");
  const oldNasa = document.querySelector(".oldnasa");
  const yButton = document.querySelector("button");
  const mainTitle = document.querySelector("h2");
  //toggles the h1 to show yesterday and today h1
  function h1Toggle() {
    if (mainTitle.innerHTML === "Nasa Photo Of The Day!") {
      mainTitle.innerHTML = "Yesterdays Nasa Photo Of the Day!";
    } else {
      mainTitle.innerHTML = "Nasa Photo Of The Day!";
    }
  }
  //toggles button text to show either yesterday or today
  function buttonToggle() {
    if (yButton.innerHTML === "Today") {
      yButton.innerHTML = "Yesterday";
    } else {
      yButton.innerHTML = "Today";
    }
  }

  return (
    <StyledApp className="App">
      <h2>Nasa Photo Of The Day!</h2>
      <div className='box'> 
        <div className='inner'>
          <span>
        NASA
          </span>
        </div>
        <div className='inner'>
          <span>
          NASA
          </span>
        </div>
      </div>
      <div className="nasa">
        <NasaPhoto nasaPhoto={nasaPhoto} />
      </div>
      <div className="hide oldnasa">
        <OldNasaPhoto oldNasaPhoto={oldNasaPhoto} />
      </div>
      <button
        //this is where my toggles are fired
        onClick={(event) => {
          firstNasa.classList.toggle("hide");
          oldNasa.classList.toggle("hide");
          h1Toggle();
          buttonToggle();
        }}
      >
        Yesterday
      </button>
    </StyledApp>
  );
}

export default App;
