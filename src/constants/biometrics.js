import { Alert, Platform } from 'react-native'
import FingerprintScanner from 'react-native-fingerprint-scanner'

import strings from './strings'

export default function Biometrics(props) {
	const { isTouchId, onSuccess, onFailure } = props

	function authenticate() {
		switch (Platform.OS) {
			case 'ios':
				const description = isTouchId ? strings.touchIdDesc : strings.faceIdDesc
				FingerprintScanner.authenticate({ description })
					.then(() => onSuccess())
					.catch(error => onFailure(error.name))
				break
			case 'android':
				if (requiresLegacyAuthentication()) {
					authLegacy()
				} else {
					authCurrent()
				}
				break
			default:
				break
		}
	}

	function requiresLegacyAuthentication() {
		return Platform.Version < 23
	}

	function authLegacy() {
		FingerprintScanner.authenticate({
			onAttempt: Alert.alert(error.message)
		})
			.then(() => {})
			.catch(error => onFailure(error.name))
			.finally(() => onSuccess())
	}

	function authCurrent() {
		FingerprintScanner.authenticate({
			description: isTouchId ? strings.touchIdDesc : strings.faceIdDesc
		})
			.then(() => {})
			.catch(error => onFailure(error.name))
			.finally(() => onSuccess())
	}

	return {
		authenticate
	}
}

Biometrics.defaultProps = {
	onSuccess: () => {},
	onFailure: () => {}
}
