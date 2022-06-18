import { Share, Alert, Linking } from 'react-native'
import { StackActions, NavigationActions } from 'react-navigation'

import { strings, Biometrics } from '.'
import screenName from './screenName'
import {
	timeoutIcon,
	jailbrokenIcon,
	userBlockedIcon,
	noInternetIcon,
	oopsIcon,
} from '../assets/images'

async function handleOnSharePress(message) {
	try {
		const result = await Share.share({
			message: message,
		})

		if (result.action === Share.sharedAction) {
			if (result.activityType) {
				// shared with activity type of result.activityType
			} else {
				// shared
			}
		} else if (result.action === Share.dismissedAction) {
			// dismissed
		}
	} catch (error) {
		// handle error
	}
}

function showJailbrokenAlert(navigation) {
	const { navigate } = navigation
	const data = {
		image: jailbrokenIcon,
		title: strings.deviceNonCompliant,
		message: strings.deviceNonCompliantDesc,
		confirmTitle: strings.ok,
	}

	navigate(screenName.alertView, data)
}

function showSessionExpiredAlert(navigation) {
	const { navigate } = navigation
	const data = {
		image: timeoutIcon,
		title: strings.sessionExpired,
		message: strings.sessionExpiredDesc,
		confirmTitle: strings.ok,
	}

	navigate(screenName.alertView, data)
}

function showUserBlockedAlert(navigation) {
	const { navigate } = navigation
	const data = {
		image: userBlockedIcon,
		title: strings.userBlocked,
		message: strings.userBlockedDesc,
		confirmTitle: strings.resetPasscode,
		onConfirmPress: () => {},
	}

	navigate(screenName.alertView, data)
}

function showNoInternetAlert(navigation) {
	const { navigate } = navigation
	const data = {
		image: noInternetIcon,
		title: strings.sorry,
		message: strings.noInternet,
		confirmTitle: strings.ok,
	}

	navigate(screenName.alertView, data)
}

function showNumberNotRecognisedAlert(navigation) {
	const { navigate } = navigation
	const data = {
		title: strings.numberNotRecognised,
		message: strings.numberNotRecognisedDesc,
		confirmTitle: `${strings.iAmNewToBank} ${strings.appName}`,
		onConfirmPress: () => {},
	}

	navigate(screenName.alertView, data)
}

function showAppMaintenanceAlert(navigation) {
	const { navigate } = navigation
	const data = {
		title: strings.sorry,
		message: strings.appMaintenance,
		confirmTitle: strings.ok,
	}

	navigate(screenName.alertView, data)
}

function showNotSaudiMobileAlert(navigation) {
	const { navigate } = navigation
	const data = {
		image: oopsIcon,
		title: strings.oops,
		message: strings.notSaudiMobileDesc,
		confirmTitle: strings.ok,
	}

	navigate(screenName.alertView, data)
}

function showExistingMobileAlert(navigation) {
	const { navigate, goBack } = navigation
	const data = {
		title: strings.error,
		message: strings.existingMobileDesc,
		confirmTitle: strings.backToLogin,
		onConfirmPress: () => goBack(screenName.initialScreen),
	}

	navigate(screenName.alertView, data)
}

function showNoneUSAccountAlert(navigation) {
	const { navigate, goBack } = navigation
	const data = {
		image: oopsIcon,
		title: strings.oops,
		message: strings.noneUSAccountDesc,
		confirmTitle: strings.goToNearestBranch,
		onConfirmPress: () => {},
		cancelTitle: strings.backToHomePage,
		onCancelPress: () => goBack(screenName.initialScreen),
	}

	navigate(screenName.alertView, data)
}

function showUSCitizenAlert(navigation) {
	const { navigate, goBack } = navigation
	const data = {
		title: strings.oops,
		message: strings.usCitizenDesc,
		confirmTitle: strings.backToHomePage,
		onConfirmPress: () => goBack(screenName.initialScreen),
	}

	navigate(screenName.alertView, data)
}

function showDeleteBeneficiaryAlert(navigation, beneficiaryName) {
	const { navigate, goBack } = navigation
	const data = {
		title: strings.delete,
		message: `${strings.deleteBeneficiaryPrefix} ${beneficiaryName} ${
			strings.deleteBeneficiarySuffix
		}`,
		confirmTitle: strings.deleteBeneficiaryConfirm,
		onConfirmPress: () => {},
		cancelTitle: strings.cancel,
	}

	navigate(screenName.alertView, data)
}

function showNoAsherAccountAlert(navigation) {
	const { navigate } = navigation
	const data = {
		image: oopsIcon,
		title: strings.sorry,
		message: strings.noAbsherAccountDesc,
		confirmTitle: strings.goToNearestBranch,
		onConfirmPress: () => openUrl('https://www.nbk.com/kuwait/find-us.html'),
		cancelTitle: strings.contactSupport,
		onCancelPress: () => openUrl('https://www.nbk.com/kuwait/contact-us.html'),
	}

	navigate(screenName.alertView, data)
}

function handleOnActivateBiometricPress(isTouchId, onSuccess) {
	const data = {
		isTouchId,
		onSuccess: () => onSuccess && onSuccess(),
		onFailure: () => {
			const error = isTouchId
				? strings.touchIdNotSupported
				: strings.faceIdNotSupported
			Alert.alert(error)
		},
	}
	Biometrics(data).authenticate()
}

function navigateToMyFeed(navigation) {
	const mainStack = StackActions.reset({
		index: 0,
		actions: [
			NavigationActions.navigate({
				routeName: screenName.mainNavigator,
			}),
		],
	})
	navigation.dispatch(mainStack)
}

function validateText(text, regex) {
	if (regex === null) return true

	try {
		return new RegExp(regex).test(text)
	} catch {
		return false
	}
}

async function openUrl(url) {
	const supported = await Linking.canOpenURL(url)
	if (supported) {
		// Opening the link with some app, if the URL scheme is "http" the web link should be opened
		// by some browser in the mobile
		await Linking.openURL(url)
	} else {
		console.log('openURL is not supported')
	}
}

export {
	handleOnSharePress,
	showSessionExpiredAlert,
	showJailbrokenAlert,
	showUserBlockedAlert,
	showNoInternetAlert,
	showNumberNotRecognisedAlert,
	showAppMaintenanceAlert,
	handleOnActivateBiometricPress,
	validateText,
	showNotSaudiMobileAlert,
	showExistingMobileAlert,
	showNoneUSAccountAlert,
	showUSCitizenAlert,
	navigateToMyFeed,
	showDeleteBeneficiaryAlert,
	showNoAsherAccountAlert,
	openUrl,
}
