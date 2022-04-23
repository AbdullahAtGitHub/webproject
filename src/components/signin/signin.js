import logo from './logo2.png'
import './signin.css'

import { Navbar2 } from '../navbar/navbar';
import { Link } from "react-router-dom";

export const Signin = () => {
    return (
        <>
            <Navbar2 />
            <div className="container infinity-container">
                <div className="row">
                    <div className="col-md-1 infinity-left-space"></div>
                    <div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
                        <div className="text-center mb-3 mt-5">
                            <img src={logo} width="150px" />
                        </div>
                        <div className="text-center mb-4">
                            <h4>Login into account</h4>
                        </div>
                        <form className="px-3">
                            <div className="form-input">
                                <span><i className="fa fa-envelope"></i></span>
                                <input type="email" name="" placeholder="Email Address" tabindex="10" required />
                            </div>
                            <div className="form-input">
                                <span><i className="fa fa-lock"></i></span>
                                <input type="password" name="" placeholder="Password" require />
                            </div>
                            <div className="row mb-3">

                                <div className="col-auto d-flex align-items-center">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cb1" />
                                        <label className="custom-control-label" for="cb1">Remember me</label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">

                                <button type="submit" className="btn btn-block"><Link to="/Profile">Login</Link></button>
                            </div>
                            <div className="text-right ">
                                <Link to='/reset'>Forgot password?</Link>
                                {/* <a href="/reset" className="forget-link">Forgot password?</a> */}
                            </div>
                            <div className="text-center mb-2">
                                <div className="text-center mb-3" style={{ color: '#777' }}>or login with</div>


                                <a href="" className="btn btn-social btn-facebook"><i className="fa fa-facebook"></i>F</a>


                                <a href="" className="btn btn-social btn-google"><i className="fa fa-google"></i>G</a>


                            </div>
                            <div className="text-center mb-5" style={{ color: '#777' }}>Don't have an account?
                                <Link to='/signup'>  Register here</Link>
                            </div>
                        </form>
                    </div>


                    {/* <div className="col-md-1 infinity-right-space"></div> */}
                </div>
            </div>

        </>
    )
}
