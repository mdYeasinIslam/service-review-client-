import React from 'react';

const TouristInfo = ({tDetails}) => {
    const {address,city,number,name ,state,email} =tDetails 
    // console.log(tDetails)
    return (
        <div>
            <h3>Name :{name}</h3>
            <p>State :{state}</p>
            <p>City : {city}</p>
            <p>Address : {address}</p>
            <p>Contact : {JSON.parse(number)}</p>
            <p>Email : {email}</p>
        </div>
    );
};

export default TouristInfo;