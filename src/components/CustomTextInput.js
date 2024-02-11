/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {HEIGHT, STYLES, WIDTH} from '../constants/config';
import {
  BLACK,
  LIGHTGRAY,
  RED,
  TEXTINPUTBACKGROUND,
  TEXTINPUTTITLE,
  WHITE,
} from '../constants/color';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import {MEDIUM, REGULAR} from '../constants/fontfamily';

export const CustomTextInput = ({
  title = '',
  value = null,
  placeholder = '',
  width = WIDTH * 0.9,
  keyboardType = 'default',
  maxLength,
  onChangeText,
  editable = true,
  autoFocus = false,
  isPhonenumber = false,
  autoCapitalize = 'none',
  hasCallback = false,
  callbackMethod,
  secureTextEntry,
  onPressIn,
  hasActionOnFocus = false,
  mandatory = false,
  hasExtraCallback = false,
  extraCallbackMethod,
}) => {
  return (
    <View
      style={{
        width: width ? width : WIDTH,
      }}>
      <View style={{marginVertical: '1%'}}>
        <Text
          style={{
            color: TEXTINPUTTITLE,
            fontFamily: MEDIUM,
            fontSize: RFValue(13),
            paddingLeft: HEIGHT * 0.0059,
          }}>
          {title} <Text style={{color: RED}}>{mandatory && '*'}</Text>
        </Text>
      </View>
      <View
        style={{
          borderRadius: 7,
          borderWidth: 0.6,
          borderColor: TEXTINPUTBACKGROUND,
          marginTop: 1,
          marginBottom: 10,
        }}>
        <LinearGradient
          end={{x: 1, y: 1}}
          start={{x: 1, y: 1}}
          colors={[TEXTINPUTBACKGROUND, TEXTINPUTBACKGROUND]}
          style={{
            opacity: editable ? 1 : 0.5,
            borderRadius: 4,
            height: 48,
            flexDirection: 'row',
          }}>
          {isPhonenumber && (
            <View
              style={{
                width: WIDTH * 0.13,
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: RFValue(14),
                  color: BLACK,
                  fontFamily: MEDIUM,
                }}>
                +91
              </Text>
            </View>
          )}
          <TextInput
            onPressIn={hasActionOnFocus ? onPressIn : null}
            autoFocus={autoFocus}
            secureTextEntry={secureTextEntry}
            editable={editable}
            onChangeText={txt => {
              // if (!/[0-9,.*-@]/.test(txt.slice(-1))) {
              if (hasCallback) {
                callbackMethod(txt);
              }
              if (hasExtraCallback) {
                extraCallbackMethod(txt);
              }
              onChangeText(txt);
              // } else {
              // }
            }}
            autoCapitalize={autoCapitalize}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={LIGHTGRAY}
            style={{
              ...Styles.inputTextStyle,
            }}
            keyboardType={keyboardType}
            maxLength={maxLength}
          />
        </LinearGradient>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  viewForTextInput: {
    ...STYLES.elevation,
    height: 60,
    alignSelf: 'center',
    borderRadius: 7,
    borderWidth: 0.6,
    borderColor: WHITE,
    marginTop: 5,
    // backgroundColor: "red",
  },
  inputTextStyle: {
    fontSize: RFValue(13),
    color: BLACK,
    fontFamily: REGULAR,
    marginLeft: 5,
    flex: 1,
    paddingLeft: 10,
  },
});
