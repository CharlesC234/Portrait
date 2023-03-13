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
import { Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { elementsThatOverlapOffsets } from 'react-native/Libraries/Lists/VirtualizeUtils';


//function for posts with only text, no files
//props: bottom, portraitColor, portraitName, portraitImagePath, userColor, Anonymous?, userName, 
//userImagePath, timeSince, postTextContent, likes, dislikes, comments

  const ProfilePost =(props) => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    var picWidth = 0;
    var picHeight = 0;
    const {width, height} = Image.resolveAssetSource(props.file ? props.PostFilePath : require('../../assets/me2.jpg'));

    const getImageDimensionsHeight = () => {
        picWidth = (screenWidth * .936);
        picHeight = ((height * picWidth) / (width));
        return(picHeight);
      }
    const styles = StyleSheet.create({
      AnonymousImage: {
        width: 37.5,
        height: 37.5, 
        borderRadius:7.5,
        top: .75,  
        borderWidth: 2.5, 
        borderColor: props.userColor,
        tintColor: props.userColor,
      },
      NormalImage: {
          width: 37.5,
          height: 37.5, 
          borderRadius:7.5, 
          borderWidth: 2.5, 
          top: .75, 
          borderColor: props.userColor
      },
      WithFile:{
        width: '103%', 
        height: getImageDimensionsHeight(),
        borderRadius: 0, 
        top: 10, 
        right: 7.5,
        resizeMode: 'cover',
        maxheight: 500,
      },
      WithFileNoText:{
        width: '103%', 
        height: getImageDimensionsHeight(),
        borderRadius: 0, 
        top: 27.5, 
        right: 7.5,
        resizeMode: 'cover',
        maxheight: 500,
      },
      WithoutFile:{
        width: 0, 
        height: 0,
      },
      WithText:{
        width: '98.5%', 
        right: 5.25, 
        top: 0,
        fontSize: 14,
        color: '#ffffff',
        opacity: .95,
        backgroundColor: 'transparent'
      },
      WithoutText:{
        height: 0,
        width: 0,
      },
      Margin:{ 
        height: 15,
      },
      MarginNoText:{ 
        height: 25,
      },
      WithoutMargin:{
        height: 0,
      }
    })
    const navigation = useNavigation();;

    return(
        <View style={{alignItems: 'center', width: '100%', left: 0}}>

        <View style= {{flexDirection: 'row', width: '100%', top: 10, justifyContent: 'space-between', right: 7.5}}>
        <View style = {{ flexDirection : 'row'}}>

        <TouchableOpacity onPress={()=>navigation.navigate('Portrait')} style={{
        left: 10, flexDirection: 'row', backgroundColor: '#000000', width: '67.5%'}}>
        <View style={{flexDirection: 'row', backgroundColor: 'transparent', width: '137.5%'}}>
        <Image style={[props.Anonymous ? styles.AnonymousImage : styles.NormalImage]} source={props.userImagePath}/>
        <View style={{bottom: 2, width: '110%'}}>
        <Text style={{color: props.userColor, fontSize: 14.5, top: 3, left: 8,fontWeight: 'bold', width: '100%', overflow: 'hidden', height: 22.5}}>{props.userName}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        </View>
        </View>
        <Text style={{fontSize: 12, opacity: .60, color: '#ffffff', left: 0, top: 2}}>{props.timeSince}</Text>
        </View>
        </TouchableOpacity>

        
        </View>

        <View style={{flexDirection: 'row'}}>
        <Image style={{width: 5, height: 20,left: 0, top: 2, tintColor: '#ffffff', opacity: .45}} source={require('../../assets/OptionsIcon.png')}/>
        </View>

        </View>
        <View style={{height: 10}}/>


        <TouchableOpacity activeOpacity={.7}  style={{width: '98%', bottom: 5, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0)'}} onPress={()=>navigation.navigate('PostPage')}>

        <View style={{width: '100%', right: 0, bottom: 13.5}}>
        <View style={{height: 0}}/>
        <View style={{width: '98%', left: 5, borderLeftColor: props.userColor, flexDirection: 'row'}}>
        <View style={{width: '100%'}}>
        <Text style={[props.hasText ? styles.WithText : styles.WithoutText]}>
        {'             '}{props.postTextContent}
        </Text>
        <TouchableOpacity activeOpacity={.7}  style={{width: '100%', bottom: 5, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0)'}} onPress={()=>navigation.navigate('MediaPage')}>
        <Image style={[props.file ? [props.hasText? styles.WithFile : styles.WithFileNoText] : styles.WithoutFile]} source={props.PostFilePath}/>
        </TouchableOpacity>
        <View style={[props.file ? [props.hasText? styles.Margin : styles.MarginNoText] : styles.WithoutMargin]}/>
 
  
        </View>
        </View>

        <View style={{flexDirection: 'row', bottom: 0, right: 60, height: 17, width: '100%', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', width: 220}}>
        <Image style={{width: 65, height: 65, left: 40, bottom: 17.5, tintColor: '#ffffff', opacity: .45}}source={require('../../assets/ThumbsUp.png')}/>
        <Text style={{top: 6, left: 25, fontSize: 14,color: '#ffffff', opacity: .45}}>{props.likes}</Text>
        <Image style={{width: 65, height: 65, left: 20, bottom: 15, tintColor: '#ffffff', opacity: .45}}source={require('../../assets/ThumbsDown.png')}/>
        <Text style={{top: 6, left: 5, fontSize: 14,color: '#ffffff', opacity: .45}}>{props.dislikes}</Text>
        <Image style={{width: 35, height: 35, left: 15, bottom: 2, tintColor: '#ffffff', opacity: .45}}source={require('../../assets/Comment.png')}/>
        <Text style={{top: 6, left: 12.5, fontSize: 14,color: '#ffffff', opacity: .45}}>{props.comments}</Text>
        </View>
        <View style={{flexDirection: 'row', width: 0}}>
        <Image style={{width: 35, height: 32.5, left: 0, bottom: 2, tintColor: '#ffffff', opacity: .45}}source={require('../../assets/SharePage.png')}/>
        <Image style={{width: 30, height: 27.5, left: 0, top: 0, tintColor: '#ffffff', opacity: .45}}source={require('../../assets/Save.png')}/>
        </View>
        </View>

        </View>
        </TouchableOpacity>
        <View style={{height: 2.5, backgroundColor: 'transparent'}}/>
        <View style={{height: 1, backgroundColor: '#ffffff', width: '98%', opacity: .15, top: 0, right: 2}}/>
        <View style={{height: 2.5, backgroundColor: 'transparent'}}/>


        </View>
        
    )
  }


  export default ProfilePost;