import {View, Text, TouchableOpacity, Image, Animated} from 'react-native';
import React from 'react';
import {customButtonStyles} from './CustomButtonStyles';
import {WIDTH} from '../../constants/config';
import {BRAND, WHITE} from '../../constants/color';

const CustomButton = ({
  width = WIDTH * 0.9,
  title,
  onPress,
  icon,
  disabled,
  activeOpacity,
  backgroundColor = BRAND,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={activeOpacity}
      onPress={onPress}
      style={{
        ...customButtonStyles.buttonview,
        width: width ? width : WIDTH,
        backgroundColor: backgroundColor,
      }}>
      <Text style={customButtonStyles.text}>{title}</Text>
      {icon && (
        <View style={customButtonStyles.iconview}>
          <Image
            tintColor={WHITE}
            style={customButtonStyles.iconimage}
            resizeMode="center"
            source={icon}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
