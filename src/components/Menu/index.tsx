import { Fragment } from "react";
import Popover from "../Popover";
import Spacing from "../Spacing";

export type MenuItem = {
	content: string | JSX.Element;
	action: () => void;
	spacing?: boolean;
};

export type OpenProps = {
	open: boolean;
	x: number;
	y: number;
};

type MenuProps = {
	items: MenuItem[];
	state: OpenProps;
	setState: (arg: OpenProps) => void;
};

function Menu({ items, setState, state }: MenuProps) {
	return (
		<Popover primary setState={setState} state={state}>
			{items.map((item, i) => (
				<Fragment key={`menu-${i}`}>
					<div className='p-2 text-sm cursor-pointer rounded-md text-editor-primary hover:bg-tertiary' onClick={item.action}>
						{item.content}
					</div>
					{item.spacing && <Spacing sm className='mt-2 mb-2 border-white-primary/10' />}
				</Fragment>
			))}
		</Popover>
	);
}

export default Menu;
