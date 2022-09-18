import React from 'react'
import "./hero.css";
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='Hero'>
        <div className="container">
            <div className="content">
                <div className="col-1">
                    <h1>Data to enrich your</h1>
                    <h1><span className='primary-color'>online business</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos unde qui sequi soluta voluptatum quam doloribus, voluptate placeat et incidunt?</p>
                <div className="used-by">
                    <p>Used By</p>
                    <div className="icons">
                        <span><FaDatabase />Staxx</span>
                        <span><FaAsterisk />Star AI</span>
                        <span><FaAccusoft />Accusoft</span>
                    </div>
                </div>

                </div>
                <div className="col-2">
                    <div className="form-layout">
                        <div className="form-container">
                            <p className="sign-in-txt">Sign In with</p>
                            <div className="social-login">
                                <span><FaFacebook size={20}/></span>
                                <span><FaTwitter size={20}/></span>
                                <span><FaGithub size={20}/></span>
                            </div>
                            <div className="divider">
                        <p><span>or</span></p>
                    </div>
                    <form>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <button>Create your Account</button>
                    </form>
                        </div>
                        <div className="form-footer">
                            <p>By signing up, you agree to our   
                                <span className='primary-color'> Terms, data policy
                                    </span> and <span className='primary-color'>Cookies policy</span>
                                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero