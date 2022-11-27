import React, { useEffect, useState } from 'react';
import {  View, Text, FlatList, TouchableOpacity } from "react-native";
import MapView from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import { FontAwesome5 } from '@expo/vector-icons';

// import { Container } from './styles';

const Map: React.FC = () => {



  const [cumprimentar, setCumprimentar] = useState("")

  const data = [
    {
      id: "1",
      icon: "home",
      location: "Home",
      destination: "Palm Height apartment, Thu Duc City",
    },
    {
      id: "2",
      icon: "briefcase",
      location: "Work",
      destination: "Vinhome, Binh Thanh District",
    },
    {
      id: "3",
      icon: "plane",
      location: "Travel",
      destination: "Tan Son Nhat Airpot, Tan Binh District",
    },
  ];

  useEffect(() => {
    const hrs = new Date().getHours();
    if (hrs < 12) setCumprimentar("Bom dia");
    else if (hrs >= 12 && hrs <= 17) setCumprimentar("Boa tarde");
    else if (hrs >= 17 && hrs <= 24) setCumprimentar("Boa noite");
  }, []);

  return (
    <>
            <MapView style={{flex: 7, zIndex: -1}} mapType="terrain" loadingEnabled showsUserLocation  initialRegion={{latitude: -27.210753, longitude: -49.644183, latitudeDelta: 0.0143, longitudeDelta: 0.0134}} />
            <View style={{backgroundColor: 'white', alignItems: 'center', padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: '600'}}>{cumprimentar} Deby</Text>
            </View>
            <GooglePlacesAutocomplete
        styles={{
          container: {
            flex: 0,
            backgroundColor: "white",
            marginLeft: 20,
            marginRight: 20,
            marginTop: 10,
          },
          textInput: {
            fontSize: 23,
            borderRadius: 5,
            width: 200,
            backgroundColor: "lightgray",
          },
          textInputContainer: {
            paddingBottom: 0,
          },
        }}
        placeholder="Para onde?"
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
        minLength={2}
       
        fetchDetails={true}
        query={{
          key: process.env.GOOGLE_MAP_API,
          language: "pt-br",
        }}
        enablePoweredByContainer={false}
      />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
     
        renderItem={({ item }) => (
          <TouchableOpacity style={{alignItems: 'center', flexDirection: "row", padding: 15}}>
            <View style={{backgroundColor: '#CDCED5', borderRadius: 50, padding: 15, marginRight: 7}}>
              <FontAwesome5 name={item.icon} size={24} color="black" />
            </View>
            <View>
              <Text style={{color: '#0F1016', fontWeight: '700', marginBottom: 3}}>{item.location}</Text>
              <Text style={{color: '#b9babd', fontWeight: '600'}}>{item.destination}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
}

export default Map;