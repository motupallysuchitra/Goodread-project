/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		let token = localStorage.getItem("token");
		if (token) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, [loggedIn]);

	const logoutHandler = () => {
		localStorage.removeItem("token");
		setLoggedIn(false);
	};
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<NavLink className="navbar-brand" to="/">
					GoodRead
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<NavLink className="nav-link" to="/">
								Home <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item active">
							<NavLink className="nav-link" to="/books">
								Books <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item active">
							<NavLink className="nav-link" to="/about">
								About <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item active">
							<NavLink className="nav-link" to="/contact">
								Contact <span className="sr-only">(current)</span>
							</NavLink>
						</li>
						<li className="nav-item active">
							<NavLink className="nav-link" to="/register">
								Register <span className="sr-only">(current)</span>
							</NavLink>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						{loggedIn ? (
							<NavLink
								className="btn btn-outline-success my-2 my-sm-0"
								onClick={logoutHandler}
							>
								Logout
							</NavLink>
						) : (
							<NavLink
								className="btn btn-outline-success my-2 my-sm-0"
								to="/login"
							>
								LogIn
							</NavLink>
						)}
					</form>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
