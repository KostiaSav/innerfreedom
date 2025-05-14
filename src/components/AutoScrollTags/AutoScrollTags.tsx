import './AutoScrollTags.css';

const tags = [
	{ image: '/topics/deep.jpeg', label: 'Meta skills' },
	{ image: '/topics/deep.jpeg', label: 'Deep work' },
	{ image: '/topics/deep.jpeg', label: 'Breathwork' },
	{ image: '/topics/deep.jpeg', label: 'Energy' },
	{ image: '/topics/deep.jpeg', label: 'Focus' },
	{ image: '/topics/deep.jpeg', label: 'Clarity' },
];

const AutoScrollTags: React.FC = () => {
	return (
		<div className='tag-scroll'>
			<div className='tag-track'>
				{[...tags, ...tags].map((tag, idx) => (
					<div key={idx} className='tag-item'>
						<img src={tag.image} alt={tag.label} />
						<span>{tag.label}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default AutoScrollTags;
