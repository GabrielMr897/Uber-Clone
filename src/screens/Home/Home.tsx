import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Login from '../Login/Login';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Container, MainImage, Box, Button, Frase } from './style';

const Home: React.FC = () => {
  return (
    <Container>
      <Box>

      <TouchableOpacity>
        <View>
          <Image style={{width: 80, height: 80, resizeMode: 'contain'}} source={require('../../../assets/logoUber.png')}/>
        </View>
      </TouchableOpacity>

      <MainImage source={require('../../../assets/uber-icone.jpg')}/>
    
      <Text>Viaje com segurança</Text>
      </Box>

      <Button onPress={Login} >

            <Frase>Começar</Frase>
            <Ionicons name="arrow-forward" size={27} color="white" />
          

        </Button>
       <StatusBar style="light" />
    </Container>
  );
}

export default Home;