export const getTimeRemaining = (
    day: number,
    month: number,
    year: number,
) => {
    const target = new Date(year, month - 1, day).getTime()
    const now = Date.now()

    const difference = Math.max(0, target - now)

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        ),
        seconds: Math.floor(
            (difference % (1000 * 60)) / 1000
        ),
    }
}
