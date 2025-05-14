import { useEffect, useState } from 'react';
import './HeroSlider.css';

interface Slide {
	image: string;
	title: string;
	subtitle: string;
	name: string;
}

const slides: Slide[] = [
	{
		image: '/speakers/speaker1.jpeg',
		title: 'Keynote speaker',
		subtitle: 'For modern leaders',
		name: 'John Doe',
	},
	{
		image: '/speakers/speaker2.jpeg',
		title: 'Guest speaker',
		subtitle: 'Inspiration & Growth',
		name: 'Jane Smith',
	},
	{
		image: '/speakers/speaker3.jpeg',
		title: 'Industry expert',
		subtitle: 'Tech & Innovation',
		name: 'Carlos Rivera',
	},
];

const HeroSlider: React.FC = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const getSlideClass = (index: number): string => {
		if (index === currentIndex) return 'hero__slide center';
		if (index === (currentIndex + 1) % slides.length)
			return 'hero__slide right';
		if (index === (currentIndex - 1 + slides.length) % slides.length)
			return 'hero__slide left';
		return 'hero__slide hidden';
	};

	return (
		<div className='hero__slider'>
			<div className='hero__slider-wrapper'>
				{slides.map((slide, index) => (
					<div
						key={index}
						className={getSlideClass(index)}
						style={{ backgroundImage: `url(${slide.image})` }}
					>
						<div className='hero__slide-content'>
							<p>{slide.title}</p>
							<p>{slide.subtitle}</p>
							<h3>{slide.name}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default HeroSlider;
