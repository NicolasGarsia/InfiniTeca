import NavB from "../components/NavB";
import "../css/nav.css";
import "../css/home.css";
import Liv from "../components/home1/Livros";
import { React, useState, useEffect } from "react";

export default function Home() {
  const [isLoggedOn, setIsLoggedOn] = useState("default");

  useEffect(() => {
    setIsLoggedOn(sessionStorage.getItem("isLoggedOn"));
  }, []);

  useEffect(() => {
    if (isLoggedOn == "true") {
      return console.log("logado");
    } else if (isLoggedOn == "default") {
      console.log("await");
    } else console.log("Não logado");
  }, [isLoggedOn]);
  return (
    <>
      <NavB User="@Nicolas" />
      <Liv />
    </>
  );
}
