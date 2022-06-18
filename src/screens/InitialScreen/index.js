import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Video from "react-native-video";

import styles from "./styles";
import strandsPFM from "../../assets/strands_pfm.mp4";
import { LanguageToggle, ActionButton } from "../../components";
import { strings, screenName } from "../../constants";
import { getAppIntroList } from "../../constants/dummyData";

export default function InitialScreen(props) {
  const { navigation } = props;
  const { navigate } = navigation;
  const [videoPaused, setVideoPaused] = useState(false);

  let videoPlayer = null;

  function invalidateVideoPlayer() {
    setVideoPaused(true);
  }

  function handleOnVideoError(error) {}

  function handleOnStartOnBoardingPress() {
    invalidateVideoPlayer();

    navigate({
      routeName: screenName.onBoardingNavigator,
      key: screenName.initialScreen,
      params: {
        slides: getAppIntroList(),
        onSubmit: () => {},
      },
    });
  }

  function handleOnLoginPress() {
    invalidateVideoPlayer();

    navigate({
      routeName: screenName.loginNavigator,
      key: screenName.initialScreen,
    });
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{strings.appName}</Text>
        <Video
          resizeMode={"cover"}
          source={strandsPFM}
          ref={(ref) => (videoPlayer = ref)}
          onError={(error) => handleOnVideoError(error)}
          style={styles.videoView}
          paused={videoPaused}
        />
        <LanguageToggle
          style={styles.languageToggle}
          onChangeValue={(lang) => strings.setLanguage(lang)}
        />
      </View>
      <View>
        <ActionButton
          style={styles.actionButton}
          title={`${strings.iAmNewToBank} ${strings.appName}`}
          onPress={() => handleOnStartOnBoardingPress()}
        />
        <ActionButton
          onPress={() => handleOnLoginPress()}
          style={styles.actionButton}
          title={strings.login}
          light
        />
      </View>
    </View>
  );
}
