import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#276ef1;
    align-items: center;
    justify-content: space-between;
    padding: 40px;

`;

export const Button = styled.TouchableOpacity`

    background-color: black;
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 10px;
    padding-left: 140px;
    justify-content: space-between;


`

export const Box = styled.View`

    display: flex;
    align-items: center;
    height: 70%;
    justify-content: space-around;

`;


export const Frase = styled.Text`

`
export const MainImage = styled.Image`
    width: 180px; 
    height: 180px; 
    resize: 'contain'

`;