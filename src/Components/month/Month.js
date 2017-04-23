/**
 * Created by Asma on 21/03/2017.
 */
import React, { Component } from 'react';
import './Month.css';
import {getDaysInMonth} from '../../Tools/Calendar';
import {getDaysOfWeeks} from '../../Tools/Calendar';

class Month extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           "month": props.month
        };
    }

    render() {
        let days = getDaysInMonth(this.props.month, this.props.year);
        let monthHtml = [];

        let daysOfWeek = getDaysOfWeeks();
        for (let i = 0; i < daysOfWeek.length; i++) {
            if (days[0].day === daysOfWeek[i]) {
                break;
            } else {
                monthHtml.push(<div className="empty"> </div> );
            }
        }

        for (let i = 0; i < days.length; i++) {
            monthHtml.push(<div className="day"> {days[i].labelDay } </div> );
        }

        for (let i = daysOfWeek.length -1; i > 0; i--) {
            if (days[days.length - 1].day === daysOfWeek[i]) {
                break;
            } else {
                monthHtml.push(<div className="empty"> </div> );
            }
        }

        return (
            <div className="month">
                {monthHtml}
            </div>
        );
    }
}

export default Month;
