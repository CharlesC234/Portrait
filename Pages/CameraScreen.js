/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useRef, memo, useMemo} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  Button,
  Modal
} from 'react-native';
import { PermissionsAndroid} from "react-native";
import { Camera, useCameraDevices, CameraPosition} from 'react-native-vision-camera';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import { StatusBar } from 'expo-status-bar';
import CameraRoll from '@react-native-community/cameraroll';
import SelectUserToPostScreen from './SelectUserToPostScreen';
import Video from 'react-native-video';

const CameraScreen = ({navigation}) => {

const [photos, setPhotos] = useState({data: null});
const [cameraPermission, setCameraPermission] = useState('not-determined');
const [microphonePermission, setMicrophonePermission] = useState('not-determined');
const [cameraPosition, setCameraPosition] = useState('front');

const getPermissions = async() =>{
setCameraPermission(await Camera.getCameraPermissionStatus())
setMicrophonePermission(await Camera.getMicrophonePermissionStatus())
}

useEffect(() => {
  getPermissions();
}, [])
const devices = useCameraDevices();
const device = cameraPosition == 'front' ? devices.front : devices.back;
const camera = useRef(null);
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const toggleCameraType = () => {
  if (cameraPosition == 'front') {
    setCameraPosition('back')
  } else {
    setCameraPosition('front')
  }
}


const DoubleTap = ({children}) => {
  const [camTorch, setCamTorch] = useState("off");
  const [showTap, setShowTap] = useState('transparent');
  const [tapX, setTapX] = useState(0.0);
  const [tapY, setTapY] = useState(0.0);
  const doubleTapRef = useRef(null);
  const onSingleTapEvent = async(event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
      setTapX(event.nativeEvent.x);
      setTapY(event.nativeEvent.y)
      if(cameraPosition == 'back'){
        camera.current.setNativeProps({torch: "on"});
        setCamTorch("on");
      }
        setShowTap('#ffffff');
        await camera.current?.focus({ x: tapX, y: tapY });
    }
  };
  const onDoubleTapEvent = (event) => {
    if (event.nativeEvent.state === State.ACTIVE) {
       console.log("double tap");
       toggleCameraType();
    }
  };
  if(camTorch == "on"){
    setTimeout(() => {
      {camera.current.setNativeProps({torch: "off"}); setCamTorch("off"); setShowTap('transparent')}
      }, 1500);
  }else if(showTap == '#ffffff'){
    setTimeout(() => {
      setShowTap('transparent');
      }, 1500);
  }
  return (
    <View>
      <View style={{position: 'absolute', bottom: ((screenHeight - 45) - tapY), right: ((screenWidth - 45) - tapX)}}>
      <View style={{width: 70, height: 70, borderRadius: 70, alignSelf: 'center', backgroundColor: 'transparent', borderWidth: 2.5, borderColor: showTap}}/>
      <View style={{width: 70, height: 70, borderRadius: 70, backgroundColor: showTap, alignSelf: 'center', opacity: .45, bottom: 70}}/>
      </View>
    <TapGestureHandler
      onHandlerStateChange={onSingleTapEvent}
      maxDurationMs={200}
      waitFor={doubleTapRef}>
      <TapGestureHandler
        ref={doubleTapRef}
        onHandlerStateChange={onDoubleTapEvent}
        numberOfTaps={2}
        maxDist={50}
        maxDelayMs={150}>
        {children}
      </TapGestureHandler>
    </TapGestureHandler>
    </View>
  );
};


