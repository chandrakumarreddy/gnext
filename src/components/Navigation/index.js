import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'

export default ()=>(
<div className="navbar-inner">
		<div className="container">
			<nav className="navbar navbar-expand-lg">
				
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav  text-center mr-xl-5">
						
						<li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Electronics
							</a>
							<div className="dropdown-menu">
								<div className="agile_inner_drop_nav_info p-4">
									<h5 className="mb-3">Mobiles, Computers</h5>
									<div className="row">
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to='#'>All Mobile Phones</Link>
												</li>
												<li>
													<Link to='#'>All Mobile Accessories</Link>
												</li>
												
												
												<li>
													<Link to='#'>Power Banks</Link>
												</li>
												
												<li>
													<Link to='#'>Tablets</Link>
												</li>
												
											</ul>
										</div>
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to='#'>Laptops</Link>
												</li>
												<li>
													<Link to='#'>Drives & Storage</Link>
												</li>
												<li>
													<Link to='#'>Printers & Ink</Link>
												</li>
												<li>
													<Link to='#'>etworking Devices</Link>
												</li>
												<li>
													<Link to='#'>Computer Accessories</Link>
												</li>
												
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="nav-item dropdown mr-lg-2 mb-lg-0 mb-2">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								Appliances
							</a>
							<div className="dropdown-menu">
								<div className="agile_inner_drop_nav_info p-4">
									<h5 className="mb-3">TV, Appliances, Electronics</h5>
									<div className="row">
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to='#'>Televisions</Link>
												</li>
												<li>
													<Link to='#'>Home Entertainment Systems</Link>
												</li>
												<li>
													<Link to='#'>Headphones</Link>
												</li>
												<li>
													<Link to='#'>Speakers</Link>
												</li>
												<li>
													<Link to='#'>MP3, Media Players & Accessories</Link>
												</li>
												<li>
													<Link to='#'>Audio & Video Accessories</Link>
												</li>
												<li>
													<Link to='#'>Cameras</Link>
												</li>
												<li>
													<Link to='#'>DSLR Cameras</Link>
												</li>
												<li>
													<Link to='#'>Camera Accessories</Link>
												</li>
											</ul>
										</div>
										<div className="col-sm-6 multi-gd-img">
											<ul className="multi-column-dropdown">
												<li>
													<Link to='#'>Musical Instruments</Link>
												</li>
												<li>
													<Link to='#'>Gaming Consoles</Link>
												</li>
												<li>
													<Link to='#'>All Electronics</Link>
												</li>
												<li>
													<Link to='#'>Air Conditioners</Link>
												</li>
												<li>
													<Link to='#'>Refrigerators</Link>
												</li>
												<li>
													<Link to='#'>Washing Machines</Link>
												</li>
												<li>
													<Link to='#'>Kitchen & Home Appliances</Link>
												</li>
												<li>
													<Link to='#'>Heating & Cooling Appliances</Link>
												</li>
												<li>
													<Link to='#'>All Appliances</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className="nav-item mr-lg-2 mb-lg-0 mb-2">
							<Link className="nav-link" to="#">New Arrivals</Link>
						</li>
						
						
					</ul>
				</div>
			</nav>
		</div>
	</div>
	)