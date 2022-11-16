import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container, Title } from "./style";
import { useFonts, Montserrat_800ExtraBold, Montserrat_400Regular, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat";

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
    <Title>Digite seu número de telefone</Title>



    <StatusBar style='auto'/>    
    </Container>
    );
}

export default Login;