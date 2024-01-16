import { VariantProps, tv } from "tailwind-variants";

const spacing = tv({
	base: "w-full rounded-md",
	variants: {
		sm: {
			true: "h-[1px]",
		},
		md: {
			true: "h-[2px]",
		},
		lg: {
			true: "h-1",
		},
	},
});

type SpacingProps = {
	className?: string;
} & VariantProps<typeof spacing>;

function Spacing({ className, ...rest }: SpacingProps) {
	return <hr className={spacing({ className, ...rest })} />;
}

export default Spacing;
