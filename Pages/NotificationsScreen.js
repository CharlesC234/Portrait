import React, { Component, Fragment, useState, memo } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';


import { enableScreens } from 'react-native-screens';
enableScreens(false);
import { useNavigation } from '@react-navigation/native';



const ChatsList = (props) =>{
  const styles = StyleSheet.create({
    NewMessage: {
      height: 7,
      width: 7, 
      left: 30, 
      borderRadius: 10, 
      top: 23.5, 
      backgroundColor: props.Color
    },
    NoNewMessage: {
      height: 7,
      width: 7, 
      left: 30, 
      borderRadius: 10, 
      top: 23.5, 
      backgroundColor: '#000000'
    }
  })
  const navigation = useNavigation();;
  return(
    <TouchableOpacity style={{width: '91%', height: 75, borderRadius: 0, top: 5, flexDirection: 'row', left: 10}} onPress={()=>navigation.navigate('Portrait')}>
    <Image style={{width: 60, height: 60, borderRadius: 12.5, top: 7.5, left: 0, borderWidth: 3.5, borderColor: props.Color}} source={props.ImageSource}/>
    <View style={{width: '60%'}}>
    <View style={{flexDirection: 'row'}}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: props.Color, left: 15, top: 15}}>{props.Name}</Text>
    <View style={[props.NewMessage ? styles.NewMessage : styles.NoNewMessage]}/>
    </View>
    <Text style={{fontSize: 14, color: '#ffffff', left: 16, top: 15, opacity: .60, width: '100%'}}>{props.LastMessage}</Text>
    </View>
    <Text style={{fontSize: 14, color: '#ffffff', left: 65, top: 35, opacity: .60}}>{props.TimeSince}</Text>
    </TouchableOpacity>
  )
}

const NotificationsScreen = ({navigation}) => {

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;



    return <ScrollView contentContainerStyle={{alignItems: 'center', flexGrow: 1, backgroundColor: '#000000', top: 0}}>
    <View style={{top: 35, width: '100%'}}>

    <View style={{flexDirection: 'row', top: 0, justifyContent: 'space-between'}}>
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2}}>
        <Image style={{width: 65, height: 50, right: 10, bottom: 0, transform: [{rotate: '180deg'}], tintColor: '#bb86fc'}}source={require('../assets/ArrowIcon2.png')}/>
    </TouchableOpacity>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', left: 10, top: 10}}>Notifications</Text>
    </View>
    <TouchableOpacity style={{width: 50, height: 50, right: 2.5, bottom: 5, alignItems: 'center', zIndex: 3, elevation: 3}}>
    <Image style={{width: 225, height: 225, right: 0, bottom: 85, tintColor: '#ff7597'}}source={require('../assets/NoNotifications.png')}/>
    </TouchableOpacity>
    </View>


    <ChatsList ImageSource= {require('../assets/uzivert.jpg')} Color="#bb86fc" Name="Lil Uzi" LastMessage= "How have you been? Like What..." TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/9.jpg')} Color="#57d9a3" Name="Kanye East" LastMessage= "Whats up" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/10.jpg')} Color="#FF7597" Name="Jay Shetter" LastMessage= "How have you been" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/me3.jpg')} Color="#bb86fc" Name="Charles Cahill" LastMessage= "Can you send me the work" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/uzivert.jpg')} Color="#bb86fc" Name="Lil Uzi" LastMessage= "How have you been? Like What..." TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/9.jpg')} Color="#57d9a3" Name="Kanye East" LastMessage= "Whats up" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/10.jpg')} Color="#FF7597" Name="Jay Shetter" LastMessage= "How have you been" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/me3.jpg')} Color="#57d9a3" Name="Charles Cahill" LastMessage= "Can you send me the work" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/me3.jpg')} Color="#bb86fc" Name="Charles Cahill" LastMessage= "Can you send me the work" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/uzivert.jpg')} Color="#bb86fc" Name="Lil Uzi" LastMessage= "How have you been? Like What..." TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/9.jpg')} Color="#57d9a3" Name="Kanye East" LastMessage= "Whats up" TimeSince= "5d ago" NewMessage= {false}/>

    <View style={{height: 50000}}/>


    <View style={{height: 20}}/>
    </View>
    </ScrollView>
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
      });
      
      
      
      export default NotificationsScreen;