import React, { Component, Fragment, useState, useRef, useEffect } from 'react';
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
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import ImageColors from 'react-native-image-colors'

  const Post =(props) => {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    var picWidth = 0;
    var picHeight = 0;
    const {width, height} = Image.resolveAssetSource(props.file ? props.PostFilePath : require('../../assets/me2.jpg'));
    const [backColor, setBackColor] = useState('#000000');

    const getBackgroundColor = async() => {
      var color;
      await ImageColors.getColors(Image.resolveAssetSource(props.PostFilePath).uri, {fallback: '#ffffff'})
      .then((response) => response)
      .then((response) => {
        color = response;
        setBackColor(color.dominant);
      })
    }

    const getImageDimensionsHeight = () => {
        picWidth = (screenWidth * 1);
        picHeight = ((height * picWidth) / (width));
        if(picHeight > screenHeight * 9){picHeight = screenHeight * 9};
        return(picHeight);
      }

      useEffect(() =>{
        getBackgroundColor();
      })

    const styles = StyleSheet.create({
      background: {
        width: screenWidth, 
        height: screenHeight,
        opacity: .9,
        backgroundColor: backColor,
        position: 'absolute',
        top: 10
      },
      AnonymousImage: {
        width: 27.5,
        height: 27.5, 
        borderRadius:6.5,
        top: 2.5,  
        borderWidth: 2.25,
        borderColor: props.userColor,
        tintColor: props.userColor,
      },
      NormalImage: {
          width: 27.5,
          height: 27.5, 
          borderRadius:6.5, 
          borderWidth: 2.25, 
          top: 2.5, 
          borderColor: props.userColor
      },
      PortaitImage: {
        width: 27.5,
        height: 27.5, 
        borderRadius:6.5, 
        borderWidth: 2.25, 
        bottom: 0, 
        borderColor: props.portraitColor,
      },
      WithFile:{
        width: screenWidth, 
        height: getImageDimensionsHeight(),
        top: 10, 
        right: 0,
        borderRadius: 0,
        resizeMode: 'cover',
        maxheight: 500,
        alignSelf:'center'
      },
      WithFileNoText:{
        width: screenWidth, 
        height: getImageDimensionsHeight(),
        top: 10, 
        left: 0,
        borderRadius: 0,
        resizeMode: 'cover',
        alignSelf:'center',
        maxheight: 500,
      },
      WithoutFile:{
        width: 0, 
        height: 0,
      },
      WithText:{
        width: '97.5%', 
        left: 10,
        top: screenHeight * .84,
        fontSize: 14.5,
        opacity: .825,
        position: 'absolute',
        color: '#ffffff',
        backgroundColor: 'transparent'
      },
      WithoutText:{
        height: 0,
        width: 0,
      },
      Margin:{ 
        height: 2.5,
      },
      Sep:{ 
        height: 0,
      },
      MarginNoText:{ 
        height: 5,
      },
      WithoutMargin:{
        height: 0,
      }
    })
    const navigation = useNavigation();;

    return(
      <View style={{alignItems: 'center', width: '100%', left: 0, height: screenHeight}}>


      <TouchableOpacity activeOpacity={.7}  style={{width: '98%', bottom: 2.5, flexDirection: 'row', backgroundColor: 'rgba(255, 255, 255, 0)'}} onPress={()=>navigation.navigate('PostPage')}>
      <View style={{width: '100%', right: 1, bottom: 8}}>
      <View style={{height: 0}}/>

      {/*Post cage*/}
      <View style={{width: '99%', right: 3, flexDirection: 'row', alignContent: 'center'}}>

      {/*Post background*/}
      <View style={styles.background}/>

        <View style={{height: screenHeight, width: screenWidth, backgroundColor: '#ffffff', position: 'absolute', opacity: .1}}/>
        <View style={{top: 22.5}}>


        {/*Header, post name, profile pic, dash, portrait pic, portrait name*/}
      <View style= {{flexDirection: 'row', justifyContent: 'space-between', right: 17.5, width: '95%', opacity: 1, position: 'absolute', 
      bottom: screenHeight * .885, zIndex: 1}}>
      <View style = {{ flexDirection : 'row', left: 1, top: 10}}>

      <TouchableOpacity onPress={()=>navigation.navigate('Portrait')} style={{
      left: 6.5, flexDirection: 'row', backgroundColor: 'transparent', width: '42.5%'}}>
      
      <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
      <Image style={[props.Anonymous ? styles.AnonymousImage : styles.NormalImage]} source={props.userImagePath}/>
      <View style={{bottom: 3, right: 1.5}}>
      <Text style={{color: props.userColor, fontSize: 14, left: 10,fontWeight: '700', overflow: 'hidden', height: 22.5, top: 8.5}}>{props.userName}</Text>
      </View>
      </View>
      </TouchableOpacity>
      <View style={{width: 7.5}}/>

      <View style={{width: 17.5, height: 3, borderRadius: 10, left: 8, top: 14.5, backgroundColor: props.userColor}}/>
      <View style={{width: 7.5, height: 3, borderRadius: 10, left: 13, top: 14.5, backgroundColor: props.portraitColor}}/>

      <TouchableOpacity onPress={()=>navigation.navigate('Portrait')} style={{
       flexDirection: 'row', backgroundColor:'transparent', left: 32.5, width: '52.5%', top: 1}}>
      <View style={{flexDirection: 'row', width: '100%', top: 1}}>
      <Image style={styles.PortaitImage} source={props.portraitImagePath}/>
      <View style={{ width: '72%', bottom: 4, backgroundColor: 'transparent', right: 1.5}}>
      <Text style={{color: props.portraitColor, fontSize: 14, left: 10,fontWeight: '700', width: '100%', overflow: 'hidden', height: 22.5, top: 7.25}}>{props.portraitName}</Text>
      </View>
      <View style={{width: 10}}/>
      </View>
      </TouchableOpacity>
      
      </View>

      <View style={{flexDirection: 'row'}}>
        <Image style={{width: 7.5, height: 37.5, right: 14, top: 7.25}} source={require('../../assets/OptionsIcon.png')}/>
      </View>

      </View>

      {/*Linear Gradients*/}
      <LinearGradient colors={['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, .65)', 'rgba(0, 0, 0, .25)', 'rgba(0, 0, 0, 0)']}
      locations={[0,.425,.65,.9]} 
      style={{width: screenWidth, height: 125, bottom: screenHeight * .8, zIndex: 0, position: 'absolute'}}>
      </LinearGradient>
      <LinearGradient colors={['rgba(0, 0, 0, 1)','rgba(0, 0, 0, .9)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, 0)']}
      locations={[0,.275,.475,.7]} 
      style={{width: screenWidth, height: 300, top: screenHeight * .65, zIndex: 0, position: 'absolute', transform: [{ rotate: '180deg'}]}}>
      </LinearGradient>



      <View style={{width: '100%'}}>
      <View style={{height: 14}}/>
      <TouchableOpacity activeOpacity={.7}  style={{width: '100%', bottom: 7.5, flexDirection: 'row', height: screenHeight * .9,
      alignItems: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
      <Image 
        style={[props.file ? [props.hasText? styles.WithFile : styles.WithFileNoText] : styles.WithoutFile]} 
        source={props.PostFilePath}
        />

      <View style={[props.hasText ? props.file ?  styles.Sep : styles.WithoutMargin : styles.WithoutMargin]}/>
      <Text style={[props.hasText ? styles.WithText : styles.WithoutText]}>
      {props.postTextContent}
      </Text>
      <View style={[props.file ? [props.hasText? styles.Margin : styles.MarginNoText] : styles.WithoutMargin]}/>

      {/*post footer*/}
      <View style={{flexDirection: 'row', top: screenHeight* .885, left: 9, height: 16, width: '90%', justifyContent: 'space-between', opacity: 1, position: 'absolute'}}>
      <View style={{flexDirection: 'row', width: '55.5%', right: 0}}>

      <View style={{width: '45%', flexDirection: 'row', left: 0}}>
      <Image style={{width: 21, height: 21, right: 0, top: 7, tintColor: '#ffffff', opacity: .8}}source={require('../../assets/HeartIconNew.png')}/>
      <Text style={{top: 8, left: 10, fontSize: 12,color: '#ffffff'}}>{props.likes} Likes</Text>
      </View>

      <View style={{width: '10%', flexDirection: 'row'}}>
      
      </View>

      <View style={{width: '40%', flexDirection: 'row', right: 0}}>
      <Image style={{width: 18.5, height: 18.5, right: 0, top: 7.5, tintColor: '#ffffff', opacity: .8}}source={require('../../assets/CommentIconNew.png')}/>
      <Text style={{top: 8, left: 10, fontSize: 12,color: '#ffffff'}}>{props.comments} Comments</Text>
      </View>
      </View>

      <View style={{width: '51%', flexDirection: 'row', justifyContent: 'flex-end'}}>
      <Text style={{fontSize: 12, color: '#ffffff', left: 0, top: 8}}>{props.timeSince}</Text>
      </View>
      </View>

      </TouchableOpacity>

      </View> 
      </View>




      </View>
      </View>
      </TouchableOpacity>
      </View>

        
    )
  }


  export default Post;