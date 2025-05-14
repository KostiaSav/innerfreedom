import { useEffect, useState } from 'react';
import AutoScrollGallery from '../../components/AutoScrollGallery/AutoScrollGallery';
import DarkBlock from '../../components/DarkBlock/DarkBlock';
import HeroSlider from '../../components/HeroSlider.tsx/HeroSlider';
import Badge from '../../ui/Badge/Badge';
import Button from '../../ui/Button/Button';
import './Hero.css';
import AutoScrollTags from '../../components/AutoScrollTags/AutoScrollTags';

const Hero = () => {
	const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 820);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 820);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<section className='hero'>
			<img src='/elipse-1.svg' alt='elipse' id='bg-elipse-1' />
			<img src='/elipse-2.svg' alt='elipse' id='bg-elipse-2' />
			<div className='container'>
				<div className='hero__content'>
					<div className='hero__text'>
						<div className='hero__title'>
							<Badge>Virtual Event</Badge>
							<p className='hero-date'>21-22 May 2025</p>
						</div>
						<h1 className='hero-heading'>
							Inner Freedom <br />
							Summit
						</h1>
						<p className='hero-subheading'>
							Exploring the Science and Strategies For
						</p>
						{isMobile && <AutoScrollTags />}
						<div className='hero__badges'></div>
						<Button
							text='GET ACCESS'
							styles={{ width: '205px', display: 'block', marginTop: '20px' }}
						/>
						<h3 className='hero__subheading--small'>
							Achieve <b className='text-upper'>BIG THINGS</b> without burnout
						</h3>

						<DarkBlock />
					</div>

					{isMobile ? <AutoScrollGallery /> : <HeroSlider />}
				</div>
			</div>
		</section>
	);
};

export default Hero;
