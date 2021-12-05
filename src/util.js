export function getCurrentWeek () {
    const currentDate = new Date();
    let firstday = new Date(currentDate.setDate(currentDate.getDate() - currentDate.getDay())).toUTCString();

    let week = {}
    for(let i = 0; i < 7; i++) {
        let newDate = new Date(firstday);
        newDate.setDate(newDate.getDate() + i + 1);
        week[i] = newDate;
    }

    return week;
}

