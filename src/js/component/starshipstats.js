import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const StarshipStats = () => (
	<div className="container mt-5 mb-5">
		{/* start description */}
		<div className="row">
			<div className="col mx-lg-n5">
				<img
					src="https://www.nme.com/wp-content/uploads/2021/01/markhamill-lukeskywalker-2000x1270-1.jpg"
					className="card-img-top"
				/>
			</div>
			<div className="col detailsdescription pt-4">
				<h3 className="detailsname">CORVETTE</h3>
				<p>
					Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys
					standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only five centuries, but also the
					leap into electronic typesetting, remaining essentially unchanged.
				</p>
				<Link to="/">
					<button className="btn btn-warning">Back home</button>
				</Link>
			</div>
		</div>
		{/* end description */}
		
	</div>
);