function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

function parseDate(date) {
    const dateParsed = new Date(date)

    const dateString = `${dateParsed.getFullYear()}-${dateParsed.getMonth()}-${dateParsed.getDay()}`
    return dateString
}


export { millisToMinutesAndSeconds, parseDate }

