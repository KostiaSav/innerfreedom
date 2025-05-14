import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const isActive = (path: string) => location.pathname === path;

	const toggleMenu = () => setMenuOpen(prev => !prev);

	return (
		<header className='header'>
			<div className='container'>
				<div className='header__wrapper'>
					<Link to='/' className='header__logo'>
						<img src='/logo.svg' alt='Logo' className='header__logo-img' />
					</Link>

					{/* Burger Icon */}
					<div
						className={`burger ${menuOpen ? 'open' : ''}`}
						onClick={toggleMenu}
					>
						<span className='burger-line' />
						<span className='burger-line' />
						<span className='burger-line' />
					</div>

					<nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
						<ul className='header__nav-list'>
							{['/', '/about', '/services', '/contact'].map((path, idx) => (
								<li
									key={path}
									className={`header__nav-item ${
										isActive(path) ? 'active' : ''
									}`}
								>
									<Link
										to={path}
										className='header__nav-link'
										onClick={() => setMenuOpen(false)}
									>
										{['Home', 'About', 'Services', 'Contact'][idx]}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
