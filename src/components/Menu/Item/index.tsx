import { LucideProps } from "lucide-react";
import { ComponentType } from "react";

type ItemProps = {
	text: string;
	Icon?: ComponentType<LucideProps>;
};

function Item({ text, Icon }: ItemProps) {
	return (
		<div className='flex'>
			{Icon && <Icon className='text-red-primary' size={18} />}
			<span className='ml-2'>{text}</span>
		</div>
	);
}

export default Item;
