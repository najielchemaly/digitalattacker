import React, { useState } from 'react'
import { View, SectionList, Animated, Dimensions } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'

import {
	AccountActions,
	AccountActionsItem,
	HeaderView,
	AccountInfoCard,
	ListItemPlaceholder,
	TransactionListHeader,
	TransactionListItem
} from '../../../components'
import {
	transferIcon,
	addFundsIcon,
	paymentsIcon,
	backArrow
} from '../../../assets/images'
import { strings, screenName } from '../../../constants'
import styles from './styles'
import { getTranscationList } from '../../../constants/dummyData'

export default function TransactionView(props) {
	const { navigation, data } = props
	const { navigate, goBack } = navigation
	const screenHeight = Dimensions.get('window').height
	const [heightAnim] = useState(new Animated.Value(screenHeight * 0.5))
	// const { data } = navigation.state.params

	const gestureConfig = {
		velocityThreshold: 0.1,
		directionalOffsetThreshold: 80
	}

	const allTransactions = getTranscationList()
	const [filteredTransactions, setFilteredTransactions] = useState(
		allTransactions
	)

	function onOpenTransactionList() {
		Animated.timing(heightAnim, {
			toValue: screenHeight * 0.9,
			duration: 300
		}).start()
	}

	function onCloseTransactionList() {
		Animated.timing(heightAnim, {
			toValue: screenHeight * 0.5,
			duration: 300
		}).start()
	}

	return (
		<View style={styles.container}>
			<HeaderView
				leftIcon={backArrow}
				title={'Current Account'}
				onLeftPress={() => goBack()}
			/>
			<AccountInfoCard
				style={styles.accountInfoCard}
				label={data.accountName}
				balance={data.balance}
				currency={strings.localCurrency}
				onPress={() => navigate(screenName.accountDetails)}
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
			<Animated.View style={[styles.feedView, { height: heightAnim }]}>
				<GestureRecognizer
					style={styles.gestureView}
					onSwipeUp={() => onOpenTransactionList()}
					onSwipeDown={() => onCloseTransactionList()}
					config={gestureConfig}
				>
					<View style={styles.sliderBar}></View>
				</GestureRecognizer>
				{filteredTransactions.length !== 0 && (
					<SectionList
						sections={filteredTransactions}
						keyExtractor={(item, index) => item + index}
						renderSectionHeader={({ section }) => {
							const { date, totalAmount } = section.title
							return (
								<TransactionListHeader date={date} totalAmount={totalAmount} />
							)
						}}
						renderItem={({ item, index }) => {
							return (
								<TransactionListItem
									title={item.title}
									amount={item.amount}
									onPress={() => {}}
								/>
							)
						}}
						renderSectionFooter={() => <View style={styles.sectionSeparator} />}
					/>
				)}
				{filteredTransactions.length === 0 && (
					<ListItemPlaceholder
						style={styles.listItemPlaceholder}
						title={strings.oops}
						subtitle={strings.noTransactionsYet}
					/>
				)}
			</Animated.View>
		</View>
	)
}

TransactionView.defaultProps = {
	data: {
		accountName: 'Current Account',
		balance: '450,500.25'
	}
}
