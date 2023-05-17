"use client";
import { useState } from "react";

const FrameForm = () => {
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [links, setLinks] = useState("");
	const [data, setData] = useState<Data>({
		description: "",
		price: "",
		links: "",
	});
	const [submitted, setSubmitted] = useState(false);

	interface Data {
		description: string;
		price: string;
		links: string;
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(description);
		setData({
			description: description,
			price: price,
			links: links,
		});
		setSubmitted(true);
	};

	return (
		<div className="w-screen max-w-3xl">
			{submitted ? (
				<h1 className="text-3xl">Selected Frame</h1>
			) : (
				<h1 className="text-3xl">Select Frame</h1>
			)}
			{submitted ? (
				<div className="flex flex-col">
					<div className="p-2">{data.description}</div>
					<div className="p-2">{data.price}</div>
					<div className="p-2">{data.links}</div>
				</div>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="description" className="mb-2">
							Description
						</label>
						<input
							name="description"
							type="text"
							required
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="description" className="mb-2">
							Price
						</label>
						<input
							name="description"
							type="text"
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>
					<div className="flex flex-col justify-between my-4">
						<label htmlFor="description" className="mb-2">
							Links
						</label>
						<input
							name="description"
							type="text"
							className="rounded p-2 text-white w-full bg-gray-800 border-2 border-teal-700"
							value={links}
							onChange={(e) => setLinks(e.target.value)}
						/>
					</div>
					<div className="flex justify-between">
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

export default FrameForm;
