import React from 'react';
import getConfig from 'next/config';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();

export const Intro = ({ title, description, image, buttons }) => {
	return (
		<div className="bg-secondary py-5 px-5 intro-section">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-sm-6">
						<h1 className="text-primary fw-bold display-3 slide-in-left">{title}</h1>
						<p className="fade-in">{description}</p>
						<div className="text-center">
							{buttons.map((value, index) => (
								(value.isPrimary) ?
									<Link key={index} href={value.link}>
										<a className="btn btn-primary text my-1 mx-3 btn-animate">{value.title}</a>
									</Link>
									:
									<Link key={index} href={value.link}>
										<a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3 btn-animate">{value.title}</a>
									</Link>
							))}
						</div>
					</div>
					<div className="col-sm-6 text-center">
						<img
							className="img-fluid my-3 card-image bounce-in"
							width="250"
							height="250"
							src={image}
							alt="profile picture of Khushi Saxena"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export const About = ({ title, description }) => {
	return (
		<div id="about" className="bg-primary py-5 px-5 about-section">
			<div className="container">
				<h1 className="text-light fw-bold text-center mb-5 fade-in">{title}</h1>
				<div className="text-light px-sm-5">
					{description.map((value, index) => (
						<p key={index} className="slide-in-right">{value}</p>
					))}
				</div>
			</div>
		</div>
	);
}
