import React , {useState} from 'react';
import login_logo from '../../../img/logo.png';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import {NavLink} from 'react-router-dom';

const Login = () =>{

    return (
        <div className='login__wrapper'>
            <div className='login_div'>
                <img src={login_logo}/>
       
                <form className='login__form' > 
                    <div className='login__input_wrapper'>
                        <h3>Login</h3>
                        <p className='desc'>Stay updated on your professional world</p>
                    </div>

                    <div className='login__input_wrapper'>
                        <label>Email or phonenumber</label>
                        <input name="email" type="text" className='login__inputEle' placeholder='Email or Phone'/>
                    </div>
                    <div className='login__input_wrapper'>
                        <label>Password</label>
                        <input name="password"   type="text" className='login__inputEle' placeholder='Password'/>
                        
                    </div>
                    
                    <div className='login__input_wrapper'>
                        <Link to="/">Forgot password?</Link>
                    </div>

                    <div className='login__input_wrapper'>
                        <NavLink to="/admin/dashboard" className='login'>Sign in</NavLink>
                    </div>
                    <div className='login__input_wrapper'>
                        <span className='login__or'>or</span>
                    </div>
                    <div className='login__input_wrapper'>
                        <button className='login__with_google'> <FacebookIcon/> Sign in with Facebook</button>
                    </div>  

                </form>

                <div className='login__input_wrappers'>
                        <p>New to LinkedIn? </p>
                        <Link to="/admin/signup">  Join now</Link>
                    </div>
            </div>
        </div>
    )   
}

export default Login;