//1. Import Area
//import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../features/auth/authSlice';
import { useState } from 'react';

//2. Degination Area
function SignUp() {
    //2.1 Hooks Area
    const [payload,setPayload] = useState({
                                                "username": null,
                                                "email": null,
                                                "password": null,
                                                "cpassword": null
                                            });
    let userInfo = useSelector(selectUserInfo);

    //2.2 Function Defination Area
    let handleChange = (e)=>{
        console.log('e.target.name-->',e.target.name)
        console.log('e.target.value-->',e.target.value)
        setPayload({
            ...payload,
            [e.target.name]:e.target.value
        })
    }
    let submitData =()=>{
        //alert('hye')
        console.log('to be submitted payload--->',payload)
    }

    //2.3 Return Statement
    return (
        <>
            { console.log('userInfo--->>',userInfo.userInfo.fname)}
            {console.log('payload',payload)}
            <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
                <div className="container">
                    <div className="padding-top padding-bottom">
                    <div className="account-area">
                        <div className="section-header-3">
                        <span className="cate">welcome</span>
                        <h2 className="title">to Boleto </h2>
                        </div>
                        <form className="account-form">
                        <div className="form-group">
                            <label htmlFor="username">Username<span>*</span></label>
                            <input type="text" name='username' placeholder="Enter Your userName" onChange={handleChange} id="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email1">Email<span>*</span></label>
                            <input type="text" name='email' placeholder="Enter Your Email" id="email1" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass1">Password<span>*</span></label>
                            <input type="password" name='password' placeholder="Password" id="pass1" onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass2">Confirm Password<span>*</span></label>
                            <input type="password" name='cpassword' placeholder="Password" id="pass2" onChange={handleChange} required />
                        </div>
                        <div className="form-group checkgroup">
                            <input type="checkbox" id="bal" required defaultChecked />
                            <label htmlFor="bal">I agree to the <a href="#0">Terms, Privacy Policy</a> and <a href="#0">Fees</a></label>
                        </div>
                        <div className="form-group text-center">
                            <input type="button" onClick={()=>{ submitData() }} defaultValue="Sign Up" />
                        </div>
                        </form>
                        <div className="option">
                        Already have an account? <a href="/sign-in">Login</a>
                        </div>
                        <div className="or"><span>Or</span></div>
                        <ul className="social-icons">
                        <li>
                            <a href="#0">
                            <i className="fab fa-facebook-f" />
                            </a>
                        </li>
                        <li>
                            <a href="#0" className="active">
                            <i className="fab fa-twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                            <i className="fab fa-google" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </section>
</>
    )
}

//3. Export Area
export default SignUp;
