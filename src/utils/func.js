export function generateYearsBetween(startYear = 2000, endYear) {
  const endDate = endYear || new Date().getFullYear();
  let years = [];

  for (var i = startYear; i <= endDate; i++) {
    years.push(startYear);
    startYear++;
  }
  return years;
}

function capitalizeFLetter(str) {

    return str[0].toUpperCase() + str.slice(1).toLowerCase()
}


export {capitalizeFLetter}