const FooterFunc = memo(() => {
  const [flash, setFlash] = useState('off');
  const [contentType, setContentType] = useState('photo');
  const [recording, setRecording] = useState(false);
  const [squareBorder, setSquareBorder] = useState(5);
  const [photo, setPhoto] = useState(null);
  const [disVideo, setDisVideo] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVideoVisible, setModalVideoVisible] = useState(false);

  const takePicture = async() => {
    const photoInit = await camera.current.takePhoto({
      flash: flash,
    })
      console.log(photoInit.path);
      setPhoto(photoInit.path);
      setModalVisible(true);
  }
  
  const takeVideo = () => {
      camera.current.startRecording({
      flash: flash,
      onRecordingFinished: (video) => {console.log(video.path); setDisVideo(video.path)},
      onRecordingError: (error) => console.error(error),
    })
  }
  
  const stopVideo = async() => {
    await camera.current.stopRecording()
  }
  const vid = (value) => {
    if(value == true){
    setSquareBorder(10)
    takeVideo();
    }else{
    stopVideo();
    setSquareBorder(5)
    setModalVideoVisible(true);
    } 
    setRecording(value);
  }
  return <View> 
  <View style={{flexDirection: 'row', zIndex: 5, bottom: '225%'}}>
  <View style={{height:42.5, width: 42.5, backgroundColor: '#000000', zIndex:0, opacity: .45, left: 12.5, borderRadius: 10}}/>
  <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{height: 50, right: 42.5, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2, bottom: 3.5}}>
      <Image style={{width: 65, height: 50, right: 0, bottom: 0, tintColor: '#57d96d', transform: [{rotate: '180deg'}]}}source={require('../assets/ArrowIcon2.png')}/>
  </TouchableOpacity>
  <View style={{width: '54.5%'}}/>
  <View style={{height:42.5, width: 42.5, backgroundColor: '#000000', zIndex:0, opacity: .45, right: 10, borderRadius: 10}}/>
  <TouchableOpacity onPress={()=>setFlash(flash == 'off' ? 'on' : 'off')} style={{height: 50, backgroundColor: 'transparent', right: 61.5, width: 50, borderRadius: 12, zIndex: 2, bottom: 3.5}}>
      <Image style={{width: 60, height: 50, right: 0, bottom: 0, tintColor: '#79e2f2',}}
      source={flash == 'on' ? require('../assets/FlashOn.png') : require('../assets/FlashOff.png')}/>
  </TouchableOpacity>
  <View style={{height: 42.5, width: 42.5, backgroundColor: '#000000', zIndex:0, opacity: .45, right: 47.5, borderRadius: 10}}/>
  <TouchableOpacity onPress={() => toggleCameraType()} style={{height: 50, backgroundColor: 'transparent', right: 98.5, width: 50, borderRadius: 12, zIndex: 2, bottom: 3.5}}>
      <Image style={{width: 60, height: 50, right: 0, bottom: 0, tintColor: '#bb86fc',}}source={require('../assets/FlipCamera.png')}/>
  </TouchableOpacity>
  </View>

  <TouchableOpacity onPress={() => 
  {recording == false ? contentType == 'photo' ? takePicture() : vid(true) : vid(false)}} 
  style={{height: 100, backgroundColor: 'transparent', right: 0, 
  alignSelf: 'center', width: 100, borderRadius: 12, zIndex: 2, bottom: screenHeight / 2.5}}>
  <View style={{width: 80, height: 80, borderRadius: 20, alignSelf: 'center', backgroundColor: 'transparent', borderWidth: squareBorder, 
  borderColor: '#ffffff', zIndex: 4}}/>
      <View style={{width: 80, height: 80, borderRadius: 20, backgroundColor:  contentType == 'photo' ? '#ffffff' : '#ff7597', 
      alignSelf: 'center', opacity: contentType == 'photo' ? .45 : 1, bottom: 80, zIndex: 0}}/>
  </TouchableOpacity>
  
  <View style={{flexDirection: 'row', width: screenWidth, bottom: '79%', justifyContent: 'center', alignSelf: 'center', left: 0}}>
  <TouchableOpacity style={{height: 30, width: 100, borderRadius: 50,
  opacity: contentType == 'photo' ? 1 : .45}} onPress={() => {setContentType('photo')}}>
  <Text style={{width: 100, height: 30, borderRadius: 50, textAlign: 'center', top: 0, 
  color: '#ffb580', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, .5)', textAlignVertical: 'center'}}>Photo</Text>
  <View style={{width: 100, height:30, backgroundColor: 'transparent', borderColor: '#ffb580', 
  borderRadius: 50, bottom: 30, borderWidth: 3}}/>
  </TouchableOpacity>
  <View style={{width: 20}}/>
  <TouchableOpacity style={{height: 30, width: 100, borderRadius: 50, 
  opacity: contentType == 'photo' ? .45 : 1}} onPress={() => {setContentType('video')}}>
  <Text style={{width: 100, height: 30, borderRadius: 50, textAlign: 'center', top: 0, 
  color: '#f686fc', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, .5)', textAlignVertical: 'center'}}>Video</Text>
  <View style={{width: 100, height:30, backgroundColor: 'transparent', borderColor: '#f686fc', 
  borderRadius: 50, bottom: 30, borderWidth: 3}}/>
  </TouchableOpacity>
  </View>

  <Modal
        animationType="slide"
        transparent={true}
        style={{position: 'absolute', zIndex: 5, flex: 1}}
        visible={modalVisible}>
        <View style={{zIndex: 5, position: 'absolute', flexDirection: 'row', width: screenWidth - 17.5, justifyContent: 'space-between'}}>
        <View>
        <View style={{height:42.5, width: 42.5, top: 12.5, backgroundColor: '#000000', zIndex:0, opacity: .45, left: 12.5, borderRadius: 10}}/>
        <TouchableOpacity onPress={()=>{CameraRoll.save(('file://' + photo), {album: "photos"}); setModalVisible(false)}} 
        style={{height: 50, right: 0, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2, bottom: 40, left: 3.5}}>
        <Image style={{width: 60, height: 60, right: 0, bottom: 0, tintColor: '#57d96d'}}source={require('../assets/DownloadIcon.png')}/>
        </TouchableOpacity>
        </View>
        <View>
        <View style={{height:42.5, width: 42.5, top: 12.5, backgroundColor: '#000000', zIndex:0, opacity: .45, left: 12.5, borderRadius: 10}}/>
        <TouchableOpacity onPress={()=>setModalVisible(false)} style={{height: 50, right: 0, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2, bottom: 38.5, left: 3.5}}>
        <Image style={{width: 60, height: 60, right: 0, bottom: 0, tintColor: '#bb86fc'}}source={require('../assets/crossIcon2.png')}/>
        </TouchableOpacity>
        </View>
        </View>
        <Image style={{height: '100%', width: '100%', transform: cameraPosition == 'front' ?[{rotateY: '180deg'}] : [{rotateY: '0deg'}] ,
        position: 'absolute', backgroundColor: '#000000'}} resizeMode="cover"  source={{uri: ('file://' + photo)}}/>
  </Modal>
  <Modal
        animationType="slide"
        transparent={true}
        style={{position: 'absolute', zIndex: 5, height: screenHeight, width: screenWidth}}
        visible={modalVideoVisible}>
        <View style={{zIndex: 5, position: 'absolute', flexDirection: 'row', width: screenWidth - 17.5, justifyContent: 'space-between'}}>
        <View>
        <View style={{height:42.5, width: 42.5, top: 12.5, backgroundColor: '#000000', zIndex:0, opacity: .45, left: 12.5, borderRadius: 10}}/>
        <TouchableOpacity onPress={()=>{CameraRoll.save(('file://' + disVideo), {album: "photos"}); setModalVideoVisible(false)}} 
        style={{height: 50, right: 0, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2, bottom: 40, left: 3.5}}>
        <Image style={{width: 60, height: 60, right: 0, bottom: 0, tintColor: '#57d96d'}}source={require('../assets/DownloadIcon.png')}/>
        </TouchableOpacity>
        </View>
        <View>
        <View style={{height:42.5, width: 42.5, top: 12.5, backgroundColor: '#000000', zIndex:0, opacity: .45, left: 12.5, borderRadius: 10}}/>
        <TouchableOpacity onPress={()=>setModalVideoVisible(false)} style={{height: 50, right: 0, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2, bottom: 38.5, left: 3.5}}>
        <Image style={{width: 60, height: 60, right: 0, bottom: 0, tintColor: '#bb86fc'}}source={require('../assets/crossIcon2.png')}/>
        </TouchableOpacity>
        </View>
        </View>
        <Video style={{height: '100%', width: '100%', alignSelf: 'center', transform: cameraPosition == 'front' ?[{rotateY: '180deg'}] : [{rotateY: '0deg'}] ,
        position: 'absolute'}} resizeMode="cover" repeat={true} source={{uri: ('file://' + disVideo)}}/>
  </Modal>
  </View> 
})



  if (device == null) return <View style={{flex: 1, backgroundColor: '#000000'}} />
  return <View style={{flex: 1}}>
  <StatusBar style="light" backgroundColor="#000000" hidden={false}/>
  <View style={{flex: 1}}>
  <DoubleTap>
  <Camera
  ref={camera}
  style={{height: '100%', width: '100%', zIndex: -1}}
  photo={true}
  video={true}
  audio={true}
  enableZoomGesture={true}
  hdr={true}
  device={device}
  isActive={true}/>
  </DoubleTap>

  <View style={{top: 135}}>

  <FooterFunc />


  </View>
  </View>
  </View>
  };

export default CameraScreen;
