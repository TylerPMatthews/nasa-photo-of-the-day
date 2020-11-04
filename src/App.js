import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_LINK } from "./constants/index";
import NasaPhoto from "./components/NasaPhoto";
import oldNasaPhoto from "./components/OldNasaPhoto";
import OldNasaPhoto from "./components/OldNasaPhoto";

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
    <div className="App">
      <h2>Nasa Photo Of The Day!</h2>
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
    </div>
  );
}

export default App;
