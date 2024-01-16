import Android from "@/assets/icons/folder/closed/Android.svg?react";
import Angular from "@/assets/icons/folder/closed/Angular.svg?react";
import App from "@/assets/icons/folder/closed/App.svg?react";
import Assets from "@/assets/icons/folder/closed/Assets.svg?react";
import BlueDev from "@/assets/icons/folder/closed/Blue Dev.svg?react";
import BlueDotFilled from "@/assets/icons/folder/closed/Blue Dot Filled.svg?react";
import BlueDotOutlined from "@/assets/icons/folder/closed/Blue Dot Outlined.svg?react";
import Components from "@/assets/icons/folder/closed/Components.svg?react";
import Config from "@/assets/icons/folder/closed/Config.svg?react";
import Context from "@/assets/icons/folder/closed/Context.svg?react";
import Database from "@/assets/icons/folder/closed/Database.svg?react";
import Drizzle from "@/assets/icons/folder/closed/Drizzle.svg?react";
import Firebase from "@/assets/icons/folder/closed/Firebase.svg?react";
import Folder from "@/assets/icons/folder/closed/Folder.svg?react";
import Github from "@/assets/icons/folder/closed/Github.svg?react";
import GrayDev from "@/assets/icons/folder/closed/Gray Dev.svg?react";
import GrayDotFilled from "@/assets/icons/folder/closed/Gray Dot Filled.svg?react";
import GrayDotOutlined from "@/assets/icons/folder/closed/Gray Dot Outlined.svg?react";
import GreenDev from "@/assets/icons/folder/closed/Green Dev.svg?react";
import GreenDotFilled from "@/assets/icons/folder/closed/Green Dot Filled.svg?react";
import GreenDotOutlined from "@/assets/icons/folder/closed/Green Dot Outlined.svg?react";
import Layout from "@/assets/icons/folder/closed/Layout.svg?react";
import OrangeDev from "@/assets/icons/folder/closed/Orange Dev.svg?react";
import OrangeDotFilled from "@/assets/icons/folder/closed/Orange Dot Filled.svg?react";
import OrangeDotOutlined from "@/assets/icons/folder/closed/Orange Dot Outlined.svg?react";
import PurpleDev from "@/assets/icons/folder/closed/Purple Dev.svg?react";
import PurpleDotFilled from "@/assets/icons/folder/closed/Purple Dot Filled.svg?react";
import PurpleDotOutlined from "@/assets/icons/folder/closed/Purple Dot Outlined.svg?react";
import RedDev from "@/assets/icons/folder/closed/Red Dev.svg?react";
import RedDotFilled from "@/assets/icons/folder/closed/Red Dot Filled.svg?react";
import RedDotOutlined from "@/assets/icons/folder/closed/Red Dot Outlined.svg?react";
import SkyDev from "@/assets/icons/folder/closed/Sky Dev.svg?react";
import SkyDotFilled from "@/assets/icons/folder/closed/Sky Dot Filled.svg?react";
import SkyDotOutlined from "@/assets/icons/folder/closed/Sky Dot Outlined.svg?react";
import Supabase from "@/assets/icons/folder/closed/Supabase.svg?react";
import Target from "@/assets/icons/folder/closed/Target.svg?react";
import Tina from "@/assets/icons/folder/closed/Tina.svg?react";
import Vercel from "@/assets/icons/folder/closed/Vercel.svg?react";
import YellowDev from "@/assets/icons/folder/closed/Yellow Dev.svg?react";
import YellowDotFilled from "@/assets/icons/folder/closed/Yellow Dot Filled.svg?react";
import YellowDotOutlined from "@/assets/icons/folder/closed/Yellow Dot Outlined.svg?react";
import Ios from "@/assets/icons/folder/closed/ios.svg?react";

export const DEFAULT_CLOSED_FOLDERS = {
	"folder-android-closed": Android,
	"folder-angular-closed": Angular,
	"folder-app-closed": App,
	"folder-assets-closed": Assets,
	"folder-config-closed": Config,
	"folder-context-closed": Context,
	"folder-components-closed": Components,
	"folder-layout-closed": Layout,
	"folder-target-closed": Target,
	"folder-supabase-closed": Supabase,
	"folder-vercel-closed": Vercel,
	"folder-tina-closed": Tina,
	"folder-ios-closed": Ios,
	"folder-github-closed": Github,
	"folder-drizzle-closed": Drizzle,
	"folder-database-closed": Database,
	"folder-firebase-closed": Firebase,

	//sky folders
	"folder-sky-dot-closed": SkyDotFilled,
	"folder-sky-outlined-dot-closed": SkyDotOutlined,
	"folder-sky-dev-closed": SkyDev,

	// yellow folders
	"folder-yellow-dot-closed": YellowDotFilled,
	"folder-yellow-outlined-dot-closed": YellowDotOutlined,
	"folder-yellow-dev-closed": YellowDev,

	// red folders
	"folder-red-dot-closed": RedDotFilled,
	"folder-red-outlined-dot-closed": RedDotOutlined,
	"folder-red-dev-closed": RedDev,

	// green folders
	"folder-green-dot-closed": GreenDotFilled,
	"folder-green-outlined-dot-closed": GreenDotOutlined,
	"folder-green-dev-closed": GreenDev,

	// purple folders
	"folder-purple-dot-closed": PurpleDotFilled,
	"folder-purple-outlined-dot-closed": PurpleDotOutlined,
	"folder-purple-dev-closed": PurpleDev,

	// orange
	"folder-orange-dot-closed": OrangeDotFilled,
	"folder-orange-outlined-dot-closed": OrangeDotOutlined,
	"folder-orange-dev-closed": OrangeDev,

	// gray
	"folder-gray-dot-closed": GrayDotFilled,
	"folder-gray-outlined-dot-closed": GrayDotOutlined,
	"folder-gray-dev-closed": GrayDev,

	// blue
	"folder-blue-dot-closed": BlueDotFilled,
	"folder-blue-outlined-dot-closed": BlueDotOutlined,
	"folder-blue-dev-closed": BlueDev,

	fallback: Folder,
};

export type AvailableClosedFolderIcons = keyof typeof DEFAULT_CLOSED_FOLDERS;

export function getIconFolderClosed(iconName: AvailableClosedFolderIcons) {
	return DEFAULT_CLOSED_FOLDERS[iconName];
}
