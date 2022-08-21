import React, { useEffect, useState } from "react";
import LocationSelector from "../Components/LocationSelector";
import LocationDetail from "../Components/LocationDetail";
import './container.css'; 

const LocationContainer = () => {

    const [locations, setLocations] = useState ([])
    const [selectedLocation, setSelectedLocation] = useState(null)


    useEffect(() => {
        getLocations ();
    }, [])

    const onLocationSelected = (location) => {
        setSelectedLocation(location)
    };


    const getLocations = function(){
        fetch('https://ghibliapi.herokuapp.com/locations/')
        .then(res => res.json())
        .then(locationlog => setLocations(locationlog))
    }


    return(
        <div className="body">
            <h1 id="title" class="text-center">Studio Ghibli</h1>
            <p class="text-center">A tribute page to the lengendary Japanese animation film studio.</p>
            <LocationSelector locations={locations} onLocationSelected={onLocationSelected} />
            {selectedLocation? <LocationDetail location={selectedLocation}/> : null}
        </div>
    )
};


export default LocationContainer;