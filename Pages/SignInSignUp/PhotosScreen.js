import React, { Component, Fragment, useState, useEffect } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  Platform
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


import { enableScreens } from 'react-native-screens';
enableScreens(false);

import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

import styled from 'styled-components/native';


const PhotosScreen = ({navigation}) => {

  const [photo1, setPhoto1] = useState(' ');
  const [photo2, setPhoto2] = useState(' ');
  const [photo3, setPhoto3] = useState(' ');
  const [photo4, setPhoto4] = useState(' ');
  const [photo5, setPhoto5] = useState(' ');
  const [photo6, setPhoto6] = useState(' ');


  const pickPhoto1 = async () => {
    // No permissions request is necessary for launching the image library
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(response);

    if (!response.cancelled) {
      setPhoto1(response);
    }
  };
  const pickPhoto2 = async () => {
    // No permissions request is necessary for launching the image library
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(response);

    if (!response.cancelled) {
      setPhoto2(response);
    }
  };
  const pickPhoto3 = async () => {
    // No permissions request is necessary for launching the image library
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(response);

    if (!response.cancelled) {
      setPhoto3(response);
    }
  };
  const pickPhoto4 = async () => {
    // No permissions request is necessary for launching the image library
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(response);

    if (!response.cancelled) {
      setPhoto4(response);
    }
  };
  const pickPhoto5 = async () => {
    // No permissions request is necessary for launching the image library
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(response);

    if (!response.cancelled) {
      setPhoto5(response);
    }
  };
  const pickPhoto6 = async () => {
    // No permissions request is necessary for launching the image library
    let response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(response);

    if (!response.cancelled) {
      setPhoto6(response);
    }
  };

    //http post requests
    const submitPic1 = (photo) => {
      const data = new FormData();
      data.append('photo1',{
        name: photo.uri.substr(photo.uri.lastIndexOf('/') + 1),
        type: 'image/png',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
      })
      console.log(data);

      fetch("http://10.0.2.2:8080/Photos1",{
        method: "post",
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
    const submitPic2 = (photo) => {
      const data = new FormData();
      data.append('photo2',{
        name: photo.uri.substr(photo.uri.lastIndexOf('/') + 1),
        type: 'image/png',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
      })
      console.log(data);

      fetch("http://10.0.2.2:8080/Photos2",{
        method: "post",
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
    const submitPic3 = (photo) => {
      const data = new FormData();
      data.append('photo3',{
        name: photo.uri.substr(photo.uri.lastIndexOf('/') + 1),
        type: 'image/png',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
      })
      console.log(data);

      fetch("http://10.0.2.2:8080/Photos3",{
        method: "post",
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
    const submitPic4 = (photo) => {
      const data = new FormData();
      data.append('photo4',{
        name: photo.uri.substr(photo.uri.lastIndexOf('/') + 1),
        type: 'image/png',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
      })
      console.log(data);

      fetch("http://10.0.2.2:8080/Photos4",{
        method: "post",
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
    const submitPic5 = (photo) => {
      const data = new FormData();
      data.append('photo5',{
        name: photo.uri.substr(photo.uri.lastIndexOf('/') + 1),
        type: 'image/png',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
      })
      console.log(data);

      fetch("http://10.0.2.2:8080/Photos5",{
        method: "post",
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };
    const submitPic6 = (photo) => {
      const data = new FormData();
      data.append('photo6',{
        name: photo.uri.substr(photo.uri.lastIndexOf('/') + 1),
        type: 'image/png',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
      })
      console.log(data);

      fetch("http://10.0.2.2:8080/Photos6",{
        method: "post",
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };


  const checkData = (pic1, pic2, pic3, pic4, pic5, pic6) => {
    submitPic1(pic1);
    if(pic2 != ' '){
      submitPic2(pic2);
    }
    if(pic3 != ' '){
      submitPic3(pic3);
    }
    if(pic4 != ' '){
      submitPic4(pic4);
    }
    if(pic5 != ' '){
      submitPic5(pic5);
    }
    if(pic6 != ' '){
      submitPic6(pic6);
    }
  };


    return <View style={{backgroundColor: '#000000', height: 10000}}>
    <Wrapper>
      <ButtonWrapper>
        <Fragment>
        <View style={{ height: 0}} />
        <Text style={{color: '#ffffff', fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Add Some Photos</Text>
        <Text style={{color: '#ffffff', fontSize: 14, top: 10, right: 0, textAlign: 'center', opacity: .60}}>Add at least one photo, six maximum</Text>
        <View style={{top: 150, alignItems: 'center'}}>

        
        <View style={{ bottom: 10}}>
        <Text style={{color: '#ffffff', fontSize: 14, bottom: 85, right: 65, textAlign: 'center', opacity: .60}}>This will be your profile pic</Text>
        <View style={{ flexDirection: 'row'}}>
        

        
        <TouchableOpacity style={{ width: 220, height: 220, borderRadius: 25, bottom: 70, borderWidth: 4, borderColor:'#f686fc', right: 5}} onPress={() => {pickPhoto1()}}>
        <Image style={{width: 212, height: 212, right: .15, top: .05, zIndex: 4, position: 'relative', borderRadius: 21}} source={{uri: photo1.uri}}/>
        </TouchableOpacity>

        <View>
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 20, bottom: 70, borderWidth: 4, borderColor:'#57d9a3', left: 10}} onPress={() => {pickPhoto2()}}>
        <Image style={{width: 94, height: 94, left: 0, top: 0, zIndex: 4, position: 'relative', borderRadius: 17}} source={{uri:photo2.uri}}/>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 20, bottom: 50, borderWidth: 4, borderColor:'#ffe380', left: 10}} onPress={() => {pickPhoto3()}}>
        <Image style={{width: 94, height: 94, left: 0, top: 0, zIndex: 4, position: 'relative', borderRadius: 17}} source={{uri:photo3.uri}}/>
        </TouchableOpacity>
        </View>
        </View>

        <View style={{ flexDirection: 'row', top: 10}}>
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 20, bottom: 60, borderWidth: 4, borderColor:'#79e2f2', right: 5}} onPress={() => {pickPhoto4()}}>
        <Image style={{width: 94, height: 94, left: .2, top: 0, zIndex: 4, position: 'relative', borderRadius: 17}} source={{uri:photo4.uri}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 20, bottom: 60, borderWidth: 4, borderColor:'#ffb580', left: 12.5}} onPress={() => {pickPhoto5()}}>
        <Image style={{width: 94, height: 94, left: 0, top: 0, zIndex: 4, position: 'relative', borderRadius: 17}} source={{uri:photo5.uri}}/>
        </TouchableOpacity>
        <TouchableOpacity style={{ width: 100, height: 100, borderRadius: 20, bottom: 60, borderWidth: 4, borderColor:'#5172cf', left: 30}} onPress={() => {pickPhoto6()}}>
        <Image style={{width: 94, height: 94, left: 0, top: 0, zIndex: 4, position: 'relative', borderRadius: 17}} source={{uri:photo6.uri}}/>
        </TouchableOpacity>
        </View>
        
        </View>
        </View>

        <View style={{ flexDirection:"row", top: 210}}>
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
                onPress={() =>  navigation.navigate('UserNamePassword')}
              />
              <View style={{borderWidth: 3.5, borderColor: '#f686fc', position: 'absolute', width: 130, height: 45,
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
                onPress={() => {navigation.navigate('Bio');}}
              />
              <View style={{borderWidth: 3.5, borderColor: '#f686fc', position: 'absolute', width: 130, height: 45,
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
borderWidth: 3;
borderColor:${props => (props.green ? "#57d9a3" : props.pink ? "#f686fc" : 0)};
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
  
export default PhotosScreen;