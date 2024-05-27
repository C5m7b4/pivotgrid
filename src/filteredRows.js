export const drawFilteredRows = (rows) => {
  const filteredRows = document.querySelector("#filtered-rows");
  filteredRows.innerHTML = "";
  rows.map((r) => {
    const div = document.createElement("div");
    div.innerHTML = r;
    filteredRows.append(div);
  });
};
