"use client";
import React from "react";

const TopMenu = () => {
	return (
		<div>
			<div className="flex w-screen justify-center bg-slate-600 mb-12">
				<div className="p-2 cursor-pointer hover:text-black">Frame</div>
				<div className="p-2 cursor-pointer hover:text-black">Suspension</div>
				<div className="p-2 cursor-pointer hover:text-black">Wheels</div>
				<div className="p-2 cursor-pointer hover:text-black">Drivetrain</div>
				<div className="p-2 cursor-pointer hover:text-black">Brakes</div>
				<div className="p-2 cursor-pointer bg-green-500 hover:text-black">
					Your Build: £1400
				</div>
			</div>
		</div>
	);
};

export default TopMenu;
