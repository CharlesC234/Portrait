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


    // function for portraits displayed on recents scrollfeed
//props: left, color, imagePath, name
const MyPortraits = (props, {navigation}) => {
    return(
      <TouchableOpacity style={{width: 70, height: 97.5, borderRadius: 0, top: 0, left: props.left, backgroundColor: '#000000', overflow: 'hidden'}} onPress={()=>navigation.navigate('Portrait')}>
        <Image style={{width: 70, height: 70, borderRadius: 14, top: 2.5, left: 0, borderWidth: 3.75, borderColor: props.color}} source={props.imagePath}/>
        <Text style={{color: '#ffffff', fontSize: 14, left: 0,fontWeight: 'bold', top: 7.5, opacity: .60, textAlign: 'center', overflow: 'hidden'}}>{props.name}</Text>
        </TouchableOpacity>
    )
  }

  

  export default MyPortraits;