import React, {useState} from 'react';
import {
  Keyboard,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import isEqual from 'lodash.isequal';
import {Picker} from '@react-native-picker/picker';

import styles from './styles';
import {colors, strings} from '../../../constants';

export default function PickerView(props) {
  const {children, useNativeAndroidPickerStyle} = props;

  const items = handlePlaceholder({
    placeholder: props.placeholder,
  }).concat(props.items);

  const [selectedItem, setSelectedItem] = useState(
    getSelectedItem({
      items,
      key: props.itemKey,
      value: props.value,
    }),
  );
  const [showPicker, setShowPicker] = useState(false);
  const [doneDepressed, setDoneDepressed] = useState(false);
  const [animationType, setAnimationType] = useState('slide');

  function handlePlaceholder({placeholder}) {
    if (isEqual(placeholder, {})) {
      return [];
    }
    return [placeholder];
  }

  function getSelectedItem({items, key, value}) {
    let index = items.findIndex(item => {
      if (item.key && key) {
        return isEqual(item.key, key);
      }
      return isEqual(item.value, value);
    });
    if (index === -1) {
      index = 0;
    }

    return {
      selectedItem: items[index] || {},
      index,
    };
  }

  function onValueChange(value, index) {
    props.onValueChange(value, index);
    setSelectedItem(items[index]);
  }

  function setInputRef(ref) {}

  function getPlaceholderStyle() {
    const {placeholder} = props;

    if (!isEqual(placeholder, {}) && selectedItem.label === placeholder.label) {
      return {
        ...styles.placeholder,
      };
    }
    return {};
  }

  function triggerOpenCloseCallbacks() {
    const {onOpen, onClose} = props;

    if (!showPicker && onOpen) {
      onOpen();
    }

    if (showPicker && onClose) {
      onClose();
    }
  }

  function togglePicker(animate = false, postToggleCallback) {
    const {disabled} = props;

    if (disabled) {
      return;
    }

    if (!showPicker) {
      Keyboard.dismiss();
    }

    triggerOpenCloseCallbacks();

    setAnimationType(animate ? 'slide' : undefined);
    setShowPicker(!showPicker);

    if (postToggleCallback) {
      postToggleCallback();
    }
  }

  function renderPickerItems() {
    return items.map(item => {
      return (
        <Picker.Item
          label={item.label}
          value={item.value}
          key={item.key || item.label}
          color={item.color}
        />
      );
    });
  }

  function renderInputAccessoryView() {
    const {
      InputAccessoryView,
      doneText,
      onUpArrow,
      onDownArrow,
      onDonePress,
      touchableDoneProps,
    } = props;

    if (InputAccessoryView) {
      return <InputAccessoryView />;
    }

    return (
      <View style={styles.modalViewMiddle}>
        <View style={styles.chevronContainer}>
          <TouchableOpacity
            activeOpacity={onUpArrow ? 0.5 : 1}
            onPress={onUpArrow && onUpArrow}>
            <View
              style={[
                styles.chevron,
                styles.chevronUp,
                onUpArrow && styles.chevronActive,
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={onDownArrow ? 0.5 : 1}
            onPress={onDownArrow && onDownArrow}>
            <View
              style={[
                styles.chevron,
                styles.chevronDown,
                onDownArrow && styles.chevronActive,
              ]}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => togglePicker(true, onDonePress)}
          onPressIn={() => setDoneDepressed(true)}
          onPressOut={() => setDoneDepressed(false)}
          hitSlop={{top: 4, right: 4, bottom: 4, left: 4}}
          {...touchableDoneProps}>
          <View>
            <Text
              allowFontScaling={false}
              style={[styles.done, doneDepressed && styles.doneDepressed]}>
              {doneText}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  function renderTextInputOrChildren() {
    const {children, textInputProps, value} = props;

    if (children) {
      return (
        <View pointerEvents="box-only" style={styles.container}>
          {children}
        </View>
      );
    }

    return (
      <View pointerEvents="box-only" style={styles.container}>
        <TextInput
          style={[styles.textInput, getPlaceholderStyle()]}
          value={selectedItem.label || value}
          ref={setInputRef}
          editable={false}
          {...textInputProps}
        />
      </View>
    );
  }

  function renderIOS() {
    const {pickerProps, touchableWrapperProps} = props;
    const selectedValue = selectedItem.value || items[0].value;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => togglePicker(true)}
          activeOpacity={1}
          {...touchableWrapperProps}
          style={styles.container}>
          {renderTextInputOrChildren()}
        </TouchableOpacity>
        <Modal
          visible={showPicker}
          transparent
          animationType={animationType}
          supportedOrientations={['portrait']}>
          <TouchableOpacity
            style={styles.container}
            onPress={() => togglePicker(true)}
          />
          {renderInputAccessoryView()}
          <View style={styles.modalViewBottom}>
            <Picker
              onValueChange={onValueChange}
              selectedValue={selectedValue}
              {...pickerProps}>
              {renderPickerItems()}
            </Picker>
          </View>
        </Modal>
      </View>
    );
  }

  function renderAndroidHeadless() {
    const {disabled, Icon, pickerProps, onOpen, touchableWrapperProps} = props;
    const selectedValue = selectedItem.value || items[0].value;

    return (
      <TouchableOpacity
        onPress={onOpen}
        activeOpacity={1}
        {...touchableWrapperProps}>
        <View>
          {renderTextInputOrChildren()}
          <Picker
            style={[
              Icon && {backgroundColor: colors.transparent},
              styles.headlessAndroidPicker,
            ]}
            enabled={!disabled}
            onValueChange={onValueChange}
            selectedValue={selectedValue}
            {...pickerProps}>
            {renderPickerItems()}
          </Picker>
        </View>
      </TouchableOpacity>
    );
  }

  function renderAndroidNativePickerStyle() {
    const {disabled, Icon, pickerProps} = props;
    const selectedValue = selectedItem.value || items[0].value;

    return (
      <View style={styles.container}>
        <Picker
          style={[
            Icon && {backgroundColor: colors.transparent},
            getPlaceholderStyle(),
          ]}
          enabled={!disabled}
          onValueChange={onValueChange}
          selectedValue={selectedValue}
          {...pickerProps}>
          {renderPickerItems()}
        </Picker>
      </View>
    );
  }

  if (Platform.OS === 'ios') {
    return renderIOS();
  }

  if (children || !useNativeAndroidPickerStyle) {
    return renderAndroidHeadless();
  }

  return renderAndroidNativePickerStyle();
}

PickerView.defaultProps = {
  value: undefined,
  placeholder: {
    label: strings.selectAnItem,
    value: null,
    color: 'grey',
  },
  disabled: false,
  itemKey: null,
  children: null,
  useNativeAndroidPickerStyle: true,
  doneText: strings.done,
  onDonePress: null,
  onUpArrow: null,
  onDownArrow: null,
  onOpen: null,
  onClose: null,
  textInputProps: {},
  pickerProps: {},
  touchableDoneProps: {},
  touchableWrapperProps: {},
  Icon: null,
  InputAccessoryView: null,
};
