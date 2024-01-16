import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
	base: "p-1.5 pl-3 pr-3 rounded-xsm hover:opacity-70 text-sm",
	variants: {
		primary: {
			true: "bg-red-primary text-editor-primary",
		},
		outlined: {
			true: "bg-transparent border-1 border-red-primary",
		},
	},
	defaultVariants: {
		primary: true,
	},
});

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

function Button({
	children,
	className,
	primary,
	outlined,
	...rest
}: ButtonProps) {
	return (
		<button
			className={button({ className, primary, outlined })}
			type='button'
			{...rest}>
			{children}
		</button>
	);
}

export default Button;
