import React from "react";
import Intro from "../Intro";
import SelectCurrency from "../SelectCurrency";

export default function Home() {
	return (
		<div className="home content">
			<Intro />
			<SelectCurrency />
			<section className="recent-activity">
				<header>
					<h3> Recent Activity </h3>
				</header>
				<div className="activities">
					<div className="activity">
						<i className="fas fa-heartbeat"></i>
						<p className="activity-type">HIV Blood Draw Test</p>
						<p className="activity-cost">A100</p>
					</div>
					<div className="activity">
						<i className="fas fa-user-md"></i>
						<p className="activity-type">TB Radiology X-ray</p>
						<p className="activity-cost">A30</p>
					</div>
					<div className="activity">
						<i className="fas fa-medkit"></i>
						<p className="activity-type">Blood Pressure Check</p>
						<p className="activity-cost">A10</p>
					</div>
					<div className="activity">
						<i className="fas fa-heartbeat"></i>
						<p className="activity-type">HIV Blood Draw Test</p>
						<p className="activity-cost">A100</p>
					</div>
					<div className="activity">
						<i className="fas fa-user-md"></i>
						<p className="activity-type">TB Radiology X-ray</p>
						<p className="activity-cost">A30</p>
					</div>
					<div className="activity">
						<i className="fas fa-medkit"></i>
						<p className="activity-type">Blood Pressure Check</p>
						<p className="activity-cost">A10</p>
					</div>
				</div>
			</section>
		</div>
	);
}
