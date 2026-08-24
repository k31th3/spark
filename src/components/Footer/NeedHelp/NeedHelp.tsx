import Desktop from "./Desktop";
import Mobile from "./Mobile";

type NeedHelpProps = {
	screen?: "sm" | "lg";
};

function NeedHelp({ screen }: NeedHelpProps) {
	if (screen === "sm") {
		return <Mobile />;
	}

	if (screen === "lg") {
		return <Desktop />;
	}

	return null;
}

NeedHelp.Desktop = Desktop;
NeedHelp.Mobile = Mobile;

export default NeedHelp;
