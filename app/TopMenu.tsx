"use client";
import React from "react";

const TopMenu = ({ handleMenu = () => {} }: any) => {
	return (
		<div>
			<div className="flex w-screen justify-center bg-slate-600 mb-12">
				<button
					className="p-2 cursor-pointer hover:text-black"
					onClick={() => handleMenu("frameForm")}
				>
					Frame
				</button>
				<button
					className="p-2 cursor-pointer hover:text-black"
					onClick={() => handleMenu("suspension")}
				>
					Suspension
				</button>
				<button
					className="p-2 cursor-pointer hover:text-black"
					onClick={() => handleMenu("wheels")}
				>
					Wheels
				</button>
				<button
					className="p-2 cursor-pointer hover:text-black"
					onClick={() => handleMenu("driveTrain")}
				>
					Drivetrain
				</button>
				<button
					className="p-2 cursor-pointer hover:text-black"
					onClick={() => handleMenu("brakes")}
				>
					Brakes
				</button>
				<button
					className="p-2 cursor-pointer bg-green-500 hover:text-black"
					onClick={() => handleMenu("summary")}
				>
					Your Build: £1400
				</button>
			</div>
		</div>
	);
};

export default TopMenu;
