import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, TouchableOpacity } from 'react-native'
import { Container, Title, BoxInput ,BoxNumber, Number, Country} from "./style";
import { useFonts, Montserrat_800ExtraBold, Montserrat_400Regular, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat";
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';


const Login: React.FC = () => {

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

    <BoxNumber>

    <Title>Digite seu número de celular</Title>
    <BoxInput>
      <Country>
      <Ionicons style={{textAlign: 'right'}} name="caret-down-outline" size={27} color="black"/>
      </Country>
      <Number keyboardType="numeric">

      </Number>
    </BoxInput>

    <TouchableOpacity>

    </TouchableOpacity>
    </BoxNumber>
    <StatusBar style='auto'/>    
    </Container>
    );
}

export default Login;