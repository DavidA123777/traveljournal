import React from 'react';
import {Position} from "./Icons"
const Card = (props)=>{



    return (
        <div className="card-container">
            <img src={props.item.imageUrl} className="card-image"alt={props.item.title} />
            <div className="card-right-container">
                <div className="card-top-row">
                    
                    <span className="top-left">
                        <Position />
                        <p className="country">{props.item.location}</p>
                    </span>
                    <a href={props.item.googleMapsUrl} target="_blank" className="maps-link">View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <h4 className="time">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="description">{props.item.description}</p>
            </div>

        </div>

    )
};
export default Card;