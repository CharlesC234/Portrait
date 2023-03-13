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



const UserNamePasswordScreen = ({navigation}) => {

    const [UserName, setUserName] = useState(null);
    const [Password, setPassword] = useState(null);
    const [ConfirmPassword, setConfirmPassword] = useState(null);

    const checkData = (FN, P, CP) => {
      if(FN != null && P != null && P == CP){
        return false;
        //false 
      }else{
        return false;
      }
      }
  
      const submitData = () => {
        fetch("http://10.0.2.2:8080/UsernamePassword",{
          method: "post",
          headers:{
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({
            UserName,
            Password,
          })
        })
        .then(res=>rs.JSON())
        .then(data=>{
          console.log(data)
        })
      }

    return <View style={{backgroundColor: '#000000', height: 10000}}>
    <Wrapper>
      <ButtonWrapper>
        <Fragment>
        <View style={{ height: 175}} />
        <Text style={{color: '#ffffff', fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Create a Password</Text>
        <View style={{top: 125, alignItems: 'center'}}>
        <View style={{bottom: 0}}> 
        <TextInput
          placeholderTextColor={'#696969'}
          selectionColor='#ffffff'
          color='#ffffff'
          multiline
          numberOfLines={2}
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue={Password}
          style={styles.TextInputStyleClass}
          />
          <Text style={{color: '#ffffff', fontSize: 12, bottom: 65, left: 12.5}}>Enter a password</Text>
          <View style={{ height: 15}} />
        <TextInput
          placeholderTextColor={'#696969'}
          selectionColor='#ffffff'
          color='#ffffff'
          multiline
          numberOfLines={2}
          onChangeText={newConfirmPassword => setConfirmPassword(newConfirmPassword)}
          defaultValue={ConfirmPassword}
          style={styles.TextInputStyleClassTwo}
          />
          <Text style={{color: '#ffffff', fontSize: 12, bottom: 65, left: 12.5}}>Confirm password</Text>
          </View>
  
          <View style={{ height: 155}} />
  
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
                onPress={() =>  navigation.navigate('VerifySignUp')}
              />
              <View style={{borderWidth: 3.5, borderColor: '#ffb580', position: 'absolute', width: 130, height: 45,
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
                disabled= {checkData(UserName, Password, ConfirmPassword)}
                onPress={() => {submitData(); navigation.navigate('Photos');}}
              />
              <View style={{borderWidth: 3.5, borderColor: '#ffb580', position: 'absolute', width: 130, height: 45,
              borderRadius: 50, bottom: 77.5, zIndex: 0, left: 25}}/>
        </View>
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
        TextInputStyleClass3:{
          fontSize: 16,
          fontWeight: "bold",
          textAlign: 'left',
          bottom: 70,
          width: 275,
          paddingLeft: 0,
          borderBottomWidth: 3,
          borderBottomColor: '#79e2f2'
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
borderColor:${props => (props.yellow ? "#ffe380" : props.purple ? "#bb86fc" : 0)};
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
  
export default UserNamePasswordScreen;