import React from 'react'
import { TouchableOpacity, Text, Animated } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import styles from './styles'
import { viewIcon, deleteIcon } from '../../assets/images'

export default function BeneficiaryItem(props) {
	const { item, onPress, swipeable, onViewPress, onDeletePress } = props

	let swipeableRef = null

	function renderRightActions(_, dragX) {
		const scale = dragX.interpolate({
			inputRange: [-80, 0],
			outputRange: [1, 0],
			extrapolate: 'clamp'
		})
		return (
			<Animated.View style={styles.rightAction}>
				<RectButton
					style={styles.rightAction}
					onPress={() => {
						swipeableRef.close()
						onViewPress()
					}}
				>
					<Animated.View
						style={[styles.swipeViewAction, { transform: [{ scale }] }]}
					>
						<Animated.Image source={viewIcon} />
					</Animated.View>
				</RectButton>
				<RectButton
					style={styles.rightAction}
					onPress={() => {
						swipeableRef.close()
						onDeletePress()
					}}
				>
					<Animated.View
						style={[styles.swipeDeleteAction, { transform: [{ scale }] }]}
					>
						<Animated.Image source={deleteIcon} />
					</Animated.View>
				</RectButton>
			</Animated.View>
		)
	}

	return (
		<Swipeable
			ref={ref => (swipeableRef = ref)}
			enabled={swipeable}
			friction={2}
			leftThreshold={80}
			rightThreshold={40}
			renderRightActions={renderRightActions}
			close
		>
			<TouchableOpacity
				style={styles.container}
				TouchableOpacity={0.8}
				onPress={() => onPress()}
			>
				<Text style={styles.beneficiaryName}>{item.beneficiaryName}</Text>
				<Text style={styles.beneficiaryIban}>{item.beneficiaryIban}</Text>
			</TouchableOpacity>
		</Swipeable>
	)
}

BeneficiaryItem.defaultProps = {
	swipeable: false,
	onPress: () => {},
	onViewPress: () => {},
	onDeletePress: () => {}
}
