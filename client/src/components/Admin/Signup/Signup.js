import React , {useState} from 'react';
import singup_logo from '../../../img/logo.png';
import './Signup.css';
import {Link,useHistory} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
 
const Signup = () =>{
    return (
        <div className='Signup__wrapper'>
            <div className='Signup_div'>
                <h1>Make the most of your professional life </h1>
                <form className='singup__form' > 
                    <div className='input_wrapper'>
                        <label>Name</label>
                        <input type="text" className='Singup__inputEle' name="name" />
                    </div>
                    <div className='input_wrapper'>
                        <label>Profile URL</label>
                        <input type="text" className='Singup__inputEle' name="profileurl" />
                    </div>
                    <div className='input_wrapper'>
                        <label>Email or phonenumber</label>
                        <input type="text" className='Singup__inputEle' name="email"  />
                    </div>
                    <div className='input_wrapper'>
                        <label>Password</label>
                        <input type="text" className='Singup__inputEle' name="password"/>
                    </div>
                    
                    <div className='input_wrapper'>
                        <p>By clicking Agree & Join, you agree to the LinkedIn  <Link to="/">User Agreement, Privacy Policy</Link>, and <Link to="/">Cookie Policy</Link>.</p>
                    </div>

                    <div className='input_wrapper'>
                       {/*<button className='signup'>Signup</button> */}  
                        <Link to="/dashboard" className='signup'>Signup</Link>
                    </div>
                    <div className='input_wrapper'>
                        <span className='signup__or'>or</span>
                    </div>
                    <div className='input_wrapper'>
                        <button className='signup__with_google'> <FacebookIcon/> Join with Facebook</button>
                    </div>  
                    <div className='input_wrappers'>
                        <label>Already on LinkedIn?</label>
                        <Link to="/login"> Sign in</Link>
                    </div>
                </form>
                <div className='input_wrappers'>
                    <p>Looking to create a page for a business?</p>
                    <Link to="/">Get help</Link>
                </div>
            </div>
        </div>
    )   
}

export default Signup;