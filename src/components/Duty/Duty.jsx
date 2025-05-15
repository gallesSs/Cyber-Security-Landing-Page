import s from "./Duty.module.css"

const Duty = () => {
	return (
		<section className={s.duty}>
			<ul className={s.list}>
				<li className={s.img}>
					<picture>
						<source srcSet="/Duty/duty-mobile.png" media="(max-width: 767px)"/>
						<source srcSet="/Duty/duty.png" media="(min-width: 768px)"/>
						<img src="/Duty/duty-mobile.png" alt="Duty"/>
					</picture></li>
				<li className={s.h2}><h2 className="font-bold text-5xl">We take care of your website</h2></li>
				<li className={s.p}><p className="text-base text-[#12141D]">We secure websites by automatically finding and fixing threats. Website security software protects your data website from malicious cyber threats. </p></li>
			</ul>
		</section>
	);
};

export default Duty;