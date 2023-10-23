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

export { capitalizeFLetter }
