"use client";
import React from "react";
import { useState } from "react";

const BrakesForm = () => {
	const [frontBrake, setFrontBrake] = useState("");
	const [frontPrice, setFrontPrice] = useState("");
	const [frontLinks, setFrontLinks] = useState("");
	const [rearBrake, setRearBrake] = useState("");
	const [rearPrice, setRearPrice] = useState("");
	const [rearLinks, setRearLinks] = useState("");
	const [data, setData] = useState<Data>({
		frontBrake: "",
		frontPrice: "",
		frontLinks: "",
		rearBrake: "",
		rearPrice: "",
		rearLinks: "",
	});
	const [submitted, setSubmitted] = useState(false);

	interface Data {
		frontBrake: String;
		frontPrice: String;
		frontLinks: String;
		rearBrake: String;
		rearPrice: String;
		rearLinks: String;
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setData({
			frontBrake: frontBrake,
			frontPrice: frontPrice,
			frontLinks: frontLinks,
			rearBrake: rearBrake,
			rearPrice: rearPrice,
			rearLinks: rearLinks,
		});
		setSubmitted(true);
	};

	return (
		<div className="w-screen max-w-3xl">
			{submitted ? null : <h1 className="text-3xl">Select Front Brake</h1>}

			{submitted ? (
				<div className="flex flex-col">
					<h1 className="text-3xl mb-8">Selected Front Brake:</h1>
					<div className="p-2">{data.frontBrake}</div>
					<div className="p-2">{data.frontPrice}</div>
					<div className="p-2 mb-12">{data.frontLinks}</div>
					<h2 className="text-3xl mb-8">Selected Front Brake:</h2>
					<div className="p-2">{data.rearBrake}</div>
					<div className="p-2">{data.rearPrice}</div>
					<div className="p-2">{data.rearLinks}</div>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="frontBrake" className="mb-2">
							Front Brake
						</label>
						<input
							name="frontBrake"
							type="text"
							required
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={frontBrake}
							onChange={(e) => setFrontBrake(e.target.value)}
						/>
					</div>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="frontPrice" className="mb-2">
							Price
						</label>
						<input
							name="frontPrice"
							type="text"
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={frontPrice}
							onChange={(e) => setFrontPrice(e.target.value)}
						/>
					</div>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="frontLinks" className="mb-2">
							Links
						</label>
						<input
							name="frontLinks"
							type="text"
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={frontLinks}
							onChange={(e) => setFrontLinks(e.target.value)}
						/>
					</div>
					{submitted ? null : <h1 className="text-3xl">Select Rear Brake</h1>}

					<div className="flex flex-col justify-between my-4">
						<label htmlFor="rearBrake" className="mb-2">
							Rear Brake
						</label>
						<input
							name="rearBrake"
							type="text"
							required
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={rearBrake}
							onChange={(e) => setRearBrake(e.target.value)}
						/>
					</div>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="rearPrice" className="mb-2">
							Price
						</label>
						<input
							name="rearPrice"
							type="text"
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={rearPrice}
							onChange={(e) => setRearPrice(e.target.value)}
						/>
					</div>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="rearLinks" className="mb-2">
							Links
						</label>
						<input
							name="rearLinks"
							type="text"
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={rearLinks}
							onChange={(e) => setRearLinks(e.target.value)}
						/>
					</div>

					<div className="flex justify-between mb-8">
						<button
							type="submit"
							className="py-2 px-4 bg-white text-black rounded hover:bg-gray-300"
						>
							Save
						</button>
						<button className="py-2 px-4 bg-white text-black rounded hover:bg-gray-300">
							Cancel
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default BrakesForm;
