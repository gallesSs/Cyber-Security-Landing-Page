import React, {useState} from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu.jsx';
import s from "./Header.module.css";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [closing, setClosing] = useState(false);

	const handleOpen = () => {
		setMenuOpen(true);
		setClosing(false); // просто показываем сразу
	};

	const handleClose = () => {
		setClosing(true); // начинаем анимацию
		setTimeout(() => {
			setMenuOpen(false); // удаляем через 300ms
			setClosing(false);
		}, 300);
	};

	return (
		<header className={s.header}>
			<img className={s.logo} src="/Header/Logo.png" alt="logo"/>
			<div className={s.mobileMenu}>
				{!menuOpen && <img src="/Header/Menubar.svg" alt="" onClick={handleOpen}/>}
				{menuOpen && <BurgerMenu handleClose={handleClose} isClosing={closing}/>}
			</div>
			<nav className={s.nav}>
				<ul className={s.navList}>
					<li className={s.listItem}><a href="">Demos</a></li>
					<li className={s.listItem}><a href="">About</a></li>
					<li className={s.listItem}><a href="">Blog</a></li>
					<li className={s.listItem}><a href="">Pages</a></li>
					<li className={s.listItem}><a href="">Contact</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
