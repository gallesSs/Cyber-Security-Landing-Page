import Feature from './Feature.jsx';
import data from "../../data/features.json"
import s from "./Features.module.css"

const Features = () => {
	return (
		<section className={s.features}>
			<ul className={s.list}>
			{data.map((item) => {
				return (
					<li className={s.item} key={item.id}>
						<Feature src={item.src} header={item.header} info={item.info}/>
					</li>
				)
			})}
		</ul></section>

	);
};

export default Features;