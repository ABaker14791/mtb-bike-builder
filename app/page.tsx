import prisma from "../lib/prisma";
import FrameForm from "./FrameForm";
import TopMenu from "./TopMenu";
import Summary from "./Summary";
import {
	LoginButton,
	LogoutButton,
	ProfileButton,
	RegisterButton,
} from "@/components/buttons.component";

async function getBike() {
	const bike = await prisma.frame.findMany({
		where: {
			description: {
				equals: "Nukeproof Mega 290",
			},
		},
	});
	return bike;
}

export default async function Home() {
	const data = await getBike();
	// const [menuSelected, setMenuSelected] = useState("summary");

	// const handleMenu = (menuItem: string) => {
	// 	setMenuSelected(menuItem);
	// };

	return (
		<main className="flex flex-col items-center">
			<TopMenu />
			<div>
				<LoginButton />
				<RegisterButton />
				<LogoutButton />
				<ProfileButton />
			</div>
			{/* <FrameForm frames={data} /> */}
			{/* {menuSelected === "brakes" ? <BrakesForm /> : null} */}
			{/* <Summary /> */}
		</main>
	);
}
