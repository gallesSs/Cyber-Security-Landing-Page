const Feature = ({src, header, info}) => {
	return (
		<>
			<img src={src} alt=""/>
			<h2 className="text-lg font-bold">{header}</h2>
			<p className="text-base text-[#12141D] text-center">{info}</p>
		</>
	);
};

export default Feature;