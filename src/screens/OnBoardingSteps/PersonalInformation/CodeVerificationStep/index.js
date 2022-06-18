import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  ImageButton,
  OnBoardingProgress,
  KeyboardView,
  OTPView,
  TextButton,
} from '../../../../components';
import {strings, screenName} from '../../../../constants';
import styles from '../../styles';
import {backArrow} from '../../../../assets/images';

export default function CodeVerificationStep(props) {
  const {navigation} = props;
  const {navigate, goBack} = navigation;
  const {params} = navigation.state;
  const {onSubmitPress, onBoardingState} = params || props.params;

  const [valid, setValid] = useState(true);
  const [resendDisabled, setResendDisabled] = useState(true);
  const [time, setTime] = useState('03:00');
  const [_interval, _setInterval] = useState();
  const steps = Object.keys(onBoardingState.personalInfo).length;

  function handleOnSubmitPress(code) {
    if (code === '000000') {
      setValid(true);

      onSubmitPress && onSubmitPress(code);
      onBoardingState.personalInfo.verificationCode = code;
      navigate(screenName.emailAddressStep, {onBoardingState});
    } else {
      setValid(false);
    }
  }

  useEffect(() => {
    setAttempsAndStartTimer();

    return () => didUnmount();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function setAttempsAndStartTimer() {
    try {
      await AsyncStorage.setItem('otp_attemps', '3');
      startTimer();
    } catch (error) {
      // Error saving data
    }
  }

  function startTimer() {
    const countDown = 60 * 3;
    var timer = countDown - 1,
      minutes,
      seconds;
    const interval = setInterval(function () {
      _setInterval(interval);

      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
      }

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      setTime(minutes + ':' + seconds);

      if (--timer < 0) {
        timer = countDown;
        setResendDisabled(false);
      }
    }, 1000);

    setResendDisabled(true);
  }

  function didUnmount() {
    clearInterval(_interval);
    setTime('00:00');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <ImageButton source={backArrow} onPress={() => goBack()} />
        <OnBoardingProgress step={strings.personalInfo} progress={3 / steps} />
      </View>
      <KeyboardView style={styles.contentView}>
        {/* <Image source={emailIcon} /> */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{strings.thanksWeSentYouCode}</Text>
          <Text style={styles.subtitle}>
            {strings.weSentCode} {onBoardingState.personalInfo.phoneNumber}
          </Text>
        </View>
        <OTPView valid={valid} onSubmit={code => handleOnSubmitPress(code)} />
        <View style={styles.keyboardAvoidingView}>
          <View style={styles.resendContainer}>
            <TextButton
              titleStyle={styles.resendButton}
              title={strings.resendCode}
              onPress={startTimer}
              disabled={resendDisabled}
            />
            <Text style={styles.resendTimer}>{time}</Text>
          </View>
        </View>
      </KeyboardView>
    </View>
  );
}

CodeVerificationStep.defaultProps = {
  params: {onSubmitPress: () => {}},
};
