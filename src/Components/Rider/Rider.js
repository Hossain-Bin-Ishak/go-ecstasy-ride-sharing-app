import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './Rider.css'
import { useHistory} from 'react-router';
import { UserContext } from '../../App';

const Rider = (props) => {
   
    const { vehicle, name} = props.ride;      
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handlePickRide = () => {
   
       if(loggedInUser){
        history.push('/destination');
       } else {
        history.push('/login');
       }
    }
   
    return (
        <div className="riders-info-area">
            <div className="container">
            <div className='riders-info'>
                <div className="col-md2">
                    <img src={vehicle} alt="image" />
                    <h4 className="vechicle-name">{name}</h4>
                    <Button variant='primary'
                        onClick={() => {
                            handlePickRide()

                        }} className='addBtn'><FontAwesomeIcon icon={faClipboardCheck} /> Pick Ride</Button>
                </div>
                               
            </div>
            </div>
        </div>

    );
};

export default Rider;