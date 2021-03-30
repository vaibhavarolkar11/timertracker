import React, { Component } from 'react';
import Flight from '../../components/flight';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
class FlightScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            flightList: [],
            error: null,
            startDate: new Date()
        };
    }
    componentDidMount() {
        fetch("https://demo6652418.mockable.io/flight/records")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        flightList: result
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error: 'error found'
                    });
                }
            )
    }

    seStartDate = (date) => {
        this.setState({
            startDate: date
        });
    }

    render() {
        const { isLoaded, flightList, error, startDate } = this.state;
        return (
            <div className="container pt-5 mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="search-form">
                            <div class="form-group">
                                <input type="text" class="form-control" id="origin" placeholder="Enter Origin" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="destination" placeholder="Enter Destination" />
                            </div>
                            <div class="form-group">
                                <DatePicker selected={startDate} onChange={date => this.seStartDate(date)} />
                            </div>
                            <div class="form-group">
                                <select class="form-control" id="passenger">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="form-group text-center">
                                <button className="btn btn-primary">Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="flight-list">
                            {
                                !isLoaded ?
                                    <div>Loading...</div>
                                    :
                                    <div className="channel-list">
                                        {flightList.map((data, idx) => (
                                            <Flight data={data} key={idx} />
                                        ))}
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FlightScreen;