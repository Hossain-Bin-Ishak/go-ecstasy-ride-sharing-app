import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword, handleGitHubSignIn } from './LoginManager';
import Header from '../Header/Header';
import './Login.css';



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
      handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  const fbSignIn = () => {
      handleFbSignIn()
      .then(res => {
        handleResponse(res, true);
      })

  }

  const gitHubSignIn = () => {
    handleGitHubSignIn()
    .then(res => {
      handleResponse(res, true);
    })

}

  const signOut = () => {
      handleSignOut()
      .then(res => {
          handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) =>{
    setUser(res);
    setLoggedInUser(res);
    if(redirect){
        history.replace(from);
    }
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      console.log(isPasswordValid, passwordHasNumber);
    }
    if(isFieldValid){
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if(newUser && user.email && user.password){
      createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }

    if(!newUser && user.email && user.password){
      signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        handleResponse(res, true);
      })
    }
    e.preventDefault();
  }



  return (
    <div style={{textAlign: 'center'}}>
        <Header></Header>
      
      {
        user.isSignedIn && <div>
          <p>Welcome, {user.name}!</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt=""/>
        </div>
      }

     
      <form className='form-custimize' onSubmit={handleSubmit}>
      {newUser ? <h5>Create an Account</h5> : <h5>Login</h5>}
        {newUser && <input name="name" type="text" onBlur={handleBlur} placeholder="Your name"/>}
        <br/>
        <input type="email" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
        <br/>
        <input type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
        
        <br/>
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
        <br/>
       <label htmlFor="newUser">Don't have an account? </label>
       <span> <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/> Create an Account</span>
      <br/>
      
      </form>
      <p>Or</p>
        { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :
        
        <button className='signInBtn' onClick={googleSignIn}> <FontAwesomeIcon className="google" icon={faGoogle}/>  Continue with Google</button>
        
      }
      <br/>
     { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :  <button className='signInBtn' onClick={gitHubSignIn}> <FontAwesomeIcon className="github" icon={faGithub}/>  Continue with Github</button>}
      <br/>
      { user.isSignedIn ? <button onClick={signOut}>Sign Out</button> :  <button className='signInBtn' onClick={fbSignIn}> <FontAwesomeIcon className="facebook" icon={faFacebook}/>  Continue with Facebook</button>}
     
     
      <p style={{color: 'red'}}>{user.error}</p>
      { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
    </div>
  );
}

export default Login;