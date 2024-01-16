import {
	loadingProjectList,
	projectBasePath,
	projectFiles,
	projectName,
} from "@/atoms/sidebar";
import { open } from "@tauri-apps/api/dialog";
import { FileEntry, readDir } from "@tauri-apps/api/fs";
import { basename } from "@tauri-apps/api/path";
import { useRecoilState, useSetRecoilState } from "recoil";

const isDirectory = (entry: FileEntry) => {
	return !!entry.children;
};

function useList() {
	const setFiles = useSetRecoilState(projectFiles);
	const setProjectName = useSetRecoilState(projectName);
	const setProjectBasePath = useSetRecoilState(projectBasePath);
	const [isLoading, setIsLoading] = useRecoilState(loadingProjectList);

	const sortListEntries = (entries: FileEntry[]) => {
		entries.sort((a, b) => {
			if (isDirectory(a) && !isDirectory(b)) {
				return -1;
			}
			if (!isDirectory(a) && isDirectory(b)) {
				return 1;
			}

			const nameA = a.name || a.path;
			const nameB = b.name || b.path;
			return nameA.localeCompare(nameB);
		});

		for (const entry of entries) {
			if (isDirectory(entry) && entry.children) {
				sortListEntries(entry.children);
			}
		}
	};

	function removeListEntry(
		entries: FileEntry[],
		pathToRemove: string,
	): FileEntry[] {
		return entries.reduce((acc: FileEntry[], entry) => {
			if (entry.path !== pathToRemove) {
				// Se for um diretório, atualize os children recursivamente
				if (isDirectory(entry) && entry.children) {
					const updatedChildren = removeListEntry(entry.children, pathToRemove);
					// Criar um novo objeto com children atualizados
					acc.push({ ...entry, children: updatedChildren });
				} else {
					acc.push(entry);
				}
			}
			return acc;
		}, []);
	}

	async function getFiles() {
		if (isLoading) return;

		const path = await open({ title: "Choose your project", directory: true });

		if (!path) return;

		setIsLoading(true);

		const paths = await readDir(path as string, { recursive: true });

		const projectName = await basename(path as string);

		setProjectName(projectName);
		setProjectBasePath(path as string);

		if (!paths) return;

		const filtered = paths
			.filter((file) => file.name !== "node_modules")
			.sort((a, b) => ("children" in a && !("children" in b) ? -1 : 1));

		sortListEntries(filtered);

		setFiles(filtered);
		setIsLoading(false);
	}

	return { sortListEntries, removeListEntry, getFiles, isLoading };
}

export default useList;
