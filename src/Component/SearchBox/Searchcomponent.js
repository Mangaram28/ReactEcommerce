import React from 'react';


 const Searchcomponent = ({handlechange}) => (
         <input className="search" type="search" name="searchField" placeholder="Search" onChange={handlechange} />
);

export default Searchcomponent;