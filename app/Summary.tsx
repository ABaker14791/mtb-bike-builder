import React from "react";

const Summary = () => {
	return (
		<div className="w-screen max-w-3xl">
			<h1 className="text-3xl mb-12">Your MTB Build</h1>
			<div className="flex justify-between">
				<p>Frame: Nukeproof Mega 290</p>
				<p>£1799.99</p>
			</div>
			<div className="flex justify-between">
				<p>Fork: Fox 38</p>
				<p>£799.99</p>
			</div>
			<h2 className="flex justify-between mt-4">
				<span>Total</span>
				<span>£1400</span>
			</h2>
		</div>
	);
};

export default Summary;
