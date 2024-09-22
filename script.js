"use strict";

const calcContainer = document.querySelector(".clc-box");
const btnCalc = document.querySelector(".btn-calc");
const btnClear = document.querySelector(".btn-clear");
calcContainer.insertAdjacentHTML(
  "afterbegin",
  `<div class="item-box">
            <p class="item-name">Price</p>
            <input type="number" class="amount"></div>
          <div class="item-box">
            <p class="item-name">Percentage</p>
            <input type="number" class="Percentage"></div>
          <div class="item-box">
            <p class="item-name">Result</p>
            <input type="number" class="result" readonly></div>
            `
);

btnCalc.addEventListener("click", function () {
  const amount = Number(document.querySelector(".amount").value);
  const percentage = Number(document.querySelector(".Percentage").value);
  const tip = amount * (percentage / 100);
  console.log(tip);
  const totalAmount = amount + tip;
  document.querySelector(".result").value = Math.trunc(totalAmount);
});

btnClear.addEventListener("click", function () {
  document.querySelector(".amount").value = "";
  document.querySelector(".Percentage").value = "";
  document.querySelector(".result").value = "";
});
