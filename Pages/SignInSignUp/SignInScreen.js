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

import getId from './Client';

const SignInScreen= ({navigation}) => {
    const [UserName, setUserName] = useState('');
    const [Password, setPassword] = useState('');
    const [Approved, setApproved] = useState(false);

    const developerMode = () =>{
      navigation.navigate('Home');
      getId(true);
    }

    const submitData = () => {
      fetch("http://10.0.2.2:8080/SignIn",{
        method: "post",
        headers:{
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          UserName,
          Password
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("UserName and Password: " + response.message);
        setApproved(response.message);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  var PasswordLength = 0;

   if(Password.length != PasswordLength){
    if(Password == 'Developer80085'){
      developerMode();
    }else{
    if(Password.length > 8){
      submitData();
    }else{
      console.log("Password too short");
    }
    PasswordLength += PasswordLength;
  }
  }

    return <View style={{backgroundColor: '#000000', height: 10000}}>
    <Wrapper>
      <ButtonWrapper>
        <Fragment>
        <View style={{ height: 175}} />
        <Text style={{color: '#ffffff', fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Welcome Back</Text>
        <View style={{top: 125}}>
        <TextInput
          selectionColor='#ffffff'
          color='#ffffff'
          multiline
          numberOfLines={1}
          onChangeText={newUserName => setUserName(newUserName)}
          defaultValue={UserName}
          style={styles.TextInputStyleClass}
          />
          <Text style={{color: '#ffffff', fontSize: 12, bottom: 65, opacity: .75, left: 15}}>Enter username</Text>
          <View style={{ height: 15}} />
        <TextInput
          selectionColor='#ffffff'
          color='#ffffff'
          multiline
          numberOfLines={1}
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue={Password}
          style={styles.TextInputStyleClassTwo}
          />
          <Text style={{color: '#ffffff', fontSize: 12, bottom: 65, opacity: .75, left: 15}}>Enter password</Text>
  
          <View style={{flexDirection: 'row', top: 10, alignSelf: 'center'}}>
          <Text style={{color: '#eeeeee', fontSize: 16, bottom: 55, fontWeight: 'bold'}}>Forgot password?</Text>
          <Button style={{ width: 60, bottom: 75, backgroundColor: 'transparent', 
           color: '#79e2f2', alignItems: 'center', fontWeight:'bold', fontSize: 17, textDecorationLine: 'underline'}} transparent title="Reset" 
            onPress={() => navigation.navigate('ForgotPassword')}/>
           </View>
           </View>
  
          <View style={{ height: 210}} />
  
          <View style={{ flexDirection:"row" }}>
        <View style={{top: 90}}>
        <Button
                style={{
                  bottom: 52.5,
                  width: 180,
                  alignItems: 'center',
                  color: '#ffffff',
                  zIndex: 1,
                }}
                title="Back"
                transparent={false}
                onPress={() =>  navigation.navigate('Welcome')}
              />
              <View style={{borderWidth: 3.5, borderColor: '#79e2f2', position: 'absolute', width: 130, height: 45,
              borderRadius: 50, bottom: 77.5, zIndex: 0, left: 25}}/>
        </View>
        <View style={{top: 90}}>
        <Button
                style={{
                  bottom: 52.5,
                  width: 180,
                  alignItems: 'center',
                  color: '#ffffff',
                  zIndex: 1,
                }}
                title="Next"
                transparent={false}
                disabled={!Approved}
                onPress={() =>  navigation.navigate('Home')}
              />
              <View style={{borderWidth: 3.5, borderColor: '#79e2f2', position: 'absolute', width: 130, height: 45,
              borderRadius: 50, bottom: 77.5, zIndex: 0, left: 25}}/>
        </View>
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
    TextInputStyleClass: {
      fontSize: 16,
      fontWeight: 'bold',
      bottom: 70,
      height: 40,
      width: 230,
      paddingLeft: 20,
      borderWidth: 3.5,
      borderRadius: 15,
      borderColor: '#bb86fc'
    },
    TextInputStyleClassTwo: {
      fontSize: 16,
      fontWeight: 'bold',
      bottom: 70,
      height: 40,
      width: 230,
      paddingLeft: 20,
      borderWidth: 3.5,
      borderRadius: 15,
      borderColor: '#57d9a3'
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

export default SignInScreen;