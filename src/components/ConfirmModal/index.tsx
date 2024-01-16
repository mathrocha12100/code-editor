import { AlertCircle, X } from "lucide-react";
import Button from "../Button";
import ButtonIcon from "../ButtonIcon";
import Modal from "../Modal";

type ConfirmModalLangs = {
	title: string;
	description: string;
	cancel: string;
	confirm: string;
};

type ConfirmModalProps = {
	open: boolean;
	setOpen: (arg: boolean) => void;
	langs: ConfirmModalLangs;
};

function ConfirmModal({ open, langs, setOpen }: ConfirmModalProps) {
	const { cancel, confirm, description, title } = langs;

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Modal open={open} onClose={handleClose} overlay>
			<div className='p-4 bg-primary border-1 border-tertiary rounded-md flex flex-col max-w-[500px]'>
				<div className='flex justify-between items-center mb-3'>
					<AlertCircle className='text-rose-600 w-[22px] h-[22px]' />
					<ButtonIcon onClick={handleClose} unselected className='p-0'>
						<X className='w-[22px] h-[22px] text-white-primary' />
					</ButtonIcon>
				</div>
				<div className='flex'>
					<h1 className='text-white-primary mb-2 text-xl font-bold'>{title}</h1>
				</div>
				<span className='text-sm text-white-primary/90'>{description}</span>

				<div className='flex mt-8'>
					<Button className='mr-2'>{confirm}</Button>
					<Button outlined>{cancel}</Button>
				</div>
			</div>
		</Modal>
	);
}

export default ConfirmModal;
