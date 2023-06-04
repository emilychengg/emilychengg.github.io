import React, { Component } from "react";
import "./Timeline.css"

import timelineData from './timelineData';
import TimelineItem from './TimelineItem';

class Timeline extends Component {
    componentDidMount() {
        document.title = "Emily Cheng > Timeline"
    }

    render() {
        return(
            timelineData.length > 0 && (
                <div className="timeline-container">
                    {timelineData.map((data, idx) => (
                        <TimelineItem data={data} key={idx} />
                    ))}
            <p className = "temp"> Thank you to Florin Pop. </p>
                </div>
            ))
    }
}

export default Timeline;

/* 
const Timeline = () =>
    timelineData.length > 0 && (
        <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
            <p className = "temp"> Under Construction ... Stay Tuned! </p>
        </div>
 
    );

export default Timeline */