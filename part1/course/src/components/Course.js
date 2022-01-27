import React from "react";
import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

export default function Course({ course }) {
  return (
    <>
      <Header name={course.name}></Header>
      <Content parts={course.parts}></Content>
      <Total parts={course.parts}></Total>
    </>
  );
}
