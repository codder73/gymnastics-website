// Core packages
import Image from 'next/image'

/**
 * scss for themes elements should probably have a specific scss for it
 * /styles/blocks/hero.bg.module.scss
 */ 
import discipline from '../../../styles/sections/disciplines/disciplines.module.scss';
// import discipline from '../../../styles/disciplines/disciplines.module.scss';

export default function bgColor2() {
	return (
		<div className={`${discipline.colorfulV1}`}>
			<div className={`${discipline.barContainer} noEvents`}>
				<div className={`${discipline.barGradient}`}></div>
			</div>
			<div className={`${discipline.radialContainer} noEvents`}>
				{/* <Image src="/img/dataism-24.svg" className={`${discipline.svg_background}`} height={2000} width={2000} alt="Dataism 24 by Colorpong: https://ywft.us/2c4d58b21" /> */}
				<div className={`${discipline.radialGradient}`}></div>
			</div>
		</div>
	)
}