type InfoProps = {
	text: string;
};

function Info({ text }: InfoProps) {
	return <span className='text-sm text-editor-primary'>{text}</span>;
}

export default Info;
