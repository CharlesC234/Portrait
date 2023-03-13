/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, memo, Component, createContext, useContext, useRef} from 'react';
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
  Animated,
  ScrollView,
  Easing,
  KeyboardAvoidingView,
  DatePickerIOSBase,
  Modal,
  PermissionsAndroid
} from 'react-native';
import {useNavigation, validatePathConfig} from '@react-navigation/native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import ToggleSwitch from 'toggle-switch-react-native'
import CameraRoll from '@react-native-community/cameraroll';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useIsFocused } from '@react-navigation/native';
import Video from 'react-native-video';
import { getSelectUserResults } from './SignInSignUp/Client';

const SelectUserToPostScreen = () => {
console.log('loading');
const navigation = useNavigation();
const [cameraPermission, setCameraPermission] = useState('not-determined');
const [microphonePermission, setMicrophonePermission] = useState('not-determined');
const [response, setResponse] = useState(null);

const getPermissions = async() =>{
const permissionWrite = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
const permissionRead = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
}


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
var picVar = [];
var arrFunction;
const inputRef = useRef(null);
const inputTwoRef = useRef(null);
var modalfunction;
var horizontalFunc;


const parentHorizontalFunc = (func) =>{
  if(horizontalFunc == null){
  horizontalFunc = func;
  console.log('horizontal');
  }
}

const RenderSwiper = memo(({item, largestPicHeight}) => {
  item = item.item;
  const [isVideo, setIsVideo] = useState(false);
  const [vidDuration, setVidDuration] = useState(0.0);
  if(item.split('.').pop() == "mp4" && isVideo == false){
    setIsVideo(true);
  }
  const vidLoaded = (data) => {
    console.log(data.duration);
    setVidDuration(data.duration);
  }
  if(isVideo == false){
  return<View style={{width: screenWidth}}>
   <Image style={{width: '97.5%', left: 0, height: largestPicHeight, borderRadius: 7.5, top: 10, 
  alignSelf: 'center', resizeMode: 'cover', maxheight: 500, zIndex: 5}} 
   source={{uri: item}}/>
   </View>
  }else{
    return<View style={{width: screenWidth}}>
   <Video style={{width: '97.5%', left: 0, height: largestPicHeight, borderRadius: 7.5, top: 10, 
  alignSelf: 'center', maxheight: 500, zIndex: 5}} onLoad={vidLoaded}
   source={{uri: item}} resizeMode="cover" repeat={true}/>
   </View>
  }
});


const HandleArr = (str) => {
  if(picVar.includes(str)){
    var index = picVar.indexOf(str);
    picVar.splice(index, 1);
    picVar=[...picVar];
    arrFunction(picVar);
  }else{
  if(picVar.length < 3){
  picVar = [...picVar, str];
  arrFunction(picVar);
  }
  }
};


const RenderItem = memo(({item, selectedArr}) => {
  const [selected, setSelected] = useState(.4);
  const [isVideo, setIsVideo] = useState(false);
  const [vidDuration, setVidDuration] = useState(0.0);
  const uri = item.node.image.uri;
  if(uri.split('.').pop() == "mp4" && isVideo == false){
    setIsVideo(true);
  }
  const vidLoaded = (data) => {
    console.log(data.duration);
    setVidDuration(data.duration);
  }
  var opacityV;
  var opacityView;
  if(selectedArr.includes(uri) && selected == .4){
    setSelected(1);
  }else if(selected == 1 && !picVar.includes(uri)){
    setSelected(.4);
  }
  const viewPressed = () => {
      HandleArr(uri);
  }
  opacityV = selected
  if(opacityV == .4){
    opacityView = 0;
  }else{ opacityView = .4};
  if(isVideo == false){
  return <View style={{flexDirection: 'row'}}>
  <TouchableOpacity style={{backgroundColor: '#000000', width: 100, height: 100, right: 1, bottom: 0}}
  onPress={()=>{setSelected(picVar.length < 3 ? (selected == 1 ? .4 : 1) : .4 ); viewPressed();}}>
  <View style={{backgroundColor: 'transparent', borderColor: '#ffffff', 
   borderWidth: 1.25, width: 17.5, height: 17.5, borderRadius: 50, top: 6, left: '76.5%', zIndex: 5}}/>
  <View style={{backgroundColor: '#ffffff', opacity: opacityV, width: 16, height: 16, borderRadius: 50, bottom: 10.6, left: '77%', zIndex: 5}}/>
  <View style={{position: 'absolute', width: 96, height: 96, top: 2, left: 2, backgroundColor: '#ffffff', zIndex: 5, borderRadius: 12.5, opacity: opacityView}}/>
  <Image style={{height: 100, borderWidth: 2, borderColor: '#000000', bottom: 33, borderRadius: 15}}
   source={{uri: uri}}/>
   </TouchableOpacity>
   <View style={{width: 1}}/>
   </View> 
  }else{
    return <View style={{flexDirection: 'row'}}>
  <TouchableOpacity style={{backgroundColor: '#000000', width: 100, height: 100, right: 1, bottom: 0}}
  onPress={()=>{setSelected(picVar.length < 3 ? (selected == 1 ? .4 : 1) : .4 ); viewPressed();}}>
  <View style={{backgroundColor: 'transparent', borderColor: '#ffffff', 
   borderWidth: 1.25, width: 17.5, height: 17.5, borderRadius: 50, top: 6, left: '76.5%', zIndex: 5}}/>
  <View style={{backgroundColor: '#ffffff', opacity: opacityV, width: 16, height: 16, borderRadius: 50, bottom: 10.6, left: '77%', zIndex: 5}}/>
  <View style={{position: 'absolute', width: 96, height: 96, top: 2, left: 2, backgroundColor: '#ffffff', zIndex: 5, borderRadius: 12.5, opacity: opacityView}}/>
  <Text style={{color: '#ffffff', fontSize: 12, position: 'absolute', 
  left: 61, top: 81, zIndex: 5, width: 37.5, textAlign: 'center', 
  backgroundColor: 'rgba(0,0,0, .55)', borderBottomRightRadius: 7.5, borderTopLeftRadius: 7.5}}>
  {new Date(vidDuration * 1000).toISOString().substr(15, 4)}</Text>
  <Video style={{height: 100, borderWidth: 2, borderColor: '#000000', bottom: 33, borderRadius: 15}}
   source={{uri: uri}} paused={true} onLoad={vidLoaded} resizeMode="cover"/>
   </TouchableOpacity>
   <View style={{width: 1}}/>
   </View> 
  }
  });





  const RenderItemFull = memo(({item}) => {
    const [selected, setSelected] = useState(.4);
    const uri = item.node.image.uri;
    const [isVideo, setIsVideo] = useState(false);
    const [vidDuration, setVidDuration] = useState(0.0);
    const [selectedArr, setSelectedArr] = useState([]);
    var opacityV;
    var opacityView;
    if(uri.split('.').pop() == "mp4" && isVideo == false){
      setIsVideo(true);
    }
    const vidLoaded = (data) => {
      console.log(data.duration);
      setVidDuration(data.duration);
    }
    useEffect(() => {
      setSelectedArr(picVar);
    }, [])
    if(selectedArr.includes(uri) && selected == .4){
      setSelected(1);
    }else if(selected == 1 && !picVar.includes(uri)){
      setSelected(.4);
    }
    const viewPressed = () => {
        HandleArr(uri);
        setSelectedArr(picVar);
    }
    opacityV = selected
    if(opacityV == .4){
      opacityView = 0;
    }else{ opacityView = .4};
    if(isVideo == false){
    return <View style={{flexDirection: 'row'}}>
    <TouchableOpacity style={{backgroundColor: '#000000', width: screenWidth*.33, height: 200, right: 1, bottom: 0}}
    onPress={()=>{setSelected(picVar.length < 3 ? (selected == 1 ? .4 : 1) : .4 ); viewPressed();}}>
    <View style={{backgroundColor: 'transparent', borderColor: '#ffffff', 
     borderWidth: 1.25, width: 17.5, height: 17.5, borderRadius: 50, top: 10, left: '79.5%', zIndex: 5}}/>
    <View style={{backgroundColor: '#ffffff', opacity: opacityV, width: 16, height: 16, borderRadius: 50, bottom: 6.6, left: '80%', zIndex: 5}}/>
    <View style={{position: 'absolute', width: ((screenWidth*.33) - 4), height: 196, left: 2, top: 2, backgroundColor: '#ffffff', zIndex: 5, borderRadius: 12.5, opacity: opacityView}}/>
    <Image style={{height: 200, borderWidth: 2, borderColor: '#000000', bottom: 33, borderRadius: 15}}
     source={{uri: uri}}/>
     </TouchableOpacity>
     <View style={{width: 1}}/>
     </View> 
    }else{
      return <View style={{flexDirection: 'row', backgroundColor: '#000000'}}>
    <TouchableOpacity style={{backgroundColor: '#000000', width: screenWidth*.33, height: 200, right: 1, bottom: 0}}
    onPress={()=>{setSelected(picVar.length < 3 ? (selected == 1 ? .4 : 1) : .4 ); viewPressed();}}>
    <View style={{backgroundColor: 'transparent', borderColor: '#ffffff', 
     borderWidth: 1.25, width: 17.5, height: 17.5, borderRadius: 50, top: 10, left: '79.5%', zIndex: 5}}/>
    <View style={{backgroundColor: '#ffffff', opacity: opacityV, width: 16, height: 16, borderRadius: 50, bottom: 6.6, left: '80%', zIndex: 5}}/>
    <View style={{position: 'absolute', width: ((screenWidth*.33) - 4), height: 196, left: 2, top: 2, backgroundColor: '#ffffff', zIndex: 5, borderRadius: 12.5, opacity: opacityView}}/>
    <Text style={{color: '#ffffff', fontSize: 12, position: 'absolute', 
    left: 100, top: 181, zIndex: 5, width: 37.5, textAlign: 'center', 
    backgroundColor: 'rgba(0,0,0, .55)', borderBottomRightRadius: 7.5, borderTopLeftRadius: 7.5}}>
    {new Date(vidDuration * 1000).toISOString().substr(15, 4)}</Text>
    <Video style={{height: 200, borderWidth: 2, borderColor: '#000000', bottom: 33, borderRadius: 15}}
     source={{uri: uri}} paused={true} onLoad={vidLoaded} resizeMode="cover"/>
     </TouchableOpacity>
     <View style={{width: 1}}/>
     </View> 
    }
    });




const SwiperFunc = memo(({parentFunc}) => {
  const [arr, setArr] = useState([]);
  const thisRef = useRef(null);
  const [largestPicHeight, setLargestPicHeight] = useState(0);
  const [arrLengthPrev, setArrLengthPrev] = useState(0);
  if(arr.length < 1){
    parentFunc(setArr);
    } 
  useEffect(() =>{
    if(thisRef != null){
      if(arr.length != arrLengthPrev){
      if(arr.length >= 1){
        var valueArr = []; 
        console.log('called');
        thisRef.current.scrollToIndex({index: arr.length - 1});
        
        for(let i = 0; i <= (arr.length - 1); i++){
        var height;
        var width;
        var picWidth = 0;
        var picHeight = 0;

        Image.getSize(arr[i], (width, height) => {setWidth(width); setHeight(height);});
        const setWidth = (newWidth) =>{
        width = newWidth;}
        const setHeight = (newHeight) => {
        height = newHeight;
        picWidth = (screenWidth * 1);
        picHeight = ((height * picWidth) / (width));
        if(picHeight > 500){picHeight = 500};
        valueArr = [...valueArr, picHeight];
        if(arr.length == valueArr.length){
          setLargestPicHeight(Math.max.apply(null, valueArr));
        }
        }
      }
    }

    };
    setArrLengthPrev(arr.length);
  }
  })

  return <SwiperFlatList 
  ref={thisRef}
  style={{width: '100%', zIndex: 11, elevation: 11, height: largestPicHeight + 60, alignSelf: 'center', bottom: 40, backgroundColor: 'transparent'}}  
  data={arr}
  showPagination={true}
  paginationStyleItem={{height:7.5, width: 7.5}}
  paginationStyle={{bottom: 200}}
  index={0}
  renderItem={(item) => <RenderSwiper item={item} largestPicHeight={largestPicHeight}/>}
/>
})


const parentFunc = (setArr) =>{
  if(arrFunction == null){
  arrFunction = setArr;
  console.log('ok');
  }
}


const TextInputFunc = memo(() => {
  const [Input, setInput] = useState('');

  return <View>
  <Text style={{bottom: 41, textAlignVertical: 'top', flex: 1, 
  zIndex: 5, width: screenWidth* .99, left: 5}}>
    <View style={{width: 47, height: 50}}/>
    <TextInput
    ref={inputRef}
    placeholderTextColor={'#696969'}
    style={{width: screenWidth, overflow:'hidden', fontSize: 14, left: 55,
    textAlignVertical: 'top', zIndex: 0, backgroundColor: 'transparent'}}
    placeholder= {'Say Something...'}
    multiline={true}
    caretHidden={false}
    onChangeText={newInput => setInput(newInput)}
    autoFocus={true}
    selectionColor='#ffffff'
    color='#ffffff'
    ><Text style={{fontSize: 14, color: '#ffffff',
    width: screenWidth, textAlignVertical: 'top'}}>{Input}</Text></TextInput>
  </Text>
</View> 
})




const FlastlistFunc = memo(({type, func}) => {
    const [scrollFlag, setScrollFlag] = useState(true);
    const [photosv, setPhotosv] = useState({data: null});
    const [lastCurser, setLastCurser] = useState(null);
    const [selectedArr, setSelectedArr] = useState([]);
    const focused = useIsFocused();
    useEffect(() => {
      focused && console.log('focused');
      setPhotosv({data: null});
      setScrollFlag(true);
      setLastCurser(null);
      retPhotos();
      setSelectedArr(picVar);
    }, [focused])

    if(horizontalFunc == null){
      parentHorizontalFunc(setSelectedArr);
    }
    const retPhotos = () => {
      console.log('called');
      if(scrollFlag == true){
        console.log(true);
      CameraRoll.getPhotos({
        after: lastCurser,
        first: 75,
        assetType: 'All',
      })
        .then(res => {
          if(photosv.data != null){
          setPhotosv({data: [...photosv.data, ...res.edges]});
          }else{
            setPhotosv({data: res.edges});
          }
          setLastCurser(res.page_info.end_cursor);
        })
        .catch(error => {
          console.log(error);
        });
        setScrollFlag(false);
      }else{return null};
      }

      if(photosv.data == null){
        retPhotos();
        console.log(photosv.data)
      }
    if(type == 1){
    return <FlatList
    keyboardShouldPersistTaps={'always'}
    showsHorizontalScrollIndicator={false}
    scrollToOverflowEnabled={true}
    style={{top: 0, backgroundColor: '#000000', height: 100, borderRadius: 15, zIndex: 5}}  
    onScroll={() => setScrollFlag(true)}
    data={photosv.data}
    horizontal={true}
    initialNumToRender={50}
    onEndReachedThreshold={0.3}
    onEndReached={({ distanceFromEnd }) => {if(distanceFromEnd > 0) retPhotos()}}
    renderItem={(item) => <RenderItem item={item.item} selectedArr={selectedArr}/>}
    />
    }else if(type == 2){
    return <FlatList
    showsVerticalScrollIndicator={false}
    numColumns={3}
    style={{backgroundColor: '#000000'}}
    onScroll={() => setScrollFlag(true)}
    data={photosv.data}
    initialNumToRender={50}
    onEndReachedThreshold={0.3}
    onEndReached={({ distanceFromEnd }) => {if(distanceFromEnd > 0) retPhotos()}}
    renderItem={(item) => <RenderItemFull item={item.item}/>}
    />
    }
})



const ModalFunc = memo(({func}) =>{
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    func(setModalVisible);
  }, [])
  return <Modal
  animationType="slide"
  transparent={false}
  style={{flex:1, backgroundColor: '#000000'}}
  visible={modalVisible}>
  <View style={{flexDirection: 'row', height: 35, backgroundColor:'#000000'}}>
  <TouchableOpacity onPress={() => {setModalVisible(false); horizontalFunc(picVar)}} style={{height: 60, backgroundColor: 'transparent', right: 25}}>
     <Image style={{width: 85, height: 85, tintColor: '#79e2f2', bottom: 24}}source={require('../assets/DropDownIcon.png')}/>
 </TouchableOpacity>
     <Text style={{fontSize: 15, color: '#ffffff', top: 7.5, right: 40, fontWeight: 'bold'}}>Select up to three photos or videos</Text>
  </View>
  <FlastlistFunc type={2}/>
  </Modal>
})

