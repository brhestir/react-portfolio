import React from 'react';

const Contact = () => {
	return (
		<>
			<div className="container-fluid h-100" id="container-background">
			<h2 className="text-center m-3">Contact</h2>
				<div className="row h-100">
					<div className="col-lg-2 col-sm-2"></div>
					<div className="col-lg-6 col-sm-6 m-3">
						<div className="card" id="card-content-box">
							<section className="card-body">
								<form>
									<div className="form-group col-sm-10 col-11 ml-3">
										<label for="inputName1">Name</label>
										<input type="text" className="form-control" id="inputName1" placeholder="Name"/>
									</div>										
									<div className="form-group col-sm-10 col-11 ml-3">
										<label for="inputEmail1">Email address</label>
										<input type="email" className="form-control" id="inputEmail1" placeholder="Email"/>
									</div>
									<div className="form-group col-sm-10 col-11 ml-3">
										<label for="inputMessage1">Message</label>
										<input type="text" className="form-control" id="inputMessage1" placeholder="Message"/>
									</div>
									<button type="submit" className="btn btn-lg btn-primary">Submit</button>
								</form>
							</section>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;