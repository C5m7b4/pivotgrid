import { data } from "../data";

import { drawTheader } from "./tHeader";
import { drawFilteredRows } from "./filteredRows";
import { drawFilteredValues } from "./filteredValues";
import { drawTbody } from "./tBody";
import { drawFields } from "./fields";

const usedFields = [];
const filters = [];
const columns = [];
const rows = ["Customer"];
const values = ["Rev"];

export const drawPivotTable = () => {
  const table = document.querySelector("table");
  drawTheader(rows, values);
  drawTbody(rows, values);
  drawFields();
  drawFilteredRows(rows);
  drawFilteredValues(values);
};