const modalParentFunc = (func) => {
  if(modalfunction == null){
  modalfunction = func;
  }
}


const SearchBar = memo(() => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  return <View style={{flexDirection: 'row', top: 25, justifyContent: 'space-between'}}>
  <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2}}>
      <Image style={{width: 65, height: 50, right: 10, bottom: 0, transform: [{rotate: '180deg'}], tintColor: '#bb86fc'}}source={require('../assets/ArrowIcon2.png')}/>
  </TouchableOpacity>

  <View style={{top: 8, height: 50, left: 2.5, backgroundColor: 'transparent', width: screenWidth * .75}}>
  <TouchableOpacity onPress={() => {setModalVisible(true)}} style={{zIndex: 7, height: 32.5, position: 'absolute', width: '100%'}}/>
  <TextInput style={{height: 27.5, padding: 0, width: '100%', left: 0, backgroundColor: '#333333', top: 2.5, borderRadius: 15,
   fontSize: 16, paddingLeft: 40,}} placeholder={'Select a portrait to post on'} placeholderTextColor={'#787878'}>
  </TextInput>
  <Image style={{width: 42.5, height: 42.5, right: 2, bottom: 33}}source={require('../assets/ExploreIcon.png')}/>
  </View>

  <TouchableOpacity onPress={()=>console.log("post")} style={{height: 50, backgroundColor: 'transparent', borderRadius: 12, zIndex: 2, flexDirection: 'row'}}>
      <Image style={{width: 70, height: 50, right: 2, bottom: 1, tintColor: '#79e2f2'}}source={require('../assets/SendButton.png')}/>
  </TouchableOpacity>

  <Modal
  animationType="fade"
  transparent={true}
  style={{flex: 1, backgroundColor: '#000000', color: '#000000'}}
  visible={modalVisible}>
  <View style={{flex: 1, backgroundColor: '#000000'}}>
  <View style={{flexDirection: 'row', bottom: 1, backgroundColor: '#000000'}}>
  <TouchableOpacity onPress={()=>setModalVisible(false)} style={{height: 50, backgroundColor: 'transparent', width: 50, borderRadius: 12, zIndex: 2}}>
      <Image style={{width: 65, height: 50, right: 10, bottom: 0, transform: [{rotate: '180deg'}], tintColor: '#bb86fc'}}source={require('../assets/ArrowIcon2.png')}/>
  </TouchableOpacity>

  <View style={{top: 8, height: 32.5, left: 2.5, backgroundColor: 'transparent', width: screenWidth * .85}}>
  <TextInput style={{height: 27.5, padding: 0, width: '100%', left: 0, backgroundColor: '#333333', top: 2.5, borderRadius: 15,
   fontSize: 16, paddingLeft: 40,}} 
   autoFocus={true} 
   onChangeText={newsearchInput => setSearchInput(newsearchInput)}
   placeholder={'Select a portrait to post on'} 
   value={searchInput}
   placeholderTextColor={'#787878'}>
  </TextInput>
  <Image style={{width: 42.5, height: 42.5, right: 2, bottom: 33}}source={require('../assets/ExploreIcon.png')}/>
  </View>
  </View>
  <ScrollView style={{flex: 1}}>
  <SearchBarResults searchInput={searchInput}/>
  </ScrollView>
  </View>

  </Modal>
  </View> 
})


