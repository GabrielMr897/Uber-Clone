import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #ffffff;
    align-items: center;
    justify-content: space-between;
    padding: 40px 20px;
    width: 100%;

`;


export const Title = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    margin-top: 20px;
    color: black;
    width: 100%;
    font-size: 18px;


`

export const BoxNumber = styled.View `
    width: 100%;

`

export const BoxInput = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;

`


export const Country = styled.View `
    background-color:#dddd;
    width: 25%;
    height: 100%;
    border-radius: 15px;
    padding: 10px;
`


export const Number = styled.TextInput`
    background-color: #dddd;
    height: 100%;
    width: 70%;
    border-radius: 15px;
`