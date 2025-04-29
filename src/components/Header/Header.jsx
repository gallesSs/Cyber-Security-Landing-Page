import React, {useState} from 'react';
import {slide as Menu} from 'react-burger-menu';
import s from './Header.module.css';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setMenuOpen(true);
	};

	const handleCloseClick = () => {
		setMenuOpen(false)
	}

	return (
		<div>
			<header className={s.header}>
				{!menuOpen && <h1 onClick={handleMenuClick} style={{cursor: 'pointer'}}>123</h1>}

				<Menu
					right
					isOpen={menuOpen}
					onOpen={handleMenuClick}
					onClose={handleCloseClick}
					customBurgerIcon={false} // отключаем стандартную иконку
				>
					<button onClick={handleCloseClick} style={{marginBottom: '20px'}}>
						✕ Закрыть
					</button>
					<a id="home" className="menu-item" href="/">Home</a>
					<a id="about" className="menu-item" href="/about">About</a>
					<a id="contact" className="menu-item" href="/contact">Contact</a>
				</Menu>
			</header>
		</div>
	);
};

export default Header;
