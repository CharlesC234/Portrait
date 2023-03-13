import React, { Component, Fragment, useState, useEffect, memo, useRef } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import Swiper from 'react-native-swiper';
import ProfilePost from './Functions/ProfilePost';
import Post from './Functions/Post';
import MyPortraits from './Functions/MyPortraits';
import { StatusBar } from 'expo-status-bar';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const portraitColor = "#ffe380";
const DATA = [
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:"#FF7597",
    Anonymous:false,
    userName:"Jay Shetter",
    userImagePath: require('../assets/10.jpg'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our research area. We started by setting up the track and putting one of the masses onto the spring-powered cart.",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"1 day ago",
    postTextContent:"Hello Uzi love u",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:"#57d9a3",
    Anonymous:false,
    userName:"Charles Cahill",
    userImagePath: require('../assets/me3.jpg'),
    timeSince:"1 day ago",
    postTextContent:"Some pics of us",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/me1.jpg'),
    likes:"1",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:"#FF7597",
    Anonymous:false,
    userName:"Jay Shetter",
    userImagePath: require('../assets/10.jpg'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our research area. We started by setting up the track and putting one of the masses onto the spring-powered cart.",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Charles Cahill",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our area and added are",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#57d9a3",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"3 days ago",
    postTextContent: null,
    hasText: false,
    file: true,
    PostFilePath: require('../assets/me2.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#57d9a3",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"3 days ago",
    postTextContent: null,
    hasText: false,
    file: true,
    PostFilePath: require('../assets/Post-1.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
];





const PortraitScreen = ({navigation}) => {

  var stickyFunction;
  var opacity1 = 1;
  var opacity2 = .60;
  var opacity3 = .60;
  var opacity4 = .60;
  var barWidth = 47.5;
  const swiperRef = useRef(null);

  const StickyHead = memo(({func}) => {
    const [position, setPosition] = useState(0);
    var barLeftValue = screenWidth * .36;
    var barColor = "#57d9a3";
    useEffect(() => {
      func(setPosition);
    }, [])
    console.log(position);
    if(position == 0){
      barLeftValue = screenWidth * .275;
      opacity1 = 1; opacity2 = .50; opacity3 = .50; opacity4 = .50;
      barWidth = 47.5; barColor = "#57d9a3";
    }else if(position == 1){
      barLeftValue = screenWidth * .4525;
      opacity1 = .50; opacity2 = 1; opacity3 = .50; opacity4 = .50;
      barWidth = 47.5; barColor = "#79e2f2";
    }else if(position == 2){
      barLeftValue = screenWidth * .625;
      opacity1 = .50; opacity2 = .50; opacity3 = 1; opacity4 = .50;
      barWidth = 40; barColor = "#f686fc";
    }else{ 
      barLeftValue = screenWidth * .7825
      opacity1 = .50; opacity2 = .50; opacity3 = .50; opacity4 = 1;
      barWidth = 75; barColor= "#bb86fc";
    };
    const setScrollByFunction = (buttonNum) => {
      var scrollByNum = 0;
      console.log('b' + buttonNum);
      console.log('p' + position);
      scrollByNum = buttonNum - position;
      console.log('r' + scrollByNum);
      swiperRef.current.scrollBy(scrollByNum, true)
    }
    return <View style={{height: 55, bottom: 0, width: screenWidth, backgroundColor: '#000000'}}>
    <View style={{top: 20, backgroundColor: '#000000'}}>
    <View style={{flexDirection: 'row', left: 5 , top: 0}}>
    <Text style={{fontSize: 15, fontWeight: 'bold', color: '#ffffff', left: 2.5, bottom: 0}}>Posts</Text>
    <View style={{width: 20, height: 3, borderRadius: 10, left: 17.5, top: 10.5, backgroundColor: '#ffe380'}}/>
          <View style={{width: 7.5, height: 3, borderRadius: 10, left: 22.5, top: 10.5, backgroundColor: '#57d9a3'}}/>
    <View style={{flexDirection: 'row', left: '10%' , top: 0, justifyContent: 'space-between', width: '70%'}}>
    <TouchableOpacity onPress={() => {setScrollByFunction(0)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity1}}>Popular</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(1)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity2}}>Newest</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(2)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity3}}>Media</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(3)}}>
      <Text style={{fontSize: 15, color: '#ffffff', fontWeight: 'bold', opacity: opacity4}}>On Portraits</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{width: barWidth, height: 3, bottom: 0, borderRadius: 10, backgroundColor: barColor, 
    left: barLeftValue}}/>
    </View>
    </View>
  });

  const StickyParentFunc = (func) => {
    if(stickyFunction == null){
    stickyFunction = func;
    }
  }

  const RenderItem = ({item}) => {
    if(item == ' '){
      return <StickyHead func={StickyParentFunc}/>;
    }else{
      return <ProfilePost portraitColor= {item.portraitColor} portraitColorRGBA={item.portraitColorRGBA} portraitName={item.portraitName} portraitImagePath= {item.portraitImagePath} 
        userColor={item.userColor} Anonymous={item.Anonymous} hasText={item.hasText} userName={item.userName} userImagePath= {item.userImagePath} timeSince={item.timeSince} 
        postTextContent={item.postTextContent} file={item.file} PostFilePath={item.PostFilePath} likes={item.likes} dislikes={item.dislikes} comments={item.comments}/>
    }
  };
  
  
  const Header = ({navigation}) => {
    return(
      <View style={{width: '100%'}}>
      <View style={{height: 45}}/>
      <Swiper showsPagination={true} horizontal={true} index={0} loop={false} style={{top: 10, height: 315}} 
      paginationStyle={{top: 330}} dotStyle={{backgroundColor: '#ffffff', opacity: .50}} activeDotColor={'#ffffff'}>
        <TouchableOpacity activeOpacity={.7}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <Image style={{width: 300, height: 300, borderRadius:30, borderWidth: 7.5, borderColor: portraitColor}} source={require('../assets/uzivert.jpg')}/>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={.7}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <Image style={{width: 300, height: 300, borderRadius:30, borderWidth: 7.5, borderColor: portraitColor}} source={require('../assets/uzivert.jpg')}/>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={.7}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <Image style={{width: 300, height: 300, borderRadius:30, borderWidth: 7.5, borderColor: portraitColor}} source={require('../assets/uzivert.jpg')}/>
        </TouchableOpacity>
  
      </Swiper>
      <View style={{height: 35}}/>
      <View style={{backgroundColor: '#000000', flexDirection: 'row', alignSelf: 'center',top: 32.5}}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: '#ffffff', bottom: 10}}>Lil Uzi</Text>
      </View>
      <Text style={{width: '98.5%',  borderRadius: 15, alignSelf: 'center', textAlign: 'center', top: 27.5, fontSize: 14,color: '#ffffff', opacity: .60}}>
      We began the experiment by setting up our research area. We started by setting up the track and putting 
      one of the masses onto the spring-powered cart. 
      </Text>
      <View style={{height: 5}}/>
  
  
      <View style={{flexDirection: 'row', width: '96%', justifyContent: 'space-evenly', right: 0, top: 20, height: 40}}>
        
        <View style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 90.25, height: 90.25, right: 30, bottom: 1, tintColor: '#57d9a3'}}source={require('../assets/ThumbsUp.png')}/>
        <View style={{right: 55, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>550</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Likes</Text>
        </View>
        </View>
  
        <View style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 90.25, height: 90.25, right: 30, bottom: 1, tintColor: '#ff7597'}}source={require('../assets/ThumbsDown.png')}/>
        <View style={{right: 55, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>20</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Dislikes</Text>
        </View>
        </View>
  
        <View style={{flexDirection: 'row', width: '22%'}}>
        <Image style={{width: 55, height: 80, right: 10, top: 3, tintColor: '#bb86fc'}}source={require('../assets/ViewsIcon.png')}/>
        <View style={{right: 15, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>1.5K</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Views</Text>
        </View>
        </View>
  
        <View style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 57.5, height: 57.5, right: 10, top: 14, tintColor: '#79e2f2'}}source={require('../assets/Comment.png')}/>
        <View style={{right: 15, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>500</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Posts</Text>
        </View>
        </View>
  
        <TouchableOpacity onPress={()=>navigation.navigate('Chats')} style={{flexDirection: 'row', width: '20%'}}>
        <Image style={{width: 37.5, height:37.5, right: 0, top: 24, tintColor: '#ffe380'}}source={require('../assets/ProfileIcon3.png')}/>
        <View style={{left: 5, top: 22.5}}>
        <Text style={{ borderRadius: 15, fontSize: 18, color: '#ffffff', fontWeight: 'bold', top: 3.5}}>900</Text>
        <Text style={{borderRadius: 15, fontSize: 10, color: '#ffffff', opacity: .60, left: 1}}>Followers</Text>
        </View>
        </TouchableOpacity>
        
        </View>
  
        <View style={{height: 35}}/>
        <View style={{flexDirection: 'row', left: 2.5, width: '98.5%', justifyContent: 'space-between', top: 0}}>
        <TouchableOpacity style={{height: 24, width: '27.5%', borderWidth: 2.5, borderColor: '#57d9a3', borderRadius: 7.5, alignItems: 'center', top: 27.5}}
        onPress={() => {navigation.navigate('SelectUserToPost')}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#57d9a3', bottom: 2.5}}>Add Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 24, width: '40%', borderWidth: 2.5, borderColor: '#bb86fc', borderRadius: 7.5, alignItems: 'center', top: 27.5}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#bb86fc', bottom: 2.5}}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{height: 24, width: '27.5%', borderWidth: 2.5, borderColor: '#ffe380', borderRadius: 7.5, alignItems: 'center', top: 27.5}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#ffe380', bottom: 2.5}}>Send To</Text>
        </TouchableOpacity>
        </View>
        <View style={{height: 47.5}}/>
  
  
  
        <View style={{ flex: 1, height: 100, bottom: 0, resizeMode:'contain', right: 0, backgroundColor: '#000000', borderRadius: 0}}>
        <ScrollView horizontal={true} contentContainerStyle={{alignItems: 'center'}} style={{top: 2.5, paddingLeft: 0, height: 100, backgroundColor: '#000000', alignSelf: 'center'}}>
  
        <MyPortraits left= {0} color="#f686fc" name="Kanye East" imagePath= {require('../assets/9.jpg')}/>
        <MyPortraits left= {15} color="#57d9a3" name="Jay Shetter" imagePath={require('../assets/10.jpg')}/>
        <MyPortraits left= {30} color="#bb86fc" name="Lil Uzi" imagePath={require('../assets/uzivert.jpg')}/> 
        <View style={{width: 30}}/>
  
        </ScrollView>
        </View>
        <View style={{height: 5}}/>
        </View>
        
    )
  }
  
  
  const Footer = () => {
    return(
      <View style={{height: 25}}/>
    )
  }


    return <View style={{backgroundColor: '#000000', height: 10000, flex:1, alignContent: 'center'}}>
    <StatusBar style="light" backgroundColor="#000000"/>

    <View style={{backgroundColor: '#000000', height: 40, flexDirection: 'row', alignItems: 'center', width: '100%', zIndex: 4, top: 31}}>
    <View style={{flexDirection: 'row', width: '100%', left: 0, alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between'}}>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50, width: 50, bottom: 10, right: 12.5, borderRadius: 12, backgroundColor: 'transparent'}}>
    <Image style={{width: 65, height: 65, transform: [{rotate: '180deg'}], tintColor: '#ffffff'}}source={require('../assets/ArrowIcon2.png')}/>
    </TouchableOpacity>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', bottom: 1, right: 10}}>Uzi_Vert420</Text>
    <Image style={{width: 25, height: 25, bottom: 5, tintColor: '#ffffff'}}source={require('../assets/OptionsIcon.png')}/>
    </View>
    </View>
    

    <FlatList
        data={[' ']}
        renderItem={RenderItem}
        ListHeaderComponent={Header}
        style={{top: 15}}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        windowSize={7}
        removeClippedSubviews={false}
        updateCellsBatchingPeriod={7}
        maxToRenderPerBatch={50}
        ListFooterComponent={() => {
           return<Swiper ref={swiperRef} showsPagination={false} horizontal={true} index={0} loop={false} height='100%'
           onIndexChanged={index => {stickyFunction(index)}}>
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           />
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           />
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           />
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           />
           </Swiper> 
        }}
      />

    <View style={{backgroundColor: '#000000', flexDirection: 'row', alignItems: 'center', width: '100%', height: 50}}>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50, width: 50, bottom: 9, right: 10, borderRadius: 12, backgroundColor: 'transparent', elevation: 1}}>
    <Image style={{width: 65, height: 65}}source={require('../assets/AddPhoto.png')}/>
    </TouchableOpacity>
    <TextInput style={{height: 25, width: '75%', left: 5, backgroundColor: '#333333', bottom: 0, borderRadius: 15,
     fontSize: 14, padding: 0, paddingLeft: 20, color: '#ffffff'}} placeholder={'Post on this portrait'} placeholderTextColor={'#787878'}>
    </TextInput>
    <View style={{top: 2.5}}>
    <View style={{flexDirection: 'row'}}>
    <TouchableOpacity onPress={()=>console.log('post')} style={{height: 50, width: 50, bottom: 10, left: 0, borderRadius: 12, backgroundColor: 'transparent'}}>
    <Image style={{width: 65, height: 65, tintColor: '#ffffff'}}source={require('../assets/SendButton.png')}/>
    </TouchableOpacity>
    </View>
    </View>

    </View>
      
    </View>
  ;}
  
  
  
  export default PortraitScreen;