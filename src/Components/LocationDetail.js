import React from "react";

const LocationDetail = ({location}) => {

    
    return (
        <div>
            <img id="image" src="http://orig06.deviantart.net/a073/f/2012/108/5/9/laputa_castle_in_the_sky_by_liuxiaofei-d4vavze.png" alt="Castle In The Sky"></img>
            <h3>{location.name}</h3>
            <p>Height: {location.name}</p>
            <p>Region: {location.climate}</p>
            <p>Meaning: {location.terrain}</p>
        </div>
    )
}



export default LocationDetail;