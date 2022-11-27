import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Container, Title, BoxInput ,BoxLogin, Number, Country, ButtonNumber, BoxOr} from "./style";
import { useFonts, Montserrat_800ExtraBold, Montserrat_400Regular, Montserrat_600SemiBold} from "@expo-google-fonts/montserrat";
import Ionicons from '@expo/vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';
import { Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { propsStack } from '../../Models';


const Login: React.FC = () => {
  const navigation = useNavigation<propsStack>()

  const [ fontsLoaded ] = useFonts({
    Montserrat_800ExtraBold, 
    Montserrat_400Regular,
    
  })


  if(!fontsLoaded) {
    <AppLoading/>
  }

  return (
  <Container>

    <BoxLogin>

    <Title>Digite seu número de celular</Title>
    <BoxInput>
      <Country>
      <Ionicons style={{textAlign: 'right'}} name="caret-down-outline" size={15} color="black"/>
      </Country>
      <Number keyboardType="numeric">

      </Number>
    </BoxInput>

    <ButtonNumber onPress={() => navigation.navigate("Map")}>
      <Text style={{color: 'white', }}>Continuar</Text>
    </ButtonNumber>

    <BoxOr>
      <View style={{ height:4, backgroundColor: '#DADDDA'}}>
      </View>
     <Text style={{color: '#8E918E'}}>
      ou
     </Text>
      <View style={{ height:4, backgroundColor: '#DADDDA'}}></View>
    </BoxOr>

    <TouchableOpacity style={{backgroundColor: '#dddd', padding: 20, alignItems: 'center', justifyContent: 'center', borderRadius: 15, flexDirection: 'row'}}>
      <Image style={{width: 30, height: 30, marginRight: 5}} source={require("../../../assets/logoGoogle.png")}></Image>
      <Text style={{fontFamily: 'Montserrat_800ExtraBold'}}>Continuar com Google</Text>
    </TouchableOpacity>

    <Link to="/" style={{textDecorationLine:'underline', textAlign: 'center', marginVertical: 25}}>Encontrar Minha Conta</Link>

    <Text style={{color: '#8E918E'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad minus, delectus debitis tempore tenetur ipsum quisquam ullam voluptatum. Praesentium, beatae nobis rerum rem commodi explicabo culpa distinctio consequuntur eaque. Dolores!</Text>
    </BoxLogin>


    <Text style={{}}>
      <Text style={{color: '#8E918E'}}>Esse site é protegido pelo reCAPTCHA e segue </Text>  
      <Link to="/" style={{textDecorationLine:'underline'}}>Política de privacidade</Link>
      <Text style={{color: '#8E918E'}}> e os </Text>
      <Link to="/" style={{textDecorationLine:'underline'}}>Termos de uso</Link>
      <Text style={{color: '#8E918E'}}> do Google</Text>
      </Text>
    

    <StatusBar style='auto'/>    
    </Container>
    );
}

export default Login;