import Color 	from '../../components/utils/page.colors.util'
import ComingSoon from '../../components/sections/comingsoon'

import colors 		from '../../content/case-studies/_colors.json'
import settings 	from '../../content/_settings.json'

import Dis_home from '../../components/disciplines/dis_home'

//
export default function CaseStudies({}) {
	return (
		<>	
			<Color colors={colors} />
            <Dis_home />
		</>
	)
}