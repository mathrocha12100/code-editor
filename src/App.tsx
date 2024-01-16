import { RecoilRoot } from "recoil";

import Main from "./pages/Main/Main";

function App() {
	return (
		<RecoilRoot>
			<div className='w-full h-screen bg-primary font-inter font-normal'>
				<Main />
			</div>
		</RecoilRoot>
	);
}

export default App;
