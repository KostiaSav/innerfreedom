import './SpeakerCircleSection.css';

const speakers = [
	{ image: '/speakers/person.png', alt: 'Speaker 1' },
	{ image: '/speakers/person2.png', alt: 'Speaker 2' },
	{ image: '/speakers/person3.png', alt: 'Speaker 3' },
	{ image: '/speakers/person4.png', alt: 'Speaker 4' },
];

const SpeakerCircleSection: React.FC = () => {
	return (
		<section className='circle-section'>
			<div className='circle-container'>
				{speakers.map((speaker, index) => (
					<div
						key={index}
						className='circle-wrapper'
						style={{
							zIndex: speakers.length - index,
							position: 'relative',
							transform: `translateX(${-20 * index}px)`,
						}}
					>
						<img
							src={speaker.image}
							alt={speaker.alt}
							className='circle-image'
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default SpeakerCircleSection;
