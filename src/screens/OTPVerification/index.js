import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import { backArrow } from '../../assets/images'
import { OTPView, TextButton, HeaderView, KeyboardView } from '../../components'
import { strings } from '../../constants'

export default function OTPVerification(props) {
	const { navigation } = props
	const { goBack } = navigation
	const { title, message, onSubmit } = navigation.state.params

	const [valid, setValid] = useState(true)
	const [resendDisabled, setResendDisabled] = useState(true)
	const [time, setTime] = useState('03:00')
	const [_interval, _setInterval] = useState()

	useEffect(() => {
		startTimer()

		return () => didUnmount()
	}, [])

	function handleOnSubmitPress(code) {
		if (code === '000000') {
			setValid(true)
			didUnmount()
			onSubmit()
		} else {
			setValid(false)
		}
	}

	function startTimer() {
		const countDown = 60 * 3
		var timer = countDown - 1,
			minutes,
			seconds
		const interval = setInterval(function() {
			_setInterval(interval)

			minutes = parseInt(timer / 60, 10)
			seconds = parseInt(timer % 60, 10)

			if (minutes === 0 && seconds === 0) {
				clearInterval(interval)
			}

			minutes = minutes < 10 ? '0' + minutes : minutes
			seconds = seconds < 10 ? '0' + seconds : seconds

			setTime(minutes + ':' + seconds)

			if (--timer < 0) {
				timer = countDown
				setResendDisabled(false)
			}
		}, 1000)

		setResendDisabled(true)
	}

	function didUnmount() {
		clearInterval(_interval)
		setTime('00:00')
	}

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				onLeftPress={() => {
					didUnmount()
					goBack()
				}}
			/>
			<View style={styles.textContainer}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.message}>{message}</Text>
			</View>
			<View style={styles.otpContainer}>
				<OTPView valid={valid} onSubmit={code => handleOnSubmitPress(code)} />
			</View>
			<KeyboardView style={styles.keyboardAvoidingView}>
				<View style={styles.resendContainer}>
					<TextButton
						titleStyle={styles.resendButton}
						title={strings.resendCode}
						onPress={startTimer}
						disabled={resendDisabled}
					/>
					<Text style={styles.resendTimer}>{time}</Text>
				</View>
			</KeyboardView>
		</View>
	)
}
