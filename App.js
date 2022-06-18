import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Transfer,
  NewBeneficiary,
  BeneficiaryList,
  ActionStatus,
  ShareIBAN,
  TransferSummary,
  ViewBeneficiary,
  EditBeneficiary,
  OTPVerification,
  TransactionView,
  AccountDetails,
  InitialScreen,
  Login,
  PasscodeLogin,
  BiometricLogin,
  AppIntro,
  Qualifying,
  ContentView,
  FullNameStep,
  PhoneNumberStep,
  CodeVerificationStep,
  EmailAddressStep,
  PasscodeStep,
  ReEnterPasscodeStep,
  FaceIdStep,
  CountryOfBirthStep,
  EmploymentStep,
  OccupationStep,
  IncomeStep,
  TotalIncomeStep,
  AccountUseStep,
  USCitizenStep,
  ResidentTaxStep,
  SelectCardStep,
  SearchBeneficiary,
  VerifyAccountStep,
  AccountVerifiedStep,
  Tabbar,
} from './src/screens';
import {
  AlertView,
  DatePickerView,
  RecurringTransferView,
} from './src/components';
import {strings, colors} from './src/constants';

const MainNavigator = createStackNavigator({
  Tabbar: {
    screen: Tabbar,
    navigationOptions: () => ({headerShown: false, gestureEnabled: false}),
  },
  TransactionView: {
    screen: TransactionView,
    navigationOptions: () => ({headerShown: false}),
  },
  AccountDetails: {
    screen: AccountDetails,
    navigationOptions: () => ({headerShown: false}),
  },
  BeneficiaryList: {
    screen: BeneficiaryList,
    navigationOptions: () => ({headerShown: false}),
  },
  NewBeneficiary: {
    screen: NewBeneficiary,
    navigationOptions: () => ({headerShown: false}),
  },
  TransferSummary: {
    screen: TransferSummary,
    navigationOptions: () => ({headerShown: false}),
  },
  ViewBeneficiary: {
    screen: ViewBeneficiary,
    navigationOptions: () => ({headerShown: false}),
  },
  EditBeneficiary: {
    screen: EditBeneficiary,
    navigationOptions: () => ({headerShown: false}),
  },
  SearchBeneficiary: {
    screen: SearchBeneficiary,
    navigationOptions: () => ({headerShown: false}),
  },
  Transfer: {
    screen: Transfer,
    navigationOptions: () => ({headerShown: false}),
  },
  OTPVerification: {
    screen: OTPVerification,
    navigationOptions: () => ({headerShown: false}),
  },
  ActionStatus: {
    screen: ActionStatus,
    navigationOptions: () => ({headerShown: false, gestureEnabled: false}),
  },
  ShareIBAN: {
    screen: ShareIBAN,
    navigationOptions: () => ({headerShown: false}),
  },
});

const PersonalInformationNavigator = createStackNavigator({
  FullNameStep: {
    screen: FullNameStep,
    navigationOptions: () => ({headerShown: false}),
  },
  PhoneNumberStep: {
    screen: PhoneNumberStep,
    navigationOptions: () => ({headerShown: false}),
  },
  CodeVerificationStep: {
    screen: CodeVerificationStep,
    navigationOptions: () => ({headerShown: false}),
  },
  EmailAddressStep: {
    screen: EmailAddressStep,
    navigationOptions: () => ({headerShown: false}),
  },
  PasscodeStep: {
    screen: PasscodeStep,
    navigationOptions: () => ({headerShown: false}),
  },
  ReEnterPasscodeStep: {
    screen: ReEnterPasscodeStep,
    navigationOptions: () => ({headerShown: false}),
  },
  FaceIdStep: {
    screen: FaceIdStep,
    navigationOptions: () => ({headerShown: false}),
  },
});

