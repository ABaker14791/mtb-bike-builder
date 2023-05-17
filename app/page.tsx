import { useState } from "react";
import FrameForm from "./FrameForm";
import SuspensionForm from "./SuspensionForm";
import TopMenu from "./TopMenu";
import Summary from "./Summary";

export default function Home() {
	return (
		<main className="flex flex-col items-center">
			<TopMenu />
			{/* <FrameForm /> */}
			{/* <SuspensionForm /> */}
			<Summary />
		</main>
	);
}
