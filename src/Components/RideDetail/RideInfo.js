import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData.json'
import RideDetail from './RideDetail';

const RideInfo = () => {
    const ride = fakeData;
    const { rideId } = useParams();
    const [rideInfos, setRideInfos] = useState({ride});

    console.log(rideInfos);
    useEffect(() => {
        fetch(ride)
            .then(res => res.json())
            .then(data => {
              setRideInfos(data.ride)
              console.log(data.ride);
              
            })
    }, [rideId]);
    return (
        <div>
      
        </div>
    );
};

export default RideInfo;