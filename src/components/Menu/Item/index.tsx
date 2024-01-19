import { LucideProps } from "lucide-react";
import { ComponentType } from "react";
import { tv } from "tailwind-variants";
import ShortcutBadge from "../../ShortcutBadge";

const item = tv({
	base: "flex",
	variants: {
		hasIcon: {
			true: "ml-2",
		},
	},
});

type ItemProps = {
	text: string;
	Icon?: ComponentType<LucideProps>;
};

function Item({ text, Icon }: ItemProps) {
	return (
		<div className='flex'>
			{Icon && <Icon className='text-red-primary' size={18} />}
			<div className={item({ hasIcon: !!Icon })}>
				{text} <ShortcutBadge shortcut={["win", "P"]} />
			</div>
		</div>
	);
}

export default Item;
