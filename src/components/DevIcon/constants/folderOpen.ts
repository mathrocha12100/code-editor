import Android from "@/assets/icons/folder/open/Android.svg?react";
import Angular from "@/assets/icons/folder/open/Angular.svg?react";
import App from "@/assets/icons/folder/open/App.svg?react";
import Assets from "@/assets/icons/folder/open/Assets.svg?react";
import BlueDev from "@/assets/icons/folder/open/Blue Dev.svg?react";
import BlueDotFilled from "@/assets/icons/folder/open/Blue Dot Filled.svg?react";
import BlueDotOutlined from "@/assets/icons/folder/open/Blue Dot Outlined.svg?react";
import Components from "@/assets/icons/folder/open/Components.svg?react";
import Config from "@/assets/icons/folder/open/Config.svg?react";
import Context from "@/assets/icons/folder/open/Context.svg?react";
import Database from "@/assets/icons/folder/open/Database.svg?react";
import Drizzle from "@/assets/icons/folder/open/Drizzle.svg?react";
import Firebase from "@/assets/icons/folder/open/Firebase.svg?react";
import Folder from "@/assets/icons/folder/open/Folder.svg?react";
import Github from "@/assets/icons/folder/open/Github.svg?react";
import GrayDev from "@/assets/icons/folder/open/Gray Dev.svg?react";
import GrayDotFilled from "@/assets/icons/folder/open/Gray Dot Filled.svg?react";
import GrayDotOutlined from "@/assets/icons/folder/open/Gray Dot Outlined.svg?react";
import GreenDev from "@/assets/icons/folder/open/Green Dev.svg?react";
import GreenDotFilled from "@/assets/icons/folder/open/Green Dot Filled.svg?react";
import GreenDotOutlined from "@/assets/icons/folder/open/Green Dot Outlined.svg?react";
import Layout from "@/assets/icons/folder/open/Layout.svg?react";
import OrangeDev from "@/assets/icons/folder/open/Orange Dev.svg?react";
import OrangeDotFilled from "@/assets/icons/folder/open/Orange Dot Filled.svg?react";
import OrangeDotOutlined from "@/assets/icons/folder/open/Orange Dot Outlined.svg?react";
import PurpleDev from "@/assets/icons/folder/open/Purple Dev.svg?react";
import PurpleDotFilled from "@/assets/icons/folder/open/Purple Dot Filled.svg?react";
import PurpleDotOutlined from "@/assets/icons/folder/open/Purple Dot Outlined.svg?react";
import RedDev from "@/assets/icons/folder/open/Red Dev.svg?react";
import RedDotFilled from "@/assets/icons/folder/open/Red Dot Filled.svg?react";
import RedDotOutlined from "@/assets/icons/folder/open/Red Dot Outlined.svg?react";
import SkyDev from "@/assets/icons/folder/open/Sky Dev.svg?react";
import SkyDotFilled from "@/assets/icons/folder/open/Sky Dot Filled.svg?react";
import SkyDotOutlined from "@/assets/icons/folder/open/Sky Dot Outlined.svg?react";
import Supabase from "@/assets/icons/folder/open/Supabase.svg?react";
import Target from "@/assets/icons/folder/open/Target.svg?react";
import Tina from "@/assets/icons/folder/open/Tina.svg?react";
import Vercel from "@/assets/icons/folder/open/Vercel.svg?react";
import YellowDev from "@/assets/icons/folder/open/Yellow Dev.svg?react";
import YellowDotFilled from "@/assets/icons/folder/open/Yellow Dot Filled.svg?react";
import YellowDotOutlined from "@/assets/icons/folder/open/Yellow Dot Outlined.svg?react";
import Ios from "@/assets/icons/folder/open/ios.svg?react";

export const DEFAULT_OPEN_FOLDERS = {
	"folder-android-open": Android,
	"folder-angular-open": Angular,
	"folder-app-open": App,
	"folder-assets-open": Assets,
	"folder-config-open": Config,
	"folder-context-open": Context,
	"folder-components-open": Components,
	"folder-layout-open": Layout,
	"folder-target-open": Target,
	"folder-supabase-open": Supabase,
	"folder-vercel-open": Vercel,
	"folder-tina-open": Tina,
	"folder-ios-open": Ios,
	"folder-github-open": Github,
	"folder-drizzle-open": Drizzle,
	"folder-database-open": Database,
	"folder-firebase-open": Firebase,

	//sky folders
	"folder-sky-dot-open": SkyDotFilled,
	"folder-sky-outlined-dot-open": SkyDotOutlined,
	"folder-sky-dev-open": SkyDev,

	// yellow folders
	"folder-yellow-dot-open": YellowDotFilled,
	"folder-yellow-outlined-dot-open": YellowDotOutlined,
	"folder-yellow-dev-open": YellowDev,

	// red folders
	"folder-red-dot-open": RedDotFilled,
	"folder-red-outlined-dot-open": RedDotOutlined,
	"folder-red-dev-open": RedDev,

	// green folders
	"folder-green-dot-open": GreenDotFilled,
	"folder-green-outlined-dot-open": GreenDotOutlined,
	"folder-green-dev-open": GreenDev,

	// purple folders
	"folder-purple-dot-open": PurpleDotFilled,
	"folder-purple-outlined-dot-open": PurpleDotOutlined,
	"folder-purple-dev-open": PurpleDev,

	// orange
	"folder-orange-dot-open": OrangeDotFilled,
	"folder-orange-outlined-dot-open": OrangeDotOutlined,
	"folder-orange-dev-open": OrangeDev,

	// gray
	"folder-gray-dot-open": GrayDotFilled,
	"folder-gray-outlined-dot-open": GrayDotOutlined,
	"folder-gray-dev-open": GrayDev,

	// blue
	"folder-blue-dot-open": BlueDotFilled,
	"folder-blue-outlined-dot-open": BlueDotOutlined,
	"folder-blue-dev-open": BlueDev,

	fallback: Folder,
};

export type AvailableOpenFolderIcons = keyof typeof DEFAULT_OPEN_FOLDERS;

export function getIconFolderOpen(iconName: AvailableOpenFolderIcons) {
	return DEFAULT_OPEN_FOLDERS[iconName];
}
