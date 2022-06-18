import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import PickerView from './PickerView';

import {appStyles, strings} from '../../constants/';
import styles from './styles';
import {dropdownArrow} from '../../assets/images';

export default function DropdownInput(props) {
  const {
    title,
    style,
    onValueChange,
    items,
    errorMessage,
    optional,
    disabled,
    valid,
    value,
  } = props;
  const [isValid, setIsValid] = useState(true);

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

  const showError = !isValid || !valid;

  return (
    <View
      pointerEvents={disabled && 'none'}
      style={[styles.container, disabled && appStyles.disabled, style]}>
      <Text style={[styles.title, showError && appStyles.error]}>
        {title}
        {optional && strings.optional}
      </Text>
      <View
        style={[
          styles.touchableContainer,
          appStyles.fieldBox,
          showError && appStyles.error,
        ]}>
        <PickerView
          value={value}
          items={getItems()}
          onValueChange={text => {
            setIsValid(text !== null);
            onValueChange(text);
          }}
        />
        <Image style={styles.icon} source={dropdownArrow} />
      </View>
      {showError && <Text style={[appStyles.errorLabel]}>{errorMessage}</Text>}
    </View>
  );
}

DropdownInput.defaultProps = {
  valid: true,
  onValueChange: text => {},
  items: [],
};
