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

const BioScreen = ({navigation}) => {
  var colorPick= '#000000';
    const [Bio, setBio] = useState(' ');
    const [colorPicked, setColorPicked] = useState(null);

    const checkData = (CP) => {
      if(CP != '#000000'){
        return false; 
      }else{
        return false;
      }
      }

  if(colorPicked == 'yellow'){
    colorPick = '#ffe380';
  }else if(colorPicked == 'darkGreen'){
    colorPick = '#57d9a3';
  }else if(colorPicked == 'red'){
    colorPick = '#ff7597';
  }else if(colorPicked == 'purple'){
    colorPick = '#bb86fc';
  }else if(colorPicked == 'green'){
    colorPick = '#57d96d';
  }else if(colorPicked == 'pink'){
    colorPick = '#f686fc';
  }else if(colorPicked == 'blue'){
    colorPick = '#79e2f2';
  }else if(colorPicked == 'orange'){
    colorPick = '#ffb580';
  }else if(colorPicked == 'teal'){
    colorPick = '#75ffe1';
  }else if(colorPicked == 'darkBlue'){
    colorPick = '#5172cf';
  };


  const submitData = () => {
    fetch("http://10.0.2.2:8080/Bio",{
      method: "post",
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        colorPick,
        Bio,
      })
    })
    .then(res=>res.JSON())
    .then(data=>{
      console.log(data)
    })
  }


    return <View style={{backgroundColor: '#000000', height: 10000}}>
    <Wrapper>
      <ButtonWrapper>
        <Fragment>
        <View style={{ height: 75}} />
        <Text style={{color: '#ffffff', fontSize: 25, textAlign: 'center', fontWeight: 'bold', bottom: 50}}>Personalize Your Portrait</Text>
        <View style={{top: 200, alignItems: 'center'}}>
        
        <View style={{top: 25}}> 
        <TextInput
          placeholderTextColor={'#696969'}
          selectionColor='#ffffff'
          color='#ffffff'
          multiline
          numberOfLines={2}
          onChangeText={newBio => setBio(newBio)}
          defaultValue={Bio}
          style={styles.TextInputStyleClass3}
          />
          <Text style={{color: '#ffffff', fontSize: 12, bottom: 65, textAlign: 'center'}}>Enter a short description of yourself</Text>
          </View>
  
          <View style={{ height: 150}} />
  
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
                onPress={() =>  navigation.navigate('Photos')}
              />
              <View style={{borderWidth: 3.5, borderColor: '#bb86fc', position: 'absolute', width: 130, height: 45,
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
                disabled= {checkData(colorPick)}
                onPress={() => {submitData(); navigation.navigate('Privacy');}}
              />
              <View style={{borderWidth: 3.5, borderColor: '#bb86fc', position: 'absolute', width: 130, height: 45,
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
    TextInputStyleClass1:{
      fontSize: 16,
      fontWeight: "bold",
      textAlign: 'left',
      bottom: 70,
      width: 275,
      paddingLeft: 0,
      borderBottomWidth: 2,
      borderBottomColor: '#bb86fc'
      },
      TextInputStyleClass2:{
        fontSize: 16,
        fontWeight: "bold",
        textAlign: 'left',
        bottom: 70,
        width: 275,
        paddingLeft: 0,
        borderBottomWidth: 2,
        borderBottomColor: '#57d9a3'
        },
        TextInputStyleClass3: {
          fontSize: 16,
          fontWeight: 'bold',
          bottom: 70,
          height: 100,
          width: 230,
          textAlign: 'center',
          borderWidth: 3.5,
          borderRadius: 20,
          borderColor: '#79e2f2'
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
borderColor:${props => (props.yellow ? "#ffe380" : props.pink ? "#f686fc" : 0)};
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
  
export default BioScreen;