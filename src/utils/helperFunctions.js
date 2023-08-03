export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const allMonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const formatDate = (date, name) => {
  const d = date ? new Date(date) : new Date();
  const year = d.getFullYear();
  let day = d.getDate();
  let monthNo = d.getMonth() + 1
  monthNo = monthNo <= 9 ? "0" + String(monthNo) : monthNo
  day = day <= 9 ? "0" + String(day) : day
  const monthName = months[d.getMonth()];
  const formatted = name ? `${date} ${monthName}, ${year}` : monthNo + "/" + day + "/" + year;
  return formatted;
};


export const padToLength = function (d, length) {
  return d.toString().padStart(length || 2, "0");
};

export const setDateTime = function (date, time) {
  date = date ? new Date(date) : new Date();
  const times = time.split(":");
  date.setHours(times[0] || 0, times[1] || 0, times[2] || 0, times[3] || 0);
  return date;
};

export const getFirstDayOfWeek = function (date) {
  // first day is Monday
  const newDate = new Date(date);
  const day = newDate.getDay(),
    diff = newDate.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(newDate.setDate(diff));
};

export const getYesterday = function () {
  const yesterday = new Date();
  yesterday.setDate(new Date().getDate() - 1);
  return yesterday;
};

export const getCurrentYear = function (date) {
  const newDate = date ? new Date(date) : new Date();
  let year = newDate.getFullYear()

  return year
}

export const getNextDay = function (date) {
  const tomorrow = new Date(date);
  tomorrow.setDate(new Date(date).getDate() + 1);
  return tomorrow;
};

export const getDayStart = function (date) {
  date = date ? new Date(date) : new Date();
  return setDateTime(date, "00:00:00:000");
};

export const getDayEnd = function (date) {
  date = date ? new Date(date) : new Date();
  return setDateTime(date, "23:59:59:999");
};

export const getWeekAgo = function (date) {
  date = date ? new Date(date) : new Date();
  date.setDate(date.getDate() - 7);
  return date;
};

export const getMonthAgo = function (date) {
  date = date ? new Date(date) : new Date();
  date.setMonth(date.getMonth() - 1);
  return date;
};
export const getMonthStart = function (date) {
  date = date ? new Date(date) : new Date();
  return new Date(date.getFullYear(), date.getMonth(), 1);
};
export const getMonthEnd = function (date) {
  date = date ? new Date(date) : new Date();
  return new Date(date.getFullYear(), date.getMonth() + 1, 0);
};

export const daysToMonthEnd = function (day) {
  day = day ? new Date(day) : new Date();
  return (
    getMonthEnd(day).getDate() -
    new Date(day.getFullYear(), day.getMonth(), day.getDate()).getDate()
  );
};

export const getDaysBetween = function (from, to) {
  from = from ? new Date(from) : new Date();
  to = to ? new Date(to) : new Date();
  return (to - from) / (1000 * 60 * 60 * 24);
};

export const getMonthName = function (date = new Date()) {
  return allMonth[new Date(date).getMonth()];
};

export const isSameMonth = function (value, compare) {
  value = value ? new Date(value) : new Date();
  compare = compare ? new Date(compare) : new Date();
  return (
    value.getMonth() === compare.getMonth() &&
    value.getFullYear() === compare.getFullYear()
  );
};

export const isRangeThisMonth = function (rangeFrom, rangeTo) {
  return isSameMonth(rangeFrom, rangeTo) && isSameMonth(rangeFrom);
};

export const PrintRange = function (from, to) {
  from = from ? new Date(from) : new Date();
  to = to ? new Date(to) : new Date();
  const today = new Date();
  const lastMonth = new Date();
  lastMonth.setMonth(new Date().getMonth() - 1);
  if (isSameMonth(today, from) && isSameMonth(today, to)) {
    return "THIS MONTH";
  } else if (isSameMonth(lastMonth, from) && isSameMonth(lastMonth, to)) {
    return "LAST MONTH";
  } else if (isSameMonth(from, to)) {
    return `${getMonthName(from)} ${from.getFullYear()}`;
  } else {
    return `${getMonthName(from)} ${from.getFullYear()} - ${getMonthName(
      to
    )} ${to.getFullYear()}`;
  }
};

export const ParseDate = function (
  date,
  { separator, prepareDate, dMY = false, iso = false }
) {
  date = date ? new Date(date) : new Date();
  date = prepareDate ? prepareDate(date) : date;
  return `${!!dMY ? padToLength(date.getDate()) : date.getFullYear()}${separator || " "
    }${padToLength(!!iso ? date.getMonth() + 1 : date.getMonth())}${separator || " "
    }${!!dMY ? date.getFullYear() : padToLength(date.getDate())}`;
};

export const PrintDate = function (
  date,
  { showDay, forceDate, localeDate, isoDate = false, dMY, separator } = {}
) {
  date = date ? new Date(date) : new Date();
  const today = new Date();
  const yesterday = getYesterday();

  if (!!isoDate) {
    return ParseDate(date, { separator, dMY, iso: true });
  } else if (
    !forceDate &&
    date.toDateString().toLowerCase() === today.toDateString().toLowerCase()
  ) {
    return "TODAY";
  } else if (
    !forceDate &&
    date.toDateString().toLowerCase() === yesterday.toDateString().toLowerCase()
  ) {
    return "YESTERDAY";
  } else if (!!localeDate) {
    return date.toLocaleDateString();
  } else {
    return `${showDay ? `${Days[date.getDay()].substring(0, 3)} , ` : ""
      }${date.getDate()} ${getMonthName(date)}${!showDay ? "," : ""
      } ${date.getFullYear()}`;
  }
};

export const PrintTime = function (date, { localeDate } = {}) {
  date = date ? new Date(date) : new Date();
  const am = date.getHours() > 11 ? "pm" : "am";
  const isTwelve =
    date.getHours() === 12 || Math.abs(date.getHours() - 12) === 12;

  if (!!localeDate) {
    return date.toLocaleTimeString();
  }

  return `${padToLength(
    isTwelve ? 12 : am === "am" ? date.getHours() : date.getHours() - 12
  )}:${padToLength(date.getMinutes())}${am}`;
};

export const getWeekRange = function (day, fullWeek) {
  day = day ? new Date(day) : new Date();
  const firstWeekDay = getFirstDayOfWeek(day);
  const daysInWeek = [];

  // get date values for each day of the week
  const daysToWatch = fullWeek ? 7 : 5;
  for (let i = 0; i < daysToWatch; i++) {
    if (i === 0) {
      daysInWeek.push(getDayStart(firstWeekDay).toString());
    } else {
      daysInWeek.push(getDayStart(getNextDay(daysInWeek[i - 1])).toString());
    }
  }
  return daysInWeek;
};

export const sortDatesList = function (dates = [], ascending = true) {
  return dates.sort((a, b) =>
    !ascending
      ? new Date(b).getTime() - new Date(a).getTime()
      : new Date(a).getTime() - new Date(b).getTime()
  );
};

export const formatMoney = (
  amount,
  decimalCount = 2,
  decimal = ".",
  thousands = ","
) => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    const negativeSign = amount < 0 ? "-" : "";
    let i = parseInt(
      (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
    ).toString();
    let j = i.length > 3 ? i.length % 3 : 0;
    return (
      negativeSign +
      (j ? i.substr(0, j) + thousands : "") +
      i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
      (decimalCount
        ? decimal +
        Math.abs(amount - i)
          .toFixed(decimalCount)
          .slice(2)
        : ""
      ).replace(/\.00$/, "")
    );
  } catch (e) { }
};
