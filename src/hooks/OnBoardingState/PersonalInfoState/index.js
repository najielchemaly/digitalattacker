export default function PersonalInfoState() {
	let fullname = ''
	let phoneNumber = ''
	let verificationCode = ''
	let emailAddress = ''
	let passcode = ''
	let confirmedPasscode = false
	let enableTouchId = false

	return {
		fullname,
		phoneNumber,
		verificationCode,
		emailAddress,
		passcode,
		confirmedPasscode,
		enableTouchId,
	}
}
