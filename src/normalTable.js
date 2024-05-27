import { data } from "../data";

export const drawNormalTable = () => {
  const table = document.querySelector("table");
  const thead = document.querySelector("thead");
  const tbody = document.querySelector("tbody");

  const headerRow = document.createElement("tr");

  // create out header first
  Object.keys(data[0]).map((key) => {
    const cell = document.createElement("th");

    cell.innerHTML = key;
    headerRow.append(cell);
  });

  thead.innerHTML = "";
  thead.append(headerRow);

  tbody.innerHTML = "";
  const bodyRows = data.map((r) => {
    const row = document.createElement("tr");
    Object.values(r).map((v) => {
      const cell = document.createElement("td");
      cell.innerHTML = v;
      row.append(cell);
    });
    tbody.append(row);
  });
};