const SearchBarResults = memo((searchInput) =>{
  const getData = async() =>{
       var data;
       await getSelectUserResults(searchInput)
      .then((response) => response)
      .then((response) => {
        data = response;
        console.log("Portraits: " + data);
      })
      return data;
  }
  const RenderResults = memo((item) =>{
    return <TouchableOpacity style={{width: '91%', height: 75, borderRadius: 0, top: 5, flexDirection: 'row', left: 10}}>
    <Image style={{width: 60, height: 60, borderRadius: 12.5, top: 7.5, left: 0, borderWidth: 3.5, borderColor: item.ColorP}} source={require('../assets/uzivert.jpg')}/>
    <View style={{width: '60%'}}>
    <View style={{flexDirection: 'row'}}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: item.ColorP, left: 15, top: 15}}>{item.FullNameP}</Text>
    </View>
    <Text style={{fontSize: 14, color: '#ffffff', left: 16, top: 15, opacity: .60, width: '100%'}}>{item.UserNameP}</Text>
    </View>
    </TouchableOpacity>
  })
  return <View>
  <FlatList
  showsVerticalScrollIndicator={false}
  style={{backgroundColor: '#000000'}}
  data={getData()}
  initialNumToRender={20}
  renderItem={(item) => <RenderResults item={item.item}/>}
  />
  </View>
}) 



