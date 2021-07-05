import React from "react";

export default function OldNasaPhoto(props) {
  return (
    <div>
      <h1>{props.oldNasaPhoto.title}</h1>
      <p>Date: {props.oldNasaPhoto.date}</p>
      <p>{props.oldNasaPhoto.explanation}</p>
      <iframe
        width="1100"
        height="700"
        src={props.oldNasaPhoto.url}
        frameBorder="0"
        accelerometer="true"
        autoPlay
        clipboard-write="true"
        encrypted-media="true"
        gyroscope="true"
        picture-in-picture="true"
        allowFullScreen
      ></iframe>
      <p>Service version: {props.oldNasaPhoto.service_version}</p>
    </div>
  );
}
