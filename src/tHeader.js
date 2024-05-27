export const drawTheader = (rows, values) => {
  const thead = document.querySelector("thead");
  const headerRow = document.createElement("tr");
  rows.map((r) => {
    const cell = document.createElement("th");
    cell.innerHTML = r;
    headerRow.append(cell);
  });
  values.map((v) => {
    const cell = document.createElement("th");
    cell.innerHTML = "Sum of " + v;
    headerRow.append(cell);
  });

  thead.innerHTML = "";
  thead.append(headerRow);
};
