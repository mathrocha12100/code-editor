import { PropsWithChildren } from "react";
import { VariantProps, tv } from "tailwind-variants";

const badge = tv({
	base: "absolute -top-1 -right-1 rounded-full text-sm flex items-center justify-center",
	variants: {
		xsm: {
			true: "w-3 h-3 text-[8px]",
		},
		sm: {
			true: "w-4 h-4 text-[8px]",
		},
		md: {
			true: "w-6 h-6",
		},
		lg: {
			true: "w-8 h-8",
		},
	},
});

type BadgeProps = {
	value: number;
	className?: string;
} & PropsWithChildren &
	VariantProps<typeof badge>;

function Badge({ children, value, className, ...rest }: BadgeProps) {
	return (
		<div className='relative'>
			<span className={badge({ ...rest, className })}>{value >= 10 ? "9+" : value}</span>
			{children}
		</div>
	);
}

export default Badge;
