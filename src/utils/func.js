export function generateYearsBetween(startYear = 2000, endYear) {
    const endDate = endYear || new Date().getFullYear()
    let years = []

    for (let i = startYear; i <= endDate; i++) {
        years.push(startYear)
        startYear++
    }
    return years
}

function capitalizeFLetter(str) {
    if (!str) return

    const sliceStr = str.slice(1)

    return str[0]?.toUpperCase() + sliceStr?.toLowerCase()
}

function filterCurrencies({ currencies = [], str }) {
    return currencies?.data?.filter((curr) => curr.type !== str)
}

function convertNairaToDollar({ amount, exchangeRates, currencyPair }) {
    const rate = exchangeRates?.find((rates) =>
        rates?.currencyPair?.toLowerCase().includes(currencyPair?.toLowerCase())
    )

    const nairaToDollar = amount / rate?.rate

    return Number.isInteger(nairaToDollar) ? nairaToDollar : parseFloat(nairaToDollar.toFixed(3))
}

export { capitalizeFLetter, filterCurrencies, convertNairaToDollar }
