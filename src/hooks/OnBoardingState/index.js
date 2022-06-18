import PersonalInfoState from './PersonalInfoState'
import BusinessInfoState from './BusinessInfoState'
import AbsherState from './AbsherState'

export default function OnBoardingState() {
	const personalInfo = PersonalInfoState()
	const businessInfo = BusinessInfoState()
	const absher = AbsherState()

	return { personalInfo, businessInfo, absher }
}
