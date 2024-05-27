import { data } from "../data";

export const drawFields = () => {
  // add our filter search items
  const filterableItemsContainer = document.querySelector(".fields-container");
  filterableItemsContainer.innerHTML = "";
  const filterableItems = Object.keys(data[0]).map((k) => {
    const div = document.createElement("div");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    const label = document.createElement("label");
    label.append(document.createTextNode(k));
    div.append(checkBox);
    div.append(label);
    filterableItemsContainer.append(div);
  });
};
