import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

// import { Container } from './styles';

const Map: React.FC = () => {
  return (
    <>
            <MapView style={{flex: 1}} mapType="terrain" loadingEnabled showsUserLocation  initialRegion={{latitude: -27.210753, longitude: -49.644183, latitudeDelta: 0.0143, longitudeDelta: 0.0134}} />
    </>
  );
}

export default Map;