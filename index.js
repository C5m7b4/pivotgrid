import { data } from "./data";
import { drawNormalTable } from "./src/normalTable";
import { drawPivotTable } from "./src/pivotTable";
import { arrSum } from "./src/arrayUtils";

let usePivot = true;

const arrSumButton = document.getElementById("arrsum");
arrSumButton.addEventListener("click", () => {
  const sum = arrSum(data, "Customer", 1, "Rev");
  console.log("sum", sum);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("ready");

  const pivotButton = document.querySelector("#btnPivot");
  pivotButton.addEventListener("click", () => {
    usePivot = !usePivot;
    drawTable();
  });
});

const drawTable = () => {
  const configurator = document.querySelector(".configurator");
  usePivot
    ? (configurator.style.display = "block")
    : (configurator.style.display = "none");
  usePivot ? drawPivotTable() : drawNormalTable();
};

drawTable();
