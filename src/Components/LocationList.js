import React from "react";
import ListItem from './ListItem'


const LocationList=({locations, onLocationClick}) => {

    const locationsItems = locations.map((location,index)=>{
        return <ListItem location={location} key = {index} onLocationClick={onLocationClick}/>
    })

    return(
        <div>
            <ul>
                {locationsItems}
            </ul>

        </div>


    )

}






export default LocationList;