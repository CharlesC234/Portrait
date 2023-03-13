/* eslint-disable prettier/prettier */
import React, {Component, Fragment, useReducer, useState, useRef} from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {enableScreens} from 'react-native-screens';
enableScreens(false);
import {SafeAreaProvider} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

const WelcomeScreen = ({navigation}) => {
  const [FullName, setFullName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [PhoneNumber2, setPhoneNumber2] = useState('');
  const [PhoneNumber3, setPhoneNumber3] = useState('');
  const TextInputOneRef = useRef(null);
  const TextInputTwoRef = useRef(null);
  const TextInputThreeRef = useRef(null);
  const TextInputFourRef = useRef(null);
  const TextInputFiveRef = useRef(null);

  const checkData = (FN, PN) => {
    if (FN != null && PN != null) {
      return false;
    } else {
      return true;
    }
  };

  const submitData = () => {
    fetch('http://10.0.2.2:8080/Welcome', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FullName,
        PhoneNumber,
      }),
    })
      .then(res => res.JSON())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <View style={{backgroundColor: '#000000', flex: 1}}>
    <StatusBar style="light" backgroundColor="transparent" hidden={false}/>
      <Wrapper>
        <View style={{top: '10%'}}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../../assets/PortraitLogo.png')}
          />
        </View>
        <View style={{height: '19%'}}/>
        <Text
          style={{
            color: '#eeeeee',
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',
            bottom: '0%',
          }}>
          Create Portrait
        </Text>
        <ButtonWrapper>
          <Fragment>
            <View style={{bottom: '0%'}}>
              <TextInput
                ref={TextInputOneRef}
                placeholder=" "
                placeholderTextColor={'#696969'}
                selectionColor="#ffffff"
                color="#ffffff"
                onChangeText={newFullName => setFullName(newFullName)}
                defaultValue={FullName}
                style={styles.TextInputStyleClass}
              />
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  bottom: 65,
                  opacity: 0.75,
                  left: 12.5,
                }}>
                Full Name
              </Text>
              <View style={{height: 15}}/>
              <TextInput
                ref={TextInputTwoRef}
                placeholder=" "
                placeholderTextColor={'#696969'}
                selectionColor="#ffffff"
                color="#ffffff"
                onChangeText={newLastName => setLastName(newLastName)}
                defaultValue={LastName}
                style={styles.TextInputStyleClassTwo}
              />
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  bottom: 65,
                  opacity: 0.75,
                  left: 12.5,
                }}>
                Unique Username
              </Text>
              <View style={{height: 15}} />
              <View style={{flexDirection: 'row'}}>
              <TextInput
                ref={TextInputThreeRef}
                placeholder=" "
                placeholderTextColor={'#696969'}
                selectionColor="#ffffff"
                color="#ffffff"
                onChangeText={newPhoneNumber => {
                setPhoneNumber(newPhoneNumber);
                PhoneNumber.length == 2 ? TextInputFourRef.current.focus() : null}}
                defaultValue={PhoneNumber}
                style={styles.TextInputStyleClassThree}
              />
              <View style={{width: 10}}/>
              <TextInput
                ref={TextInputFourRef}
                placeholder=" "
                placeholderTextColor={'#696969'}
                selectionColor="#ffffff"
                color="#ffffff"
                onChangeText={newPhoneNumber2 => {
                setPhoneNumber2(newPhoneNumber2);
                PhoneNumber2.length == 2 ? TextInputFiveRef.current.focus() : null}}
                defaultValue={PhoneNumber2}
                style={styles.TextInputStyleClassFour}
              />
              <View style={{width: 10}}/>
              <TextInput
                ref={TextInputFiveRef}
                placeholder=" "
                placeholderTextColor={'#696969'}
                selectionColor="#ffffff"
                color="#ffffff"
                onChangeText={newPhoneNumber3 => {
                setPhoneNumber3(newPhoneNumber3);
                PhoneNumber3.length == 3 ? TextInputFiveRef.current.focus() : null}}
                defaultValue={PhoneNumber3}
                style={styles.TextInputStyleClassFive}
              />
              </View>
              <Text
                style={{
                  color: '#ffffff',
                  fontSize: 12,
                  bottom: 65,
                  opacity: 0.75,
                  left: 12.5,
                }}>
                Phone number
              </Text>
              <View style={{height: 20}} />
              <Button
                style={{
                  bottom: 67.5,
                  width: 180,
                  alignItems: 'center',
                  color: '#ffffff',
                  zIndex: 1,
                  left: 10,
                }}
                disabled={checkData(FullName, PhoneNumber)}
                title="Continue"
                transparent={false}
                onPress={() => {
                  submitData();
                  navigation.navigate('VerifySignUp');
                }}
              />
              <View style={{borderWidth: 3.5, borderColor: '#79e2f2', position: 'absolute', width: 130, height: 45,
              borderRadius: 50, top: 157.5, zIndex: 0, left: 45}}/>
            </View>
            <View style={{flexDirection: 'row', bottom: '15%'}}>
              <Text
                style={{color: '#eeeeee', fontSize: 16, fontWeight: 'bold'}}>
                Already have a Portrait?
              </Text>
              <Button
                style={{
                  width: 60,
                  bottom: 16,
                  backgroundColor: 'transparent',
                  color: '#79e2f2',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: 17,
                  textDecorationLine: 'underline'
                }}
                transparent 
                title="Login"
                onPress={() => navigation.navigate('SignIn')}
              />
            </View>
          </Fragment>
        </ButtonWrapper>
      </Wrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 783,
    width: 500,
    position: 'absolute',
    transform: [{rotate: '0deg'}],
    alignItems: 'center',
    left: -55,
    bottom: 17,
  },
  blurWrap: {
    height: 150, //Here we need to specify the height of blurred part
    overflow: 'hidden',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  imageStyle: {
    height: 350,
    width: 350,
  },
  blurImageStyle: {
    height: 350,
    width: 350,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'flex-end',
  },
  backgroundImg: {
    height: 900,
    width: 580,
    position: 'absolute',
    transform: [{rotate: '180deg'}],
    alignItems: 'center',
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
  TextInputStyleClassThree: {
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 70,
    height: 40,
    width: 65,
    textAlign: 'center',
    borderWidth: 3.5,
    borderRadius: 15,
    borderColor: '#79e2f2'
  },
  TextInputStyleClassFour: {
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 70,
    height: 40,
    width: 65,
    textAlign: 'center',
    borderWidth: 3.5,
    borderRadius: 15,
    borderColor: '#79e2f2'
  },
  TextInputStyleClassFive: {
    fontSize: 16,
    fontWeight: 'bold',
    bottom: 70,
    height: 40,
    width: 80,
    textAlign: 'center',
    borderWidth: 3.5,
    borderRadius: 15,
    borderColor: '#79e2f2'
  },
  TextInputStyleClassCentered: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#333333',
    textAlign: 'center',
    bottom: 70,
    width: 320,
    paddingLeft: 0,
    borderRadius: 30,
  },
  VerificationInputStyleClass: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#333333',
    textAlign: 'center',
    bottom: 70,
    marginRight: 7,
    width: 50,
    borderRadius: 25,
  },
  TextStyle: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
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
  width: 355px;
  bordercolor: ${props => (props.transparent ? '#000000' : props.purple ? '#79e2f2' : '#000000')};
  borderwidth: 3;
  padding: 15px;
  justify-content: center;
  margin-bottom: 20px;
  border-radius: 30px;
`;
const StyledTitle = styled.Text`
  text-transform: none;
  text-align: center;
  font-weight: bold;
  font-size: 16;
  top: 0;
  color: ${props => (props.transparent ? '#000000' : 0)};
`;
export const Button = ({color, ...props}) => {
  return (
    <StyledButton {...props}>
      <StyledTitle {...props}>{props.title}</StyledTitle>
    </StyledButton>
  );
};

export default WelcomeScreen;
