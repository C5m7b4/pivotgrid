export const generateAggregatSelector = (parent) => {
  const options = [
    {
      fn: "arrSum",
      label: "Sum",
    },
    {
      fn: "arrCount",
      label: "Count",
    },
    {
      fn: "arrAvg",
      label: "Avg",
    },
  ];

  const select = document.createElement("select");
  options.map((o) => {
    const option = document.createElement("option");
    option.innerHTML = o.label;
    option.value = o.fn;
    select.append(option);
  });
  parent.append(select);
};
