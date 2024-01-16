import Badge from "@/components/Badge";
import ButtonIcon from "@/components/ButtonIcon";

import { TerminalSquare } from "lucide-react";

function BottomContent() {
	return (
		<div className='flex items-center rounded-md bg-secondary justify-between pl-2 pr-2'>
			<div>x</div>
			<ButtonIcon unselected>
				<Badge value={19} sm className='bg-red-primary text-white font-bold'>
					<TerminalSquare className='text-red-primary w-5 h-5' />
				</Badge>
			</ButtonIcon>
		</div>
	);
}

export default BottomContent;
