import React from "react";
import Skills from "./Skills";

export default function Fskiils() {
  const skills = [
    ["HTML", 10],
    ["HTML", 10],
    ["HTML", 10],
    ["CSS", 9],
    ["CSS", 9],
    ["CSS", 9],
    ["JS", 8],
    ["React", 7],
  ];
  return (
    <>
    <Skills skills={skills}/>
    </>
  );
}
