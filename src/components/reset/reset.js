import './reset.css'
import logo from './logo2.png'
import { Navbar } from '../navbar/navbar'

export const Reset = () => {
	return (
		<>
			<Navbar />
			<div className="container infinity-container">
				<div className="row">
					<div className="col-md-1 infinity-left-space"></div>

					<div className="col-lg-10 col-md-10 col-sm-12 col-xs-12 text-center infinity-form">
						<div className="text-center mb-3 mt-5">
							<img src={logo} width="150px" />
						</div>
						<div className="reset-form d-block">
							<form className="reset-password-form px-3">
								<h4>Reset Your password</h4>
								<p className="mb-3" style={{ color: '#777' }}>
									Please enter your email address and we will send you a password reset link.
								</p>
								<div className="form-input">
									<span><i className="fa fa-envelope"></i></span>
									<input type="email" name="" placeholder="Email Address" tabindex="10" required />
								</div>
								<div className="mb-3">
									<button type="submit" className="btn">Send Reset Link</button>
								</div>
							</form>
						</div>
						<div className="reset-confirmation d-none px-3">
							<div className="mb-4">
								<h4 className="mb-3">Link was sent</h4>
								<h6 style={{ color: '#777' }}>Please, check your inbox for a password reset link.</h6>
							</div>
							<div className="mb-3">
								<a href="login.html">
									<button type="submit" className="btn">Login Now</button>
								</a>
							</div>
						</div>

						<div className="col-md-1 infinity-right-space"></div>
					</div>
				</div>
			</div>

			{/* <script type="text/javascript">
		function PasswordReset() {
	  	$('form.reset-password-form').on('submit', function(e) {
	      e.preventDefault();
	      $('.reset-form')
	      .removeclassName('d-block')
	      .addclassName('d-none');
		    $('.reset-confirmation').addclassName('d-block');
			});
		}

		window.addEventListener('load', function() {
	    PasswordReset();
		});
	</script> */}

		</>
	)
} 
