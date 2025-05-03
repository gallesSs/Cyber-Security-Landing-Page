import React, {useState, useEffect} from 'react';
import s from "./BurgerMenu.module.css";

const BurgerMenu = ({handleClose, isClosing}) => {
	const [animateClass, setAnimateClass] = useState('');

	useEffect(() => {
		if (isClosing) {
			// при закрытии → убираем класс показа
			setAnimateClass(s.hide);
		} else {
			// при открытии → даём 1 тик, чтобы браузер успел применить .container без .show
			const timer = setTimeout(() => {
				setAnimateClass(s.show);
			}, 10);
			return () => clearTimeout(timer);
		}
	}, [isClosing]);

	return (
		<div className={`${s.container} ${animateClass}`}>
			<p onClick={handleClose}>Close</p>
			<ul>
				<li>1</li>
				<li>2</li>
				<li>3</li>
			</ul>
		</div>
	);
};

export default BurgerMenu;
