import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {MyStatusBar} from '../../constants/config';
import {BLACK, BRAND, WHITE} from '../../constants/color';
import styles from './TermsStyles';

const Terms = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    // Handle accept logic
    console.log('User accepted terms');
  };

  const handleDecline = () => {
    // Handle decline logic
    console.log('User declined terms');
  };

  return (
    <Fragment>
      <MyStatusBar backgroundColor={WHITE} barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.header}>Terms of Services</Text>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.subHeading}>About</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            dui sagittis, consectetur libero non, sodales massa. Integer sed
            enim et odio sagittis elementum ut vitae nunc. Maecenas consequat,
            risus et facilisis tincidunt, justo purus ultricies enim, id posuere
            lectus lorem sit amet elit.
          </Text>
          <Text style={styles.heading}>Terms and Conditions</Text>
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
            dui sagittis, consectetur libero non, sodales massa. Integer sed
            enim et odio sagittis elementum ut vitae nunc. Maecenas consequat,
            risus et facilisis tincidunt, justo purus ultricies enim, id posuere
            lectus lorem sit amet elit.
          </Text>
        </ScrollView>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={styles.checkbox}>
            {isChecked ? <Text>X</Text> : null}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>
            I accept the terms and conditions
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button]} onPress={handleAccept}>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button]} onPress={handleDecline}>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

export default Terms;
