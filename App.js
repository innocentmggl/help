/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {View, Dimensions} from 'react-native';
import {mapStyle} from './mapStyle';
import MapComponent from './MapComponent';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE = -28.48322;
const LONGITUDE = 24.676997;
const LATITUDE_DELTA = 30.1;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const App = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 2}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
        />
      </View>
    </View>
  );
};

export default App;
