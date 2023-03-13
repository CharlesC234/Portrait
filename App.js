/* eslint-disable prettier/prettier */
import React, { Component, useEffect, useState} from 'react';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {View, SafeAreaView} from 'react-native';

import WelcomeScreen from './Pages/SignInSignUp/WelcomeScreen';
import VerifySignUpScreen from './Pages/SignInSignUp/VerifySignUpScreen';
import UserNamePasswordScreen from './Pages/SignInSignUp/UserNamePasswordScreen';
import BioScreen from './Pages/SignInSignUp/BioScreen';
import PhotosScreen from './Pages/SignInSignUp/PhotosScreen';
import PrivacyScreen from './Pages/SignInSignUp/PrivacyScreen';
import SignInScreen from './Pages/SignInSignUp/SignInScreen';
import ForgotPasswordScreen from './Pages/SignInSignUp/ForgotPasswordScreen';
import VerifyForgotPasswordScreen from './Pages/SignInSignUp/VerifyForgotPasswordScreen';
import ResetPasswordScreen from './Pages/SignInSignUp/ResetPasswordScreen';
import HomeScreen from './Pages/HomeScreen';
import ExploreScreen from './Pages/ExploreScreen';
import ProfileScreen from './Pages/ProfileScreen';
import PortraitScreen from './Pages/PortraitScreen';
import ChatsScreen from './Pages/ChatsScreen';
import NotificationsScreen from './Pages/NotificationsScreen';
import SelectUserToPostScreen from './Pages/SelectUserToPostScreen';
import PostPageScreen from './Pages/PostPageScreen';
import MediaPageScreen from './Pages/MediaPageScreen';
import CameraScreen from './Pages/CameraScreen';



const Stack = createStackNavigator();


export default class Portrait extends Component {
  
  render() { 
    return <SafeAreaView style={{ flex: 1, backgroundColor: '#000000' }} forceInset={{top:'never'}}>
    <StatusBar style="light" backgroundColor="transparent" hidden={false}/>
      <NavigationContainer style={{animationEnabled: false, backgroundColor: '1c1c1c'}} theme={{ colors: { background: '1c1c1c' }}}>
      <Stack.Navigator initialRouteName='Welcome' style={{backgroundColor:'#1c1c1c'}} screenOptions={{
      detachPreviousScreen: true, 
      animationEnabled: false,
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      cardStyle: { backgroundColor: '#000000'}}}>

      <Stack.Screen name ="Welcome" component={WelcomeScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="VerifySignUp" component={VerifySignUpScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="UserNamePassword" component={UserNamePasswordScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="Bio" component={BioScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="Photos" component={PhotosScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="Privacy" component={PrivacyScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="SignIn" component={SignInScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="ForgotPassword" component={ForgotPasswordScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="ResetPassword" component={ResetPasswordScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name ="VerifyForgotPassword" component={VerifyForgotPasswordScreen} options={{headerShown: false,
       presentation: 'card', backgroundColor: '#1c1c1c',}}>
      </Stack.Screen>

      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="Explore" component={ExploreScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="Portrait" component={PortraitScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="Chats" component={ChatsScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="Notifications" component={NotificationsScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="SelectUserToPost" component={SelectUserToPostScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="PostPage" component={PostPageScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="MediaPage" component={MediaPageScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false, 
       presentation: 'card'}}>
      </Stack.Screen>

      </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaView>
  }
}




 