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

import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

//function for posts with only text, no files
//props: bottom, portraitColor, portraitName, portraitImagePath, userColor, Anonymous?, userName, 
//userImagePath, timeSince, postTextContent, likes, dislikes, comments
const TopPortraits =(props, {navigation}) => {
    if(props.Index == "1"){
      return(
         <TouchableOpacity style={{width: '50.125%', height: 292.5, top: 0, backgroundColor: props.Color, borderRadius: 7.5}} onPress={()=>navigation.navigate('Portrait')}>
         <View style={{width: '93.5%', height: 205, borderRadius: 10, top: 8, left: 7.75, borderWidth: 0, backgroundColor: "#000000", position: 'absolute' }}/>
         <Image style={{width: '93.5%', height: 205, borderRadius: 10, top: 5, left: 4.75, borderWidth: 4, borderColor: "#000000"}} source={props.ImageSource}/>
         <View>
         <View style={{width: '90%', flexDirection: 'row', left: 9.5, top: 2.5}}>
         <Text style={{fontSize: 22, fontWeight: '900', top: 8.5, left: 0, color: '#000000'}}>{props.Name}</Text>
         <View style={{width: '50%', height: 25, backgroundColor: '#000000', top: 14, left: '123%', borderRadius: 7.5}}/>
         <TouchableOpacity style={{width: '50%', height: 25, backgroundColor: '#38eabe', top: 11.5, left: '51.5%', borderRadius: 7.5, borderWidth: 3.5, borderColor: '#000000', position: 'absolute'}}>
         <Text style={{fontSize: 16, fontWeight: '900', bottom: 3, left: 17.5, width: 175, color: '#000000'}}>Follow</Text>
         </TouchableOpacity>
         </View>
         <Text style={{fontSize: 14, left: 10, top: 12, width: '92.5%', height: 37.5, color: '#000000', fontWeight: 'bold'}}>{props.Bio}</Text>
         </View>
         </TouchableOpacity>
      )
    }else if(props.Index == "2"){
      return(
         <TouchableOpacity style={{width: '71%', height: 166.5, top: 0, backgroundColor: props.Color, borderRadius: 7.5}} onPress={()=>navigation.navigate('Portrait')}>
         <View style={{width: '92.5%', height: 122.5, borderRadius: 10, top: 8, left: 8.5, backgroundColor: "#000000", position: 'absolute' }}/>
         <Image style={{width: '92.5%', height: 122.5, borderRadius: 10, top: 5, left: 6.5, borderWidth: 3.5, borderColor: "#000000"}} source={props.ImageSource}/>
         <View style={{width: '95%'}}>
         <View style={{width: '90%', flexDirection: 'row', left: 9.5}}>
         <Text style={{fontSize: 20, fontWeight: '900', top: 12, left: 2.5, color: '#000000'}}>{props.Name}</Text>
         <View style={{width: '45%', height: 25, backgroundColor: '#000000', top: 15.5, left: '210%', borderRadius: 7.5}}/>
         <TouchableOpacity style={{width: '45%', height: 25, backgroundColor: '#00c6ff', top: 13, left: '62%', borderRadius: 7.5, borderWidth: 3.5, borderColor: '#000000', position: 'absolute'}}>
         <Text style={{fontSize: 16, fontWeight: '900', bottom: 3, left: 8, color: '#000000'}}>Follow</Text>
         </TouchableOpacity>
         </View>
         </View>
         </TouchableOpacity>
     )
    }else if(props.Index == "3" || props.Index == "4"){
      return(
         <TouchableOpacity style={{width: '34.25%', height: 119.5, top: 7.5, right: 0, zIndex: 2, backgroundColor: props.Color, borderRadius: 7.5}} onPress={()=>navigation.navigate('Portrait')}>
         <View style={{width: '85%', height: 85, borderRadius: 10, top: 8, left: 9, borderWidth: 0, backgroundColor: "#000000", position: 'absolute' }}/>
         <Image style={{width: '86%', height: 86, borderRadius: 10, top: 5, left: 6, borderWidth: 3.5, borderColor: "#000000"}} source={props.ImageSource}/>
         <View style={{width: '95%'}}>
         <Text style={{fontSize: 18, fontWeight: '900', top: 6.5, left: 22.5, width: 175, color: '#000000'}}>{props.Name}</Text>
         </View>
         </TouchableOpacity>
     )
    }
  }


  export default TopPortraits