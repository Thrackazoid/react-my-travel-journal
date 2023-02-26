import React from 'react'

export default function Card(props) {
    return (
        <div className="card--container">
            <img className="card--img" src={props.imageUrl}/>
            <div className="text--div">
            <span className="location--span"><img src='./images/location.png'/> {props.location}  <a href={props.googleMapsUrl}>View on Google Maps</a></span>
                <h2>{props.title}</h2>
                <p className='date--p'>{props.startDate + ' ' + '-' + ' ' + props.endDate}</p>
                <p className='description--p'>{props.description}</p>
            </div>
        </div>
    )
}