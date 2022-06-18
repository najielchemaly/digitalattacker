import React from 'react'
import { View, Text } from 'react-native'

import {
	ImageButton,
	AccountHeaderInfo,
	AccountActions,
	AccountActionsItem,
	CardView,
	ContentScrollView,
} from '../../components'
import {
	profileIcon,
	helpIcon,
	transferIcon,
	addFundsIcon,
	paymentsIcon,
} from '../../assets/images'
import { strings, screenName } from '../../constants'
import styles from './styles'

export default function MyFeed(props) {
	const { navigation, data } = props
	const { navigate } = navigation
	// const { data } = navigation.state.params TODO

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View>
					<Text style={styles.title}>Hello Bodour</Text>
					<Text style={styles.date}>It's Wednesday September 5, 2020</Text>
				</View>
				<View style={styles.iconContainer}>
					<ImageButton
						style={styles.icon}
						source={profileIcon}
						onPress={() => {}}
					/>
					<ImageButton
						style={styles.icon}
						source={helpIcon}
						onPress={() => {}}
					/>
				</View>
			</View>
			<AccountHeaderInfo
				label={data.accountName}
				balance={data.balance}
				currency={strings.localCurrency}
				onPress={() => navigate(screenName.transactionView)}
			/>
			<AccountActions style={styles.accountActions}>
				<AccountActionsItem
					image={transferIcon}
					title={strings.transfer}
					onPress={() => navigate(screenName.beneficiaryList)}
				/>
				<AccountActionsItem
					image={addFundsIcon}
					title={strings.addMoney}
					onPress={() => navigate(screenName.shareIBAN)}
				/>
				<AccountActionsItem
					image={paymentsIcon}
					title={strings.pay}
					onPress={() => {}}
				/>
			</AccountActions>
			<ContentScrollView style={styles.feedView}>
				<View style={styles.cardViewContainer}>
					<CardView style={styles.cardView} />
					<CardView style={styles.cardView} />
					<CardView style={styles.cardView} />
				</View>
			</ContentScrollView>
		</View>
	)
}

MyFeed.defaultProps = {
	data: {
		accountName: 'Current Account',
		balance: '450,500.25',
	},
}
