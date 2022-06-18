import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { colors, strings, variables } from '../../constants'
import { MyFeed, PayAndTransfer, MoneyCoach } from '..'
import {
	myFeedIcon,
	payTransferIcon,
	moneyCoachIcon,
} from '../../assets/images'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const Icon = ({ icon, tintColor }) => {
	return (
		<Image
			resizeMode={'center'}
			style={{ width: 25, height: 25, marginTop: 10, tintColor }}
			source={icon}
		/>
	)
}

export default createBottomTabNavigator(
	{
		MyFeed: {
			screen: MyFeed,
			navigationOptions: {
				title: strings.myFeed,
				tabBarIcon: ({ focused, tintColor }) => (
					<Icon
						icon={focused ? myFeedIcon : myFeedIcon}
						tintColor={tintColor}
					/>
				),
			},
		},
		PayAndTransfer: {
			screen: PayAndTransfer,
			navigationOptions: {
				title: strings.payAndTransfer,
				tabBarIcon: ({ focused, tintColor }) => (
					<Icon
						icon={focused ? payTransferIcon : payTransferIcon}
						tintColor={tintColor}
					/>
				),
			},
		},
		MoneyCoach: {
			screen: MoneyCoach,
			navigationOptions: {
				title: strings.moneyCoach,
				tabBarIcon: ({ focused, tintColor }) => (
					<Icon
						icon={focused ? moneyCoachIcon : moneyCoachIcon}
						tintColor={tintColor}
					/>
				),
			},
		},
	},
	{
		tabBarOptions: {
			activeTintColor: colors.white,
			inactiveTintColor: colors.lightGrey,
			activeBackgroundColor: colors.brownishGrey,
			inactiveBackgroundColor: colors.brownishGrey,
			tabStyle: {
				height: getStatusBarHeight() * 2,
				paddingBottom: variables.appMargin,
			},
		},
	}
)
