import './signup.css'
import logo from './logo2.png'

import { Link } from "react-router-dom";

export const Signup = ()=>{
    return(
        <>
            <div class="container infinity-container">
		<div class="row">
			<div class="col-md-1 infinity-left-space"></div>

			
			<div class="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">

				<div class="text-center mb-3 mt-5">
                <img src={logo} width="150px"/>				
                </div>
				<div class="text-center mb-4">
					<h4>Create an account</h4>
				</div>

				<form class="px-3">

					<div class="form-input">
						<span><i class="fa fa-user"></i></span>
						<input type="text" name="" placeholder="Full Name" tabIndex="10"required/>
					</div>
					<div class="form-input">
						<span><i class="fa fa-envelope"></i></span>
						<input type="email" name="" placeholder="Email Address" tabIndex="10"required/>
					</div>
					<div class="form-input">
						<span><i class="fa fa-lock"></i></span>
						<input type="password" name="" placeholder="Password" required/>
					</div>

		            <div class="mb-3"> 
						<button type="submit" class="btn btn-block">Register</button>
					</div>
					<div class="text-center mb-2">
	                   	<div class="text-center mb-3" style={{color: '#777'}}>or register with</div>
		                   	

	                   	<a href="" class="btn btn-social btn-facebook"><i class="fa fa-facebook"></i>F</a>


						<a href="" class="btn btn-social btn-google"><i class="fa fa-google"></i>G</a>


						
					</div>
					<div class="text-center mb-5" style={{color: '#777'}}>Already have an account? 
						<Link to="/">Login here</Link>
			       	</div>
				</form>
			</div>


			<div class="col-md-1 infinity-right-space"></div>
		</div>
	</div>
        </>
    )
}