const ToggleSwitchFunction = memo(() => {
  const [Anonymous, setAnonymous] = useState(false);
  const [showFriends, setShowFriends] = useState(true);
  const toggleSwitchAnonymous = () => setAnonymous(previousState => !previousState);
  const toggleSwitchShowFriends = () => setShowFriends(previousState => !previousState);
  if(Anonymous && showFriends){
    setShowFriends(false);
  };
  return <View style={{flexDirection: 'row', right: 5, justifyContent: 'space-between', width: '100%', zIndex: 5, top: 5}}>
  <View style={{flexDirection: 'row'}}>
      <ToggleSwitch
      isOn={Anonymous}
      thumbOnStyle={{backgroundColor: '#000000'}}
      thumbOffStyle={{backgroundColor: '#000000'}}
      onColor="#57d96d"
      offColor="#ff7597"
      label="Anonymous post"
      labelStyle={{ color: "white", bottom: 1.5, opacity: .60}}
      size='small'
      onToggle={toggleSwitchAnonymous}
      />
      </View>
      <View style={{flexDirection: 'row'}}>
      <ToggleSwitch
      isOn={showFriends}
      thumbOnStyle={{backgroundColor: '#000000'}}
      thumbOffStyle={{backgroundColor: '#000000'}}
      onColor="#57d96d"
      offColor="#ff7597"
      label="Show my followers"
      labelStyle={{ color: "white", bottom: 1.5, opacity: .60}}
      size='small'
      onToggle={toggleSwitchShowFriends}
      />
      </View>
  </View>
});

