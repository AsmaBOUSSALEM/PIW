/**
 * Created by aboussal on 21/03/2017.
 */
import moment from 'moment';

export function initMoment() {
    moment.locale('fr');
}

export function getDaysOfWeeks() {
    return moment.weekdays(true);
}

export function getDaysInMonth(month, year) {
    console.log("getDaysInMonth", month, year);
    let realMonth = month - 1;
    let date = new Date(year, realMonth, 1);
    let days = [];
    let daysOfWeeks = getDaysOfWeeks();

    while (date.getMonth() === realMonth) {
        let clone = new Date(date);
        let mom = moment(clone);
        let idDay = mom.format("DDMMYYYY");
        let labelDay = mom.format("dddd D MMMM YYYY");
        let currentDay = mom.format("dddd");
        let dateOfMonth = mom.date();
        days.push({ "idDay": idDay, "day": currentDay, "date": clone,
            "dateOfMonth" : dateOfMonth, "dayOfWeek" : mom.isoWeekday(),
            "labelDay" : labelDay });
        date.setDate(date.getDate() + 1);
    }

    return days;
};
