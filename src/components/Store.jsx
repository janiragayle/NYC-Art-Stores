import React from 'react';

const Store = ({image, name, description, address, hours, website, category}) => {

    return (
      <div className="Store">
        <img src={image} alt={name} className='Store-image'/>
        <h3 className='Store-name'>{name}</h3>
        <p className='Store-description'>{description}</p>
        <p className='Store-address'>{address}</p>
        <p className='Store-hours'>{hours}</p>
        <p className='Store-website'><a href={website} target="_blank" rel="noopener noreferrer">{website}</a></p>
        <p className='Store-category'>{category}</p> 
      </div>
    )
  }
  
export default Store;