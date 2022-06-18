import React from 'react';
import {View, Image} from 'react-native';
import PickerView from '../DropdownInput/PickerView';

import {appStyles, strings} from '../../constants/';
import styles from './styles';
import {dropdownArrow} from '../../assets/images';

export default function OnBoardingDropDown(props) {
  const {style, onValueChange, items, disabled, value} = props;

  function getItems() {
    let itemList = [];
    items.forEach(item => {
      itemList.push({
        label: item,
        value: item,
      });
    });
    return itemList;
  }

  return (
    <View
      pointerEvents={disabled && 'none'}
      style={[disabled && appStyles.disabled, style]}>
      <View style={styles.touchableContainer}>
        <PickerView
          value={value}
          items={getItems()}
          textInputProps={{
            style: styles.textInput,
            placeholder: strings.selectCountry,
          }}
          onValueChange={text => onValueChange(text)}
        />
        <Image style={styles.icon} source={dropdownArrow} />
      </View>
    </View>
  );
}

OnBoardingDropDown.defaultProps = {
  onValueChange: text => {},
  items: [],
};
