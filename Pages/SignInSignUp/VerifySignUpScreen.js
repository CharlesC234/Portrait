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

const VerifySignUpScreen = ({navigation}) => {
    return <View style={{backgroundColor: '#000000', height: 10000}}>
  <Wrapper>
    <ButtonWrapper>
      <Fragment>
      <View style={{ height: 55}}/>
      <Text style={{color: '#ffffff', fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Enter Verification Code</Text>
      <View style={{top: 275, alignItems: 'center'}}>
      <View style={{flexDirection: 'row', bottom: 30}}>
      <TextInput
        placeholderTextColor={'#696969'}
        selectionColor='#ffffff'
        color='#ffffff'
        multiline
        numberOfLines={3}
        style={styles.VerificationInputStyleClass1}
        />
        <TextInput
        placeholderTextColor={'#696969'}
        selectionColor='#BDBDBD'
        color='#BDBDBD'
        multiline
        numberOfLines={3}
        style={styles.VerificationInputStyleClass2}
        />
        <TextInput
        placeholderTextColor={'#696969'}
        selectionColor='#BDBDBD'
        color='#BDBDBD'
        multiline
        numberOfLines={3}
        style={styles.VerificationInputStyleClass3}
        />
        <TextInput
        placeholderTextColor={'#696969'}
        selectionColor='#BDBDBD'
        color='#BDBDBD'
        multiline
        numberOfLines={3}
        style={styles.VerificationInputStyleClass4}
        />
        <TextInput
        placeholderTextColor={'#696969'}
        selectionColor='#BDBDBD'
        color='#BDBDBD'
        multiline
        numberOfLines={3}
        style={styles.VerificationInputStyleClass5}
        />
        <TextInput
        placeholderTextColor={'#696969'}
        selectionColor='#BDBDBD'
        color='#BDBDBD'
        multiline
        numberOfLines={3}
        style={styles.VerificationInputStyleClass6}
        />
        </View>
        

        <Button style={{bottom: 75, width: 175, alignItems: 'center', color: '#ffffff', height: 45}} 
           green title="Resend Code"/>

        <View style={{ height: 150}} />

        <View style={{ flexDirection:"row" }}>
        <View style={{top: 87.5}}>
        <Button
                style={{
                  bottom: 62.5,
                  width: 180,
                  alignItems: 'center',
                  color: '#ffffff',
                  zIndex: 1,
                }}
                title="Back"
                transparent={false}
                onPress={() =>  navigation.navigate('Welcome')}
              />
              <View style={{borderWidth: 3.5, borderColor: '#57d9a3', position: 'absolute', width: 130, height: 45,
              borderRadius: 50, bottom: 77.5, zIndex: 0, left: 25}}/>
        </View>
        <View style={{top: 90}}>
        <Button
                style={{
                  bottom: 62.5,
                  width: 180,
                  alignItems: 'center',
                  color: '#ffffff',
                  zIndex: 1,
                }}
                title="Next"
                transparent={false}
                onPress={() =>  navigation.navigate('UserNamePassword')}
              />
              <View style={{borderWidth: 3.5, borderColor: '#57d9a3', position: 'absolute', width: 130, height: 45,
              borderRadius: 50, bottom: 77.5, zIndex: 0, left: 25}}/>
        </View>
        </View>
        </View>
      </Fragment>
    </ButtonWrapper>
  </Wrapper>
  </View>
  };

  

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
        VerificationInputStyleClass1:{
          fontSize: 16,
          fontWeight: "bold",
          textAlign: 'center',
          bottom: 70,
          marginRight: 7,
          width: 45,
          borderWidth: 3,
          borderRadius: 15,
          height: 40,
          borderColor: '#ffe380'
          },
          VerificationInputStyleClass2:{
          fontSize: 16,
          fontWeight: "bold",
          textAlign: 'center',
          bottom: 70,
          marginRight: 7,
          width: 45,
          borderWidth: 3,
          borderRadius: 15,
          height: 40,
          borderColor: '#57d9a3'
          },
          VerificationInputStyleClass3:{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: 'center',
            bottom: 70,
            marginRight: 7,
            width: 45,
            borderWidth: 3,
            borderRadius: 15,
            height: 40,
            borderColor: '#ff7597'
            },
            VerificationInputStyleClass4:{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: 'center',
            bottom: 70,
            marginRight: 7,
            width: 45,
            borderWidth: 3,
            borderRadius: 15,
            height: 40,
            borderColor: '#bb86fc'
            },
            VerificationInputStyleClass5:{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: 'center',
              bottom: 70,
              marginRight: 7,
              width: 45,
              borderWidth: 3,
              borderRadius: 15,
              height: 40,
              borderColor: '#79e2f2'
              },
              VerificationInputStyleClass6:{
              fontSize: 16,
              fontWeight: "bold",
              textAlign: 'center',
              bottom: 70,
              marginRight: 7,
              width: 45,
              borderWidth: 3,
              borderRadius: 15,
              height: 40,
              borderColor: '#f686fc'
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
top: 0;
`;
const StyledButton = styled.TouchableHighlight`
width:355px;
borderWidth: 3;
borderColor:${props => (props.blue ? "#79e2f2" : props.purple ? "#bb86fc" : props.green ? "#57d9a3" : 0)};
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
top: 10;
color: ${props => (props.transparent ? "#000000" : 0)};
`;
export const Button = ({color, ...props }) => {
return (
<StyledButton {...props}>
  <StyledTitle {...props}>{props.title}</StyledTitle>
</StyledButton>
);
};
  
export default VerifySignUpScreen;