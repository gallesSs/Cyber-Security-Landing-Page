import s from "./Hero.module.css"
import {IoSearch} from "react-icons/io5";


const Hero = () => {
	return (
		<section className={s.hero}>
			<div className={s.container}>

				<span className={s.upText}>Ensuring maximum security</span>
				<h1 className={s.headerText}>Protect all your data with strong security access</h1>
				<p className={s.info}>This is software that protects all your data, including strong security access. Use data
					as
					needed and provide
					security.</p>
				<button className={s.btn}><IoSearch className={s.icon}/><span
					className={s.btnText}>Scan Your Website - Free!</span></button>
				<img className={s.img} src="/Hero/Hero.png" alt="hero"/>
			</div>

		</section>
	);
};

export default Hero;