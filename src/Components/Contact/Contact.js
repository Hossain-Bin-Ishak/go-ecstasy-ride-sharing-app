import React from 'react';
import Header from '../Header/Header';
import './Contact.css'

const Contact = () => {
    return (
            <div className="container text-center">
                <Header></Header>
                <div className="form">
                    <form>
                      
                        <input type="text" name="name" id="" placeholder="Your First Name"/>
                        <br/>
                       
                        <input type="text" name="name" id="" placeholder="Your Last Name"/>
                        <br/>
                     
                        <input type="email" name="email" id="" placeholder="Your Email"/>
                        <br/>
                   
                        <textarea name="textarea" id="" cols="54" rows="8" placeholder="Write Your Messgae Here"></textarea>
                        <br/>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
    );
};

export default Contact;