import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity,  } from 'react-native';
import Login from '../Login/Login';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, MainImage, Box, Button, Frase } from './style';

import { useFonts, Montserrat_800ExtraBold, Montserrat_400Regular, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat";
import AppLoading from 'expo-app-loading';

import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../Models';

const Home: React.FC = () => {
  
  const navigation = useNavigation<propsStack>()

  const [ fontsLoaded ] = useFonts({
    Montserrat_800ExtraBold, 
    Montserrat_400Regular,
    Montserrat_600SemiBold
  })


  if(!fontsLoaded) {
    <AppLoading/>
  }


  return (
    <Container>
      <Box>

      <TouchableOpacity>
        <View>
          <Image style={{width: 80, height: 80, resizeMode: 'contain'}} source={require('../../../assets/logoUber.png')}/>
        </View>
      </TouchableOpacity>

      <MainImage source={require('../../../assets/uber-icone.jpg')}/>
    
      <Frase>Viaje com segurança</Frase>
      </Box>

      <Button onPress={() => navigation.navigate("Login")}>

            <Text style={{
              fontFamily: 'Montserrat_600SemiBold', 
              fontSize: 18,  
              color: 'white',
              textAlign: 'center',
              width: '90%'
              }}>Começar</Text>
            <Ionicons name="arrow-forward" size={27} color="white"/>
           
          

        </Button>
       <StatusBar style="light" />
    </Container>
  );
}

export default Home;