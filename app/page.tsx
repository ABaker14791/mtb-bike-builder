"use client";

import { useState } from "react";
import FrameForm from "./FrameForm";
import SuspensionForm from "./SuspensionForm";
import WheelForm from "./WheelForm";
import DriveTrainForm from "./DriveTrainForm";
import BrakesForm from "./BrakesForm";
import TopMenu from "./TopMenu";
import Summary from "./Summary";

export default function Home() {
	const [menuSelected, setMenuSelected] = useState("summary");
	const handleMenu = (menuItem: string) => {
		setMenuSelected(menuItem);
		console.log(menuSelected);
	};

	return (
		<main className="flex flex-col items-center">
			<TopMenu handleMenu={handleMenu} />
			{menuSelected === "frameForm" ? <FrameForm /> : null}
			{menuSelected === "suspension" ? <SuspensionForm /> : null}
			{menuSelected === "wheels" ? <WheelForm /> : null}
			{menuSelected === "driveTrain" ? <DriveTrainForm /> : null}
			{menuSelected === "brakes" ? <BrakesForm /> : null}
			{menuSelected === "summary" ? <Summary /> : null}
		</main>
	);
}
