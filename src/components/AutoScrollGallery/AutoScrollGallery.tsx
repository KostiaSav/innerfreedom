import './AutoScrollGallery.css';

const images = [
	'/speakers/speaker1.jpeg',
	'/speakers/speaker2.jpeg',
	'/speakers/speaker3.jpeg',
	'/speakers/speaker1.jpeg',
	'/speakers/speaker2.jpeg',
	'/speakers/speaker3.jpeg',
];

const AutoScrollGallery: React.FC = () => {
	return (
		<section className='scroll-gallery'>
			<div className='scroll-row scroll-left'>
				<div className='scroll-track'>
					{images.map((src, idx) => (
						<div key={`top-${idx}`} className='scroll-card'>
							<img src={src} alt={`Top ${idx}`} />
						</div>
					))}
					{images.map((src, idx) => (
						<div key={`top-dup-${idx}`} className='scroll-card'>
							<img src={src} alt={`Top ${idx} duplicate`} />
						</div>
					))}
				</div>
			</div>
			<div className='scroll-row scroll-right'>
				<div className='scroll-track'>
					{images.map((src, idx) => (
						<div key={`bot-${idx}`} className='scroll-card'>
							<img src={src} alt={`Bottom ${idx}`} />
						</div>
					))}
					{images.map((src, idx) => (
						<div key={`bot-dup-${idx}`} className='scroll-card'>
							<img src={src} alt={`Bottom ${idx} duplicate`} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AutoScrollGallery;
