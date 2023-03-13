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
  Modal,
  Dimensions
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);

import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

    // function for portraits displayed on recents scrollfeed
//props: left, color, imagePath, name
const Recents = (props) => {
    const navigation = useNavigation();
    return(
      <TouchableOpacity style={{width: (screenWidth/2)-6.5, height: 120, alignItems: 'center', borderRadius: 7.5, top: 0, left: props.left, backgroundColor: props.color, overflow: 'hidden', flexDirection: 'row'}}
       onPress={()=>navigation.navigate('Portrait')}>
       <View style={{width: '45%', height: 107.5, borderRadius: 12.5, top: 7.5, left: 7.5, borderWidth: 0, backgroundColor: "#000000", position: 'absolute' }}/>
        <Image style={{width: '45%', height: 107.5, borderRadius: 10, bottom: 1, left: 5, borderWidth: 3.5, borderColor: "#000000"}} source={props.imagePath}/>
        <View style={{flexDirection: 'column', top: 15}}>
        <Text style={{color: '#000000', fontSize: 20, right: 50,fontWeight: '800', bottom: 19, opacity: 1, textAlign: 'center'}}>{props.name}</Text>
        <Text style={{fontSize: 14, left: 14, bottom: 20, width: 90, height: 52.5, color: '#000000', fontWeight: 'bold'}}>{props.Bio}</Text>

        <View style={{width: '48%', height: 25, backgroundColor: '#000000', top: 67.5, left: 17, borderRadius: 7.5, position: 'absolute'}}/>
        <TouchableOpacity style={{width: '48%', height: 25, backgroundColor: props.secondary, bottom: 15, left: 14.5, borderRadius: 7.5, borderWidth: 3.5, borderColor: '#000000'}}>
         <Text style={{fontSize: 16, fontWeight: '900', bottom: 3, left: 16, width: 175, color: '#000000'}}>Follow</Text>
         </TouchableOpacity>
        </View>
        </TouchableOpacity>
    )
  }

  

  export default Recents;