import { unique } from "./unique";
import { Box } from "./box";
import { sort } from "./sort";
import { data } from "../data";
import { arrSum, arrCount, arrAvg } from "./arrayUtils";

export const drawTbody = (rows, values) => {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  /// combine all possible cominations and remove duplicates
  const allPossibleColumnCombinations = [...rows, ...values];

  rows.map((rowDescription) => {
    const filteredData = Box(data)
      .map((x) => unique(x, rowDescription))
      .map((x) => sort(x, rowDescription))
      .fold((x) => x);
    filteredData.map((record, i) => {
      const row = document.createElement("tr");
      Object.keys(record).map((k) => {
        if (k === rowDescription) {
          const cell = document.createElement("td");
          cell.innerHTML = record[k];
          row.append(cell);
        }
      });
      values.map((v) => {
        const cell = document.createElement("td");
        const sumOfCell = arrAvg(
          data,
          rowDescription,
          record[rowDescription],
          v
        );
        cell.innerHTML = sumOfCell;
        row.append(cell);
      });
      tbody.append(row);
    });
  });
};
