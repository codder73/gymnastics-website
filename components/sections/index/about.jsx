// Core packages
import Image from 'next/image'
import Link from 'next/link'
// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About"
					preTitle="courage is contagious"
					subTitle="With a diverse skill set that includes leadership, Communication, Empathy, Motivation, Commitment, mountaineering, and branding, A well-all-arounded professional coach."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/sirTK.png" alt="Sir TK Photo"/>
						{/* <Image src="/img/sirTK.png" width={500} height={1700} alt="Sir TK Photo"/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Dr. T. S. Kundu"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="Meet the Master of Gymnastics: Coach DR. T. S. Kundu. With grace and precision, they guide aspiring gymnasts to new heights. Their meticulous training methods, combined with a deep understanding of the sport, foster excellence and instill unwavering confidence. With Coach Dr. T. S. Kundu sir's guidance, the child who is reading in school has won medals in states, nationals, internationals and as well as Asain games also. "
						/>
						<BadgesBlock 
							title="And much more..." 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="Not only he was only good in sports but he was also a good student he was also good in studies and organising things. As he has organised a Open nationals gymnastics tournament, and his national's were of the level of internationals..."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
						<Link href={'/about'}>
						KNOW MORE ABOUT US ALSO...
						</Link>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'qrcode', 			name: 'Digital Strategy', 	type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'cubes', 			name: 'Product Strategy', 	type: 'far' },
	{ key: 'layer-plus', 		name: 'Brand Strategy', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]