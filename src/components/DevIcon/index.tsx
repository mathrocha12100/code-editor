import { FolderType, getDevIcon } from "./constants/settings";

type DevIconProps = {
	icon: {
		name: string;
		fullName?: string;
	};
	type: FolderType;
	className?: string;
};

export function getFileExt(name: string) {
	const ext = name.substring(name.indexOf(".") + 1);

	return `.${ext}`;
}

function DevIcon({ icon, type, className }: DevIconProps) {
	const Icon = getDevIcon(icon.name, type, icon.fullName);

	if (!Icon) return <strong>nao existe</strong>;

	return <Icon className={className} />;
}

export default DevIcon;
