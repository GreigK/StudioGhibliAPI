import React from 'react';
import './ListItem.css';

const ListItem = ({location, onLocationClick}) => {


  const handleClick = () => {
    onLocationClick(location);
  }



  return <li onClick={handleClick}>{location.name}</li>
}

export default ListItem;