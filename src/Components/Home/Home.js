import React, { useEffect, useState } from 'react';
import Rider from '../Rider/Rider';
import fakeData from '../../fakeData/fakeData.json';
import '../Home/Home.css';
import Header from '../Header/Header';

const Home = () => {
    const ride = fakeData;
    const [rides, setRides] = useState(ride);
    useEffect(() => {
        fetch({ ride })
            .then(res => res.json())
            .then(data => setRides(data))
            .catch(error => console.log(error))
    }, [ride])

    return (
        <div className="header-container">
            <Header></Header>
            <div className="content-area">
                <div className='row m-auto container'>


                    {
                        rides.map(ride => <Rider ride={ride} key={ride.id}></Rider>)
                    }


                </div>
            </div>

        </div>
    );
};

export default Home;