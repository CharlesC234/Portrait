import React, { Component, Fragment, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Modal
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);


//function for posts with only text, no files
//props: bottom, portraitColor, portraitName, portraitImagePath, userColor, Anonymous?, userName, 
//userImagePath, timeSince, postTextContent, likes, dislikes, comments
const MediaPageScreen =({navigation}) => {
    const styles = StyleSheet.create({
    })
  
    return(
      <View style={{alignItems: 'center', flex: 1}}>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', top: 40}}>

      <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2}}>
      <Image style={{width: 65, height: 50, right: 10, bottom: 0, transform: [{rotate: '180deg'}]}}source={require('../assets/ArrowIcon2.png')}/>
      </TouchableOpacity>

      <View style={{top: 0, right: 10, height: 50, left: 0, backgroundColor: 'transparent', width: '90%'}}>
      <Image style={{width: 30, height: 30, left: '87.5%', tintColor: '#ffffff'}}source={require('../assets/OptionsIcon.png')}/>
      </View>
      </View>
      <Image style={{width: '100%', height: '100%', resizeMode: 'contain', position: 'absolute'}} source={require('../assets/Post-1.jpg')}/>
        </View>
    )
  }


  export default MediaPageScreen;