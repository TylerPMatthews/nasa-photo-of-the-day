import React from "react";
//component takes in the axios request as props to then render to the page on App
export default function NasaPhoto(props) {
  return (
    <div>
      <h1>{props.nasaPhoto.title}</h1>
      <p>Date: {props.nasaPhoto.date}</p>
      <p>{props.nasaPhoto.explanation}</p>
      <img src={props.nasaPhoto.url} alt="Nasa Image of the day" />
      <p>Service version: {props.nasaPhoto.service_version}</p>
    </div>
  );
}