useEffect(() => {
  const permissionsHandler = async() =>{
   await getPermissions();
  }
  permissionsHandler();
}, [])


const styles = StyleSheet.create({
  AnonymousImage: {
    width: 22.5,
    height: 22.5, 
    borderRadius:5.5,
    top: .75,  
    borderWidth: 1.75, 
    borderColor: '#1de9b6',
    tintColor: '#1de9b6',
  },
  NormalImage: {
      width: 22.5,
      height: 22.5, 
      borderRadius:5.5, 
      borderWidth: 1.75, 
      top: .75, 
      borderColor: '#1de9b6'
  },
  WithFile:{
    width: '103%', 
    height: 50,
    borderRadius: 0, 
    top: 10, 
    right: 7.5,
    resizeMode: 'cover',
    maxheight: 500,
  },
  WithFileNoText:{
    width: '103%', 
    height: 50,
    borderRadius: 0, 
    top: 10, 
    right: 7.5,
    resizeMode: 'cover',
    maxheight: 500,
  },
  WithoutFile:{
    width: 0, 
    height: 0,
  },
  WithText:{
    width: '95%', 
    left: 3, 
    top: 3.5,
    fontSize: 14.5,
    opacity: .95,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  WithoutText:{
    height: 0,
    width: 0,
  },
  Margin:{ 
    height: 12,
  },
  MarginNoText:{ 
    height: 10,
  },
  WithoutMargin:{
    height: 0,
  }
})

  return<View style={{flex: 1, backgroundColor: '#000000'}}>
  <View style={{flex:1, backgroundColor: '#000000'}}>
  <View style={{height: 5}}/>

  <ModalFunc func={modalParentFunc}/>

  <SearchBar />

  <View style={{height: '76%', width: '100%'}}>

  <ScrollView style={{width: '100%', alignSelf: 'center', top: 20, height: '100%'}}>
  <View style = {{ flexDirection : 'row', top: 10, left: 5, backgroundColor: '#000000'}}>

      <TouchableOpacity style={{
      left: 6.5, flexDirection: 'row', backgroundColor: '#000000', width: '45%', zIndex: 5}}>
      
      <View style={{flexDirection: 'row', backgroundColor: 'transparent'}}>
      <Image style={styles.NormalImage} source={require('../assets/uzivert.jpg')}/>
      <View style={{bottom: 3, right: 1.5}}>
      <Text style={{color: '#1de9b6', fontSize: 14, left: 10,fontWeight: 'bold', overflow: 'hidden', height: 22.5, top: 4}}>Charles Cahill</Text>
      </View>
      </View>
      </TouchableOpacity>
      <View style={{width: 5}}/>

      <View style={{width: 17.5, height: 3, borderRadius: 10, left: 9, top: 10, backgroundColor: '#1de9b6'}}/>
      <View style={{width: 7.5, height: 3, borderRadius: 10, left: 13, top: 10, backgroundColor: '#bb86fc'}}/>
      <View style={{width: 0}}/>

      <TouchableOpacity onPress={()=>navigation.navigate('Portrait')} style={{
       flexDirection: 'row', backgroundColor:'#000000', left: 30, width: '45%', bottom: 1.5}}>
      <View style={{flexDirection: 'row', width: '100%', top: 1}}>
      <Image style={{width: 22.5, height: 22.5, borderRadius:5.5, bottom: 0, borderWidth: 1.75, borderColor: '#bb86fc'}} source={require('../assets/me3.jpg')}/>
      <View style={{ width: '72%', bottom: 0, backgroundColor: 'transparent', right: 1.5}}>
      <Text style={{color: '#bb86fc', top: 1, fontSize: 14, left: 9,fontWeight: 'bold', width: '100%', overflow: 'hidden', height: 20}}>lil uzi</Text>
      </View>
      <View style={{width: 10}}/>
      </View>
      </TouchableOpacity>
      
      </View>
      <View style={{width: '100%', right: 2, bottom: 12.5}}>
      <View style={{width: '99%', left: 5, flexDirection: 'row'}}>
      <View style={{width: '100%'}}>
      
      </View>
      </View>
      </View>

  <TouchableOpacity onPress={()=>inputRef.current.focus()} style={{backgroundColor: 'transparent', height: '150%', width: '100%', zIndex: 10, elevation: 10, position: 'absolute'}}/>
  <TextInputFunc/>
  <SwiperFunc parentFunc={parentFunc}/>
  <View style={{height: 150}}/>
  </ScrollView>
  </View>

  <KeyboardAvoidingView  enabled={true} behavior={'position'} keyboardVerticalOffset={-187.5} contentContainerStyle={{backgroundColor: '#000000'}} style={{bottom: 20}}>
  <View style={{height: 5}}/>

  <ToggleSwitchFunction/>

  <View style={{height: 15, zIndex: 5, width: screenWidth, backgroundColor: 'transparent'}}/>
  <View style={{height: 100, flexDirection: 'row', width: screenWidth}}>
  <View style={{width: 100, height: 100, borderRadius: 15}}>
  <TouchableOpacity style={{backgroundColor: '#000000', width: 100, height: 45, right: 1, top: 0, borderWidth: 2, borderRadius: 15}}
   onPress={()=>{navigation.navigate("Camera")}}>
  <Image style={{height: 45, bottom: 0, borderWidth: 2, borderColor: '#ffe380', tintColor: '#ffe380', borderRadius: 15}}
     source={{uri: Image.resolveAssetSource(require('../assets/CameraIcon.png')).uri}}/>
  </TouchableOpacity>

  <TouchableOpacity style={{backgroundColor: '#000000', width: 100, height: 45, right: 1, top: 7.5, borderWidth: 2, borderRadius: 15}}
  onPress={()=>{modalfunction(true)}}>
  <Image style={{height: 45, bottom: 0, borderWidth: 2, borderColor: '#f686fc', tintColor: '#f686fc', borderRadius: 15}}
     source={{uri: Image.resolveAssetSource(require('../assets/GalleryIcon.png')).uri}}/>
  </TouchableOpacity>
  </View>
    <FlastlistFunc type={1}/>
    </View>
        </KeyboardAvoidingView>
        </View>
    </View>
    };

export default SelectUserToPostScreen;
