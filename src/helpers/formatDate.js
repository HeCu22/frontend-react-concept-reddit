function formatDate(dayDate) {
    const currentDay = new Date(dayDate * 1000);
    return currentDay.toLocaleDateString('nl-NL', {weekday: 'long',year: "numeric", month: 'long', day: "numeric"});
}

export default formatDate;