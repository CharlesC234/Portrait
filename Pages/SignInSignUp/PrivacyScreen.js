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

var yellow = '#ffe380';
var darkGreen = '#57d9a3';
var red = '#ff7597';
var purple = '#bb86fc';
var green = '#57d96d';
var pink = '#f686fc';
var blue = '#79e2f2';
var orange = '#ffb580';
var teal = '#75ffe1';
var darkBlue = '#5172cf';
var colorP;
var privacy = 'option3';
var id;

const PrivacyScreen = ({navigation}) => {
  const [colorPicked, setColorPicked] = useState(' ');

  if(colorPicked == 'yellow'){
    colorP = yellow;
  }else if(colorPicked == 'darkGreen'){
    colorP = darkGreen;
  }else if(colorPicked == 'red'){
    colorP = red;
  }else if(colorPicked == 'purple'){
    colorP = purple;
  }else if(colorPicked == 'green'){
    colorP = green;
  }else if(colorPicked == 'pink'){
    colorP = pink;
  }else if(colorPicked == 'blue'){
    colorP = blue;
  }else if(colorPicked == 'orange'){
    colorP = orange;
  }else if(colorPicked == 'teal'){
    colorP = teal;
  }else{
    colorP = darkBlue;
  };

  const submitData = () => {
    fetch("http://10.0.2.2:8080/SendData",{
      method: "post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        privacy,
      })
    })
    .then((response)=>response.json())
    .then((response)=>{
      console.log(response);
    })
  }


  

    return <View style={{backgroundColor: '#000000', height: 10000}}>
    <Wrapper>
      <ButtonWrapper>
        <Fragment>
        <View style={{ height: 55}} />
        <Text style={{color: '#ffffff', fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Privacy</Text>
        <Text style={{color: '#ffffff', fontSize: 14, top: 10, right: 0, textAlign: 'center', opacity: .60}}>Who can view and add to your portrait</Text>
        <View style={{top: 200, alignItems: 'center'}}>
        <View style={{bottom: 30}}> 
        <View>


        </View>
        </View>
  
          <View style={{ height: 105}} />
  
          <View style={{alignItems: 'center'}}>
            <Button style={{ bottom: 50, width: 250, alignItems: 'center', color:'#ffffff'}} 
             yellow title="Finish Setup" 
             onPress={() =>  {submitData(); getId(); navigation.navigate('Home')}}/>
            <View style={{ height: 25}} />
            <Button style={{ bottom: 50, width: 150, alignItems: 'center', color:'#ffffff'}} 
             green title="Back" 
             onPress={() =>  navigation.navigate('Bio')} />
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
    TextInputStyleClass1:{
      fontSize: 16,
      fontWeight: "bold",
      textAlign: 'left',
      bottom: 70,
      width: 275,
      paddingLeft: 0,
      borderBottomWidth: 3,
      borderBottomColor: '#f686fc'
      },
      TextInputStyleClass2:{
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'left',
        bottom: 70,
        width: 275,
        paddingLeft: 0,
        borderBottomWidth: 3,
        borderBottomColor: '#57d9a3'
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
      },
        Picked: {
          height: 35,
          width: 35,
          borderWidth: 2,
          borderColor: colorP,
          alignItems: 'center',
          alignContent: 'center',
          borderRadius: 10,
        },
        NotPicked: {
          height: 35,
          width: 35,
          borderWidth: 2,
          borderColor: '#000000',
          alignItems: 'center',
          alignContent: 'center',
          borderRadius: 10
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
borderColor:${props => (props.yellow ? "#ffe380" : props.green ? "#57d9a3" : 0)};
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
  
export default PrivacyScreen;