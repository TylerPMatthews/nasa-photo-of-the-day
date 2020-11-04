import React from "react";

export default function OldNasaPhoto(props) {
  return (
    <div>
      <h1>{props.oldNasaPhoto.title}</h1>
      <p>Date: {props.oldNasaPhoto.date}</p>
      <p>{props.oldNasaPhoto.explanation}</p>
      <img src={props.oldNasaPhoto.url} alt="Nasa Image of the day" />
      <p>Service version: {props.oldNasaPhoto.service_version}</p>
    </div>
  );
}