const AbsherAccountNavigator = createStackNavigator({
  VerifyAccountStep: {
    screen: VerifyAccountStep,
    navigationOptions: () => ({headerShown: false}),
  },
  AccountVerifiedStep: {
    screen: AccountVerifiedStep,
    navigationOptions: () => ({headerShown: false}),
  },
});

const BusinessInformationNavigator = createStackNavigator({
  CountryOfBirthStep: {
    screen: CountryOfBirthStep,
    navigationOptions: () => ({headerShown: false}),
  },
  EmploymentStep: {
    screen: EmploymentStep,
    navigationOptions: () => ({headerShown: false}),
  },
  OccupationStep: {
    screen: OccupationStep,
    navigationOptions: () => ({headerShown: false}),
  },
  IncomeStep: {
    screen: IncomeStep,
    navigationOptions: () => ({headerShown: false}),
  },
  TotalIncomeStep: {
    screen: TotalIncomeStep,
    navigationOptions: () => ({headerShown: false}),
  },
  AccountUseStep: {
    screen: AccountUseStep,
    navigationOptions: () => ({headerShown: false}),
  },
  USCitizenStep: {
    screen: USCitizenStep,
    navigationOptions: () => ({headerShown: false}),
  },
  ResidentTaxStep: {
    screen: ResidentTaxStep,
    navigationOptions: () => ({headerShown: false}),
  },
  SelectCardStep: {
    screen: SelectCardStep,
    navigationOptions: () => ({headerShown: false}),
  },
});

const OnBoardingNavigator = createStackNavigator({
  AppIntro: {
    screen: AppIntro,
    navigationOptions: () => ({headerShown: false}),
  },
  Qualifying: {
    screen: Qualifying,
    navigationOptions: () => ({headerShown: false}),
  },
  PersonalInformationNavigator: {
    screen: PersonalInformationNavigator,
    navigationOptions: () => ({headerShown: false}),
  },
  AbsherAccountNavigator: {
    screen: AbsherAccountNavigator,
    navigationOptions: () => ({headerShown: false}),
  },
  BusinessInformationNavigator: {
    screen: BusinessInformationNavigator,
    navigationOptions: () => ({headerShown: false}),
  },
});

const LoginNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({headerShown: false}),
  },
  OTPVerification: {
    screen: OTPVerification,
    navigationOptions: () => ({headerShown: false}),
  },
  PasscodeLogin: {
    screen: PasscodeLogin,
    navigationOptions: () => ({headerShown: false}),
  },
  BiometricLogin: {
    screen: BiometricLogin,
    navigationOptions: () => ({headerShown: false}),
  },
});

const InitialNavigator = createStackNavigator({
  InitialScreen: {
    screen: InitialScreen,
    navigationOptions: () => ({headerShown: false}),
  },
  LoginNavigator: {
    screen: LoginNavigator,
    navigationOptions: () => ({headerShown: false}),
  },
  OnBoardingNavigator: {
    screen: OnBoardingNavigator,
    navigationOptions: () => ({headerShown: false}),
  },
});

const RootNavigator = createStackNavigator(
  {
    InitialNavigator: {
      screen: InitialNavigator,
      navigationOptions: () => ({headerShown: false}),
    },
    MainNavigator: {
      screen: MainNavigator,
      navigationOptions: () => ({headerShown: false}),
    },
    ContentView: {
      screen: ContentView,
      navigationOptions: () => ({headerShown: false}),
    },
    AlertView: {
      screen: AlertView,
      navigationOptions: () => ({
        headerShown: false,
        cardStyle: {backgroundColor: colors.transparent},
      }),
    },
    DatePickerView: {
      screen: DatePickerView,
      navigationOptions: () => ({
        headerShown: false,
        cardStyle: {backgroundColor: colors.transparent},
      }),
    },
    RecurringTransferView: {
      screen: RecurringTransferView,
      navigationOptions: () => ({
        headerShown: false,
        cardStyle: {backgroundColor: colors.transparent},
      }),
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

strings.setLanguage('en');

export default createAppContainer(RootNavigator);
