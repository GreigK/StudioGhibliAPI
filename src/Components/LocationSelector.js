import React from "react";

const LocationSelector = ({locations, onLocationSelected}) =>{

    const sortedLocations = locations.sort((locationa,locationb)=>{

        return (locationa.name > locationb.name)? 1 : -1;
    });


    const locationOptions = sortedLocations.map((location, index) => {
        return <option value={index} key={index}>{location.name}</option>
    })


    const handleChange = function(event){
        const chosenLocation = locations[event.target.value];
        onLocationSelected(chosenLocation)
    }



    return(
        <select defaultValue="" onChange = {handleChange}>
            <option value="" selected>Choose a Location</option>
            {locationOptions}
        </select>
    )
}



export default LocationSelector;