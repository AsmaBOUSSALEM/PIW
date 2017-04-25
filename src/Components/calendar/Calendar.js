/**
 * Created by Asma on 21/03/2017.
 */
import React, { Component } from 'react';
import Month from '../month/Month';

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "month" : 3,
            "year" : 2017
        };
        this.previousMonth = this.previousMonth.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
    }

    previousMonth() {
        this.setState({
            "month" : this.state.month-1
        });
    }

    nextMonth() {
        this.setState({
            "month" : this.state.month+1
        });
    }

    render() {
        return (
            <div className="Calendar">
                <div className="navigation">
                    <button onClick={this.previousMonth}>Previous</button>
                    <button onClick={this.nextMonth}>Next</button>
                </div>
                <Month month={this.state.month} year={this.state.year} />
            </div>
        );
    }
}

export default Calendar;
