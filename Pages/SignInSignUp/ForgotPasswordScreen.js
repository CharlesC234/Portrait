import React, { Component, Fragment, useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { enableScreens } from 'react-native-screens';
enableScreens(false);

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import styled from 'styled-components/native';


import { NavigationContainer} from '@react-navigation/native';

const ForgotPasswordScreen= ({navigation}) => {
    return <View style={{backgroundColor: '#1c1c1c', height: 10000}}>
    <Wrapper>
      <ButtonWrapper>
        <Fragment>
        <View style={{ height: 0}} />
        <View style={{flexDirection: 'row'}}>
          <View style= {{height: 20, width: 75, borderRadius: 30, backgroundColor: '#1de9b6'}}/>
          <View style={{width: 30}}/>
          <View style= {{height: 20, width: 20, borderRadius: 30, backgroundColor: '#1de9b6'}}/>
        </View>
        <View style={{ height: 50}} />
        <Text style={{color: '#eeeeee', fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Verify It's You</Text>
        <View style={{ height: 150}} />
        <Text style={{color: '#eeeeee', fontSize: 16, textAlign: 'center', width: 300, bottom: 80, fontWeight:'bold'}}>
          Enter your username
        </Text>
        <TextInput
          placeholder="Username"
          placeholderTextColor={'#696969'}
          selectionColor='#BDBDBD'
          color='#BDBDBD'
          multiline
          numberOfLines={3}
          style={styles.TextInputStyleClass}
          />
          <View style={{ height: 20}} />
          <Text style={{color: '#eeeeee', fontSize: 16, textAlign: 'center', width: 300, bottom: 80, fontWeight:'bold'}}>
          Enter your phone number
        </Text>
        <TextInput
          placeholder="Phone Number"
          placeholderTextColor={'#696969'}
          selectionColor='#BDBDBD'
          color='#BDBDBD'
          multiline
          numberOfLines={3}
          style={styles.TextInputStyleClass}
          />
  
          <View style={{ height: 140}} />
  
          <View style={{ flexDirection:"row" }}>
            <Button style={{ bottom: 50, width: 150, alignItems: 'center', color:'#1c1c1c'}} 
             transparent title="Back" 
             onPress={() =>  navigation.navigate('SignIn')}/>
            <View style={{ width: 25}} />
            <Button style={{ bottom: 50, width: 150, alignItems: 'center', color:'#1c1c1c'}} 
             transparent title="Next" 
             onPress={() =>  navigation.navigate('VerifyForgotPassword')} />
          </View>
        </Fragment>
      </ButtonWrapper>
    </Wrapper>
   </View>
  ;}

  const styles = StyleSheet.create({
    backgroundVideo: {
      height: 783,
      width: 500,
      position: "absolute",
      transform: [{ rotate: '0deg'}],
      alignItems: "center",
      left: -55,
      bottom: 17,
    },
    blurWrap: {
      height: 150,//Here we need to specify the height of blurred part
      overflow: 'hidden',
      width: '100%',
      position: 'absolute',
      bottom: 0
    },
    imageStyle: { 
      height: 350,
      width: 350
    }, 
    blurImageStyle: {
      height: 350,
      width: 350,
      position: 'absolute',
      bottom: 0,
      justifyContent: 'flex-end'
    },
    backgroundImg: {
      height: 900,
      width: 580,
      position: "absolute",
      transform: [{ rotate: '180deg'}],
      alignItems: "center",
      left: -90,
      resizeMode: 'cover',
      bottom: 5,
    },
    TextInputStyleClass:{
      fontSize: 16,
      fontWeight: "bold",
      backgroundColor: '#333333',
      textAlign: 'left',
      bottom: 70,
      width: 320,
      paddingLeft: 40,
      borderRadius: 30,
      },
      TextInputStyleClassCentered:{
        fontSize: 16,
        fontWeight: "bold",
        backgroundColor: '#333333',
        textAlign: 'center',
        bottom: 70,
        width: 320,
        paddingLeft: 0,
        borderRadius: 30,
        },
        VerificationInputStyleClass:{
          fontSize: 16,
          fontWeight: "bold",
          backgroundColor: '#333333',
          textAlign: 'center',
          bottom: 70,
          marginRight: 7,
          width: 50,
          borderRadius: 25,
          },
      TextStyle:{
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        fontWeight: "bold",
      },
      absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
      }
  });

  export const Wrapper = styled.View`
justify-content: space-between;
padding: 20px;
align-items: center;
flex-direction: column;
`;
export const ButtonWrapper = styled.View`
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 100px;
`;
export const Title = styled.Text`
margin: 50% 0px 20px;
text-transform: none;
font-size: 16;
text-align: center;
top: -50;
`;
const StyledButton = styled.TouchableHighlight`
width:355px;
background-color:${props => (props.transparent ? "#1DE9B6" : 0)};
padding:15px;
justify-content:center;
margin-bottom:20px;
border-radius:30px;
`;
const StyledTitle = styled.Text`
text-transform: none;
text-align: center;
font-weight: bold;
font-size: 16;
top: 0;
color: ${props => (props.transparent ? "#000000" : 0)};
`;
export const Button = ({color, ...props }) => {
return (
<StyledButton {...props}>
  <StyledTitle {...props}>{props.title}</StyledTitle>
</StyledButton>
);
};
  
export default ForgotPasswordScreen;