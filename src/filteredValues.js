import { generateAggregatSelector } from "./aggregateSelector";

export const drawFilteredValues = (values) => {
  const filteredValues = document.querySelector("#filter-values");
  filteredValues.innerHTML = "";
  values.map((r) => {
    const div = document.createElement("div");
    div.style.display = "grid";
    div.style.gridTemplateColumns = "1fr 1fr";
    const span = document.createElement("span");
    span.innerHTML = r;
    div.append(span);

    const span1 = document.createElement("span");
    span1.innerHtml = generateAggregatSelector(span1);
    div.append(span1);

    filteredValues.append(div);
  });
};
