type LinesProps = {
	lines: number;
};

function Lines({ lines }: LinesProps) {
	return (
		<div className='flex flex-col bg-primary min-h-full pl-4 pt-4 pb-4'>
			{Array.from({ length: lines }, (_, i) => (
				<div className='text-lg flex items-center justify-center w-full text-editor-primary' key={`line-${i}`}>
					{i + 1}
				</div>
			))}
		</div>
	);
}

export default Lines;
