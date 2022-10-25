/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const type = ["heart", "club", "spade", "dimond"];
  const element = document.querySelector(".body");

  let printNumber = number[Math.floor(Math.random() * number.length)];
  let printType = type[Math.floor(Math.random() * type.length)];

  if (printType == "heart" || printType == "dimond")
    element.style.color = "red";
  else element.style.color = "black";

  element.innerHTML = printNumber;
  document.querySelector(".card").className = "card" + " " + printType;
};
