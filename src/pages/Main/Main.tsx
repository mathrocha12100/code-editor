import Toast from "@/components/Toast";
import BottomContent from "@/features/BottomContent";

import EditorContent from "@/features/EditorContent";
import Header from "@/features/Header";
import Sidebar from "@/features/Sidebar";

function Main() {
	return (
		<>
			<div className='p-1.5 h-screen max-h-screen w-screen flex flex-col gap-1.5 overflow-hidden'>
				<div className='flex h-full gap-1.5'>
					<Sidebar />
					<div className='flex flex-col max-w-full w-full overflow-x-auto gap-1.5'>
						<Header />
						<EditorContent />
					</div>
				</div>

				<BottomContent />

				{/* <FloatingFileSearcher /> */}
				{/* <SettingsModal open setOpen={() => 0} /> */}
			</div>

			<Toast />
		</>
	);
}

export default Main;
