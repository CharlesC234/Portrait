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

import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const NavBar =(props) => {
  const styles = StyleSheet.create({
    OnPage: {
      width: 50, 
      height: 50, 
      alignItems: 'center', 
      zIndex: 2,
      opacity: 1,
      elevation:2,
    },
    OffPage: {
      width: 50, 
      height: 50, 
      alignItems: 'center', 
      opacity: .75,
      zIndex: 2,
      elevation: 2
    },
    OnFriends: {
      width: 30,
      height: 30,
      top: 6, 
      tintColor: '#ffffff'
    },
    OnExplore: {
      width: 26,
      height: 26,
      top: 7.5,
      tintColor: '#ffffff'
    },
    OnProfile: {
      width: 26,
      height: 26,
      top: 7, 
      tintColor: '#ffffff'
    },
    OffFriends: {
      width: 30,
      height: 30,
      top: 6, 
    },
    OffExplore: {
      width: 26,
      height: 26,
      top: 7.5,
    },
    OffProfile: {
      width: 26,
      height: 26,
      top: 7,
    }

  })
    const navigation = useNavigation();;
    return (
      <View style={{height: 55.5, alignItems: 'center', backgroundColor: '#000000', position: 'absolute', top: screenHeight - screenHeight*.06}}>
      <View style={{width: '102.5%', right: '12.5%', height: 35, top: 3.5, right: 5.5, backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <TouchableOpacity style={[props.Home ? styles.OnPage : styles.OffPage]} onPress={()=>navigation.navigate('Home')}>
      <Image style={[props.Home ? styles.OnFriends : styles.OffFriends]}source={require('../../assets/FriendsIconNavBar.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={[props.Explore ? styles.OnPage : styles.OffPage]} onPress={()=> navigation.navigate('Explore')}>
      <Image style={[props.Explore ? styles.OnExplore : styles.OffExplore]}source={require('../../assets/SearchIconNavBar.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={[props.Profile ? styles.OnPage : styles.OffPage]} onPress={()=> navigation.navigate('Profile')}>
      <Image style={[props.Profile ? styles.OnProfile : styles.OffProfile]}source={require('../../assets/ProfileIconNavBar.png')}/>
      </TouchableOpacity>
      </View>
      </View>
    )
  }

  export default NavBar; 