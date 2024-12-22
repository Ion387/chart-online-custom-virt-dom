const curWeekData = [
  {
    profit: 220000,
    cash: 100000,
    cashless: 120000,
    creditCard: 7000,
    chequeMed: 1600,
    guestMed: 1200,
    delFromCheque: 400,
    delFromChequeBefore: 350,
    chequeNum: 9,
    guestNum: 6,
    dayOfWeek: "понедельник",
  },
  {
    profit: 230000,
    cash: 90000,
    cashless: 140000,
    creditCard: 10000,
    chequeMed: 1300,
    guestMed: 1200,
    delFromCheque: 200,
    delFromChequeBefore: 100,
    chequeNum: 13,
    guestNum: 9,
    dayOfWeek: "вторник",
  },
  {
    profit: 260000,
    cash: 130000,
    cashless: 130000,
    creditCard: 9000,
    chequeMed: 1300,
    guestMed: 1300,
    delFromCheque: 300,
    delFromChequeBefore: 150,
    chequeNum: 12,
    guestNum: 8,
    dayOfWeek: "среда",
  },
  {
    profit: 260000,
    cash: 70000,
    cashless: 190000,
    creditCard: 11000,
    chequeMed: 1400,
    guestMed: 1100,
    delFromCheque: 400,
    delFromChequeBefore: 350,
    chequeNum: 12,
    guestNum: 6,
    dayOfWeek: "четверг",
  },
  {
    profit: 150000,
    cash: 80000,
    cashless: 70000,
    creditCard: 10000,
    chequeMed: 1400,
    guestMed: 1200,
    delFromCheque: 500,
    delFromChequeBefore: 450,
    chequeNum: 11,
    guestNum: 7,
    dayOfWeek: "пятница",
  },
  {
    profit: 200000,
    cash: 110000,
    cashless: 90000,
    creditCard: 11000,
    chequeMed: 1800,
    guestMed: 1200,
    delFromCheque: 200,
    delFromChequeBefore: 100,
    chequeNum: 15,
    guestNum: 8,
    dayOfWeek: "суббота",
  },
  {
    profit: 230000,
    cash: 130000,
    cashless: 100000,
    creditCard: 13000,
    chequeMed: 1400,
    guestMed: 1400,
    delFromCheque: 200,
    delFromChequeBefore: 150,
    chequeNum: 9,
    guestNum: 8,
    dayOfWeek: "воскресенье",
  },
];

const headers = [
  "Выручка",
  "Наличные",
  "Безналичный расчет",
  "Кредитные карты",
  "Средний чек, руб.",
  "Средний гость, руб.",
  "Удаление из чека после оплаты, руб.",
  "Удаление из чека до оплаты, руб.",
  "Количество чеков",
  "Количество гостей",
];

const medWeekData = {
  profit: 220000,
  cash: 110000,
  cashless: 100000,
  creditCard: 16000,
  chequeMed: 1400,
  guestMed: 1400,
  delFromCheque: 100,
  delFromChequeBefore: 170,
  chequeNum: 9,
  guestNum: 6,
  dayOfWeek: "воскресенье",
};

// Создание массива byPropsDataArray удобного, для отображения на графике.
const byPropsDataArray = headers.map((i, index) => {
  return { name: i };
});

const weekDays = ["mon", "tus", "wed", "thu", "fri", "sut", "sun"];

for (let mainI = 0; mainI < headers.length; mainI++) {
  for (let indx = 0; indx < 7; indx++) {
    byPropsDataArray[mainI] = {
      ...byPropsDataArray[mainI],
      [weekDays[indx]]: Object.values(curWeekData[indx])[mainI],
    };
  }
}

//Функция добавления пробелов между 3-мя цифрами
const addSpaces = (num) =>
  num
    .toString()
    .split(/(?=(?:\d{3})+(?!\d))/)
    .join(" ");
