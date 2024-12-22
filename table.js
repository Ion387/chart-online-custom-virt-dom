let curDataArr = Object.values(curWeekData[6]);
let yestDataArr = Object.values(curWeekData[5]);
let medDataArr = Object.values(medWeekData);

//Создание заголовка

const containerEl = document.getElementsByClassName("container")[0];
const titleEl = document.createElement("div");
titleEl.appendChild(
  document.createTextNode(`Cегодня: ${curWeekData[6].dayOfWeek}.`)
);
titleEl.appendChild(document.createElement("br"));
titleEl.appendChild(
  document.createTextNode(`Нажмите на строку, чтобы увидеть график за неделю.`)
);
containerEl.prepend(titleEl);
titleEl.classList.add("title");

const tableEl = document.getElementById("table");
for (let i = 0; i < headers.length; i++) {
  const rowEl = document.createElement("div");
  rowEl.classList.add("table-row", "table-row_hovered");
  tableEl.appendChild(rowEl);
  rowEl.setAttribute(
    "onclick",
    `createChart("chart${i}",byPropsDataArray[${i}])`
  );

  const headerEl = document.createElement("div");
  headerEl.appendChild(document.createTextNode(headers[i]));
  headerEl.classList.add("cell", "row-title");
  rowEl.appendChild(headerEl);

  const curentDataEl = document.createElement("div");
  curentDataEl.appendChild(document.createTextNode(addSpaces(curDataArr[i])));
  rowEl.appendChild(curentDataEl);
  curentDataEl.classList.add("cell", "cur-cell");

  const yestDataEl = document.createElement("div");
  yestDataEl.appendChild(document.createTextNode(addSpaces(yestDataArr[i])));
  const percDataEl = document.createElement("div");
  yestDataEl.appendChild(percDataEl);
  percDataEl.appendChild(
    document.createTextNode(
      Math.round(100 * (curDataArr[i] / yestDataArr[i]) - 100) + " %"
    )
  );
  percDataEl.classList.add(
    "perc",
    `${
      curDataArr[i] > yestDataArr[i]
        ? "grow-perc"
        : curDataArr[i] < yestDataArr[i] && "fall-perc"
    }`
  );
  rowEl.appendChild(yestDataEl);
  yestDataEl.classList.add(
    "cell",
    `${
      curDataArr[i] > yestDataArr[i]
        ? "grow"
        : curDataArr[i] < yestDataArr[i] && "fall"
    }`
  );

  const medDataEl = document.createElement("div");
  medDataEl.appendChild(document.createTextNode(addSpaces(medDataArr[i])));
  rowEl.appendChild(medDataEl);
  medDataEl.classList.add(
    "cell",
    `${
      curDataArr[i] > medDataArr[i]
        ? "grow"
        : curDataArr[i] < medDataArr[i] && "fall"
    }`
  );

  const chartPlaceEl = document.createElement("div");
  tableEl.appendChild(chartPlaceEl);
  chartPlaceEl.classList.add("chartMain");
  chartPlaceEl.setAttribute("id", `chart${i}`);
}
