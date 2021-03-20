import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './RideDetail.css';
import GoogleMaps from '../GoogleMap/GoogleMaps';


const RideDetail = () => {


    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [data, setData] = useState({});
    const onSubmit = data => {
        setData(data);
    };

    console.log(watch("example"));
    
    return (

        <div className="container">
            <Header></Header>
            <div className="row">
                <div className="col-md3">
                    <form className='ride-form' onSubmit={handleSubmit(onSubmit)}>

                        <label>Pick From</label>
                        <input name="pickup" ref={register({ required: true })} placeholder="Pick up Point" />
                        {errors.pickup && <span className='error'>Pick up point is required</span>}
                        <label>Pick to</label>
                        <input name="destination" ref={register({ required: true })} placeholder='Destination' />
                        {errors.destination && <span className='error'>Destination is required</span>}

                        <input type="submit" />
                    </form>
                <div className="container ride-details">
                    <p>{data.pickup}</p>
                    <p>{data.destination}</p>
                </div>

                </div>

                <div className="col-md9">
                        <GoogleMaps></GoogleMaps>
                </div>
            </div>
        </div>
    );
};

export default RideDetail;