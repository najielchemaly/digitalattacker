import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Image} from 'react-native';

import styles from './styles';
import {HeaderView, ActionButton} from '../../components';
import {backArrow} from '../../assets/images';
import {strings, screenName} from '../../constants';

export default function AppIntro(props) {
  const {navigation} = props;
  const {navigate, goBack} = navigation;

  const slides = navigation.getParam('slides', []);
  const onSubmit = navigation.getParam('onSubmit', {});

  function renderPages(data) {
    const {item} = data;
    return (
      <View style={styles.contentView}>
        <Image source={item.image} style={styles.imageView} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    );
  }

  function renderNextButton() {
    return (
      <View pointerEvents={'none'}>
        <ActionButton style={styles.actionButton} title={strings.next} />
      </View>
    );
  }

  function renderDoneButton() {
    return (
      <ActionButton
        style={styles.actionButton}
        title={strings.letsGo}
        onPress={() => navigate(screenName.qualifying)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <HeaderView
        leftIcon={backArrow}
        onLeftPress={() => goBack(screenName.initialScreen)}
      />
      <AppIntroSlider
        data={slides}
        renderItem={data => renderPages(data)}
        onDone={() => onSubmit()}
        activeDotStyle={styles.activeDot}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        bottomButton
      />
    </View>
  );
}
