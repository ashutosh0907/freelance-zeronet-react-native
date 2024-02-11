import {View, Text, Platform, TouchableOpacity} from 'react-native';
import React from 'react';
import Geolocation from 'react-native-geolocation-service';
import {useEffect} from 'react';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {useState} from 'react';
import {Loader} from '../../components/Loader';
import {BLACK, GRAY} from '../../constants/color';
import {RFValue} from 'react-native-responsive-fontsize';
import CustomButton from '../../components/CustomButton';

const Claim = () => {
  const [permissionStatus, setPermissionStatus] = useState(false);
  const [loader, setLoader] = useState(false);
  const [coordinates, setCoordinates] = useState({latitude: '', longitude: ''});
  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    console.log('first');
    await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.ACCESS_FINE_LOCATION
        : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    ).then(result => {
      console.log(result);
      if (result == 'granted') {
        setPermissionStatus(true);
      }
    });
  };

  const checkLocationPermission = () => {
    if (Platform.OS == 'android') {
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'The permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.LIMITED:
              console.log(
                'The permission is limited: some actions are possible',
              );
              break;
            case RESULTS.GRANTED:
              console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              console.log(
                'The permission is denied and not requestable anymore',
              );
              break;
          }
        })
        .catch(error => {
          console.log('ERROR: ', error);
        });
    } else {
      check(PERMISSIONS.IOS.LOCATION_ALWAYS)
        .then(result => {
          switch (result) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'The permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.LIMITED:
              console.log(
                'The permission is limited: some actions are possible',
              );
              break;
            case RESULTS.GRANTED:
              console.log('The permission is granted');
              break;
            case RESULTS.BLOCKED:
              console.log(
                'The permission is denied and not requestable anymore',
              );
              break;
          }
        })
        .catch(error => {
          console.log('ERROR: ', error);
        });
    }
  };

  const getGeolocationDetails = async () => {
    setLoader(true);
    if (permissionStatus) {
      Geolocation.getCurrentPosition(
        position => {
          console.log(position);
          const {latitude, longitude} = position.coords;
          console.log('Latitude: ', latitude);
          console.log('Longitide: ', longitude);
          setCoordinates({latitude: latitude, longitude: longitude});
          setLoader(false);
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Loader visible={loader} />

      <CustomButton
        onPress={() => {
          getGeolocationDetails();
        }}
        title={'Login'}
        width={'85%'}
      />
      <Text
        style={{
          color: BLACK,
          fontSize: RFValue(15),
        }}>
        Latitude: {coordinates.latitude}
      </Text>
      <Text
        style={{
          color: BLACK,
          fontSize: RFValue(15),
        }}>
        Longitude: {coordinates.longitude}
      </Text>
    </View>
  );
};

export default Claim;
