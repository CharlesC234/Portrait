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
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import Swiper from 'react-native-swiper';
import Post from './Functions/Post';
import NavBar from './Functions/NavBar';
import { useNavigation } from '@react-navigation/native';
import { getProfile } from './SignInSignUp/Client';
import GalleryView from './Functions/GalleryView';


const portraitColor = "#79e2f2";
const name = "Charles Cahill";
const username = "Uzi_Vert420";
const bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation u";
const likes = 20;
const dislikes = 0;
const views = 100;
const posts = 6;
const followers = 50; 
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;


const DATA = [
  {
    portraitColor: portraitColor,
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor: portraitColor,
    Anonymous:false,
    userName:"Lil Uzi",
    userImagePath: require('../assets/uzivert.jpg'),
    timeSince:"1 day ago",
    hasText: false,
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
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our area and added are",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/uzivert.jpg'),
    likes:"20",
    dislikes:"2",
    comments:"5",
  },

];

const getData = async() =>{
  var mydata;
     await getProfile()
    .then((response) => response)
    .then((response) => {
      mydata = response;
      console.log("profile function data test: " + mydata._id);
    })
    return mydata;
}




const ProfileScreen = ({navigation}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);


  var stickyFunction;
  const swiperRef = useRef(null);

  const StickyHead = memo(({func}) => {
    const [position, setPosition] = useState(0);
    var barLeftValue = screenWidth * .36;
    var barWidth;
    useEffect(() => {
      func(setPosition);
    }, [])
    console.log(position);
    if(position == 0){
      barWidth = 105;
      barLeftValue = screenWidth * .02;
    }else if(position == 1){
      barWidth = 125;
      barLeftValue = screenWidth * .29;
    }else{
      barWidth = 132.5;
      barLeftValue = screenWidth * .6175;
    };
    const setScrollByFunction = (buttonNum) => {
      var scrollByNum = 0;
      console.log('b' + buttonNum);
      console.log('p' + position);
      scrollByNum = buttonNum - position;
      console.log('r' + scrollByNum);
      swiperRef.current.scrollBy(scrollByNum, true)
    }
    return <View style={{height: (screenHeight*.11), bottom: 0, width: screenWidth, backgroundColor: '#000000', borderRadius: 15}}>
    <View style={{top: 12.5, backgroundColor: '#79e2f2', borderRadius: 10, width: '97.5%', height: screenHeight*.08, alignSelf: 'center'}}>
    <View style={{top: 14}}>
    <View style={{flexDirection: 'row',top: 0, justifyContent: 'space-between', width: '85%', zIndex: 1, alignSelf: 'center'}}>
    <TouchableOpacity onPress={() => {setScrollByFunction(0)}}>
      <Text style={{fontSize: 19, color: '#000000', fontWeight: '900'}}>Recent</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(1)}} style={{left: 7.5}}>
      <Text style={{fontSize: 19, color: '#000000', fontWeight: '900'}}>Most Liked</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {setScrollByFunction(2)}} style={{left: 5}}>
      <Text style={{fontSize: 19, color: '#000000', fontWeight: '900'}}>On Portraits</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={{top: 1.5}}>
    <View style={{width: barWidth, height: screenHeight*.06, bottom: (screenHeight*.028) - 3, borderRadius: 7.5, backgroundColor: '#000000', borderWidth: 5, borderColor: '#000000', 
    left: barLeftValue + 3, zIndex: -1, position: 'absolute'}}/>
    <View style={{width: barWidth, height: screenHeight*.06, bottom: screenHeight*.028, borderRadius: 7.5, backgroundColor: '#00ffa9', borderWidth: 4.5, borderColor: '#000000', 
    left: barLeftValue, zIndex: 0}}/>
    </View>
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
      return <View style={{bottom: 5}}>
      <StickyHead func={StickyParentFunc}/>
      </View>
    }else{
      return <View style={{height: screenHeight, zIndex: 2, alignSelf: 'center'}}>
         <View style={{height: Dimensions.get('window').height - 30, width: Dimensions.get('window').width *.98, backgroundColor: '#000000', left: 3.5, zIndex: 2, alignSelf: 'center'}}>
      <GalleryView width={Dimensions.get('window').width*.985} height={Dimensions.get('window').height} axis={2}/>
      </View>
      </View>
    }
  };


  const Header = (data) => {
    const navigation = useNavigation();;
    return(
        <View>
        <View style={{height:2.5}}/>
        <View style={{backgroundColor: data.ColorP, borderRadius: 12, height: screenHeight * .765, top: 10, width: screenWidth*.95, left: screenWidth*.02}}>


        <View style={{flexDirection: 'row', width: '93.5%', alignSelf: 'center', alignItems: 'center', justifyContent: 'space-between'}}>

        <View style={{width: '10.5%', right: 1}}>
        <View style={{width: '100%', height: screenHeight*.05, borderWidth: 5, borderRadius: 7.5, borderColor: '#000000', backgroundColor: '#000000', left: 2.25, top: 9.5}}/>
        <View style={{width: '100%', height: screenHeight*.05, borderWidth: 4, borderRadius: 7.5, borderColor: '#000000', backgroundColor: '#00ffa9', position: 'absolute', top:8}}/>
        </View>

        <Text style={{fontSize: 24, fontWeight: 'bold', color: '#000000', alignSelf: 'center', top: 8, width: '60%', textAlign: 'center'}}>{data.UserNameP}</Text>

        <View style={{width: '10.5%', right: 1}}>
        <View style={{width: '100%', height: screenHeight*.05, borderWidth: 5, borderRadius: 7.5, borderColor: '#000000', backgroundColor: '#000000', left: 2.25, top: 9.5}}/>
        <View style={{width: '100%', height: screenHeight*.05, borderWidth: 4, borderRadius: 7.5, borderColor: '#000000', backgroundColor: '#00ffa9', position: 'absolute', top:8}}/>
        </View>
        
        </View>


        <View style={{height: 17}}/>
  
      <Swiper showsPagination={true} horizontal={true} index={0} loop={false} style={{height: screenWidth * .7}} 
      paginationStyle={{top: screenWidth*.59}} dotStyle={{backgroundColor: '#000000', opacity: .60, height: 10, width: 10}} activeDotColor={'#000000'} activeDotStyle={{height: 10, width: 10}}>
        <TouchableOpacity activeOpacity={.9}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <View style={{width: screenWidth*.585, height: screenWidth*.585, borderRadius:15, borderColor: '#000000', backgroundColor: '#000000', left: 4.5, top: 4.5}}/>
        <Image style={{width: screenWidth*.585, height: screenWidth*.585, borderRadius:15, borderWidth: 5.5, borderColor: '#000000', position: 'absolute'}} source={require('../assets/me3.jpg')}/>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={.9}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <View style={{width: screenWidth*.585, height: screenWidth*.585, borderRadius:15, borderColor: '#000000', backgroundColor: '#000000', left: 4.5, top: 4.5}}/>
        <View style={{width: screenWidth*.585, height: screenWidth*.585, borderRadius:15, borderWidth: 5.5, borderColor: '#000000', position: 'absolute', backgroundColor:'#00ffa9'}}/>
        </TouchableOpacity>
  
        <TouchableOpacity activeOpacity={.9}  style={{backgroundColor: 'rgba(255, 255, 255, 0)', alignSelf: 'center'}} onPress={()=>navigation.navigate('MediaPage')}>
        <View style={{width: screenWidth*.585, height: screenWidth*.585, borderRadius:15, borderColor: '#000000', backgroundColor: '#000000', left: 4.5, top: 4.5}}/>
        <Image style={{width: screenWidth*.585, height: screenWidth*.585, borderRadius:15, borderWidth: 5.5, borderColor: '#000000', position: 'absolute'}} source={require('../assets/uzivert.jpg')}/>
        </TouchableOpacity>
  
      </Swiper>

      <Text style={{fontSize: 30, fontWeight: '900', color: '#000000', bottom: screenHeight*.050, alignSelf: 'center'}}>{data.FullNameP}</Text>

      <Text style={{width: '85%', bottom: screenHeight*.05, fontSize: 15, height: 55, color: '#000000', alignSelf: 'center', textAlign: 'center', fontWeight: 'bold'}}>
      {bio}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '96%', alignSelf:'center', bottom: screenHeight*.0315}}>
      <View style={{width: '30%', right: 1}}>
      <View style={{width: '100%', height: screenHeight*.0825, borderWidth: 5, borderRadius: 8.5, borderColor: '#000000', backgroundColor: '#000000', left: 2.65, top: 3}}/>
      <View style={{width: '100%', height: screenHeight*.0825, borderWidth: 4.25, borderRadius: 8.5, borderColor: '#000000', backgroundColor: '#ff0039', position: 'absolute'}}>
      <Text style={{fontSize: 26, fontWeight: '900', color: '#000000', alignSelf: 'center', textAlign: 'center', bottom: 2}}>{data.FollowersP}</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000', alignSelf: 'center', textAlign: 'center', bottom: 8}}>Followers</Text>
      </View>
      </View>

      <View style={{width: '30%', right: 1}}>
      <View style={{width: '100%', height: screenHeight*.0825, borderWidth: 5, borderRadius: 8.5, borderColor: '#000000', backgroundColor: '#000000', left: 2.75, top: 3}}/>
      <View style={{width: '100%', height: screenHeight*.0825, borderWidth: 4.25, borderRadius: 8.5, borderColor: '#000000', backgroundColor: '#ffef00', position: 'absolute'}}>
      <Text style={{fontSize: 26, fontWeight: '900', color: '#000000', alignSelf: 'center', textAlign: 'center', bottom: 2}}>{data.PostsP}</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000', alignSelf: 'center', textAlign: 'center', bottom: 8}}>Posts</Text>
      </View>
      </View>

      <View style={{width: '30%', right: 1}}>
      <View style={{width: '100%', height: screenHeight*.0825, borderWidth: 5, borderRadius: 8.5, borderColor: '#000000', backgroundColor: '#000000', left: 2.75, top: 3}}/>
      <View style={{width: '100%', height: screenHeight*.0825, borderWidth: 4.25, borderRadius: 8.5, borderColor: '#000000', backgroundColor: '#a600ff', position: 'absolute'}}>
      <Text style={{fontSize: 26, fontWeight: '900', color: '#000000', alignSelf: 'center', textAlign: 'center', bottom: 2}}>{data.ViewsP}</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000000', alignSelf: 'center', textAlign: 'center', bottom: 8}}>Views</Text>
      </View>
      </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: '96%', alignSelf:'center', bottom: screenHeight*.0175, height: 47.5}}>
      <View style={{width: '47.5%', right: 1}}>
      <View style={{width: '100%', height: screenHeight*.0575, borderWidth: 5, borderRadius: 7, borderColor: '#000000', backgroundColor: '#000000', left: 3, top: 3}}/>
      <View style={{width: '100%', height: screenHeight*.0575, borderWidth: 4.5, borderRadius: 7.5, borderColor: '#000000', backgroundColor: '#00ffa9', position: 'absolute'}}>
      <Text style={{fontSize: 20.5, fontWeight: '900', color: '#000000', alignSelf: 'center', textAlign: 'center', top:2}}>Edit Portrait</Text>
      </View>
      </View>

      <View style={{width: '47.5%'}}>
      <View style={{width: '100%', height: screenHeight*.0575, borderWidth: 5, borderRadius: 7, borderColor: '#000000', backgroundColor: '#000000', left: 3, top: 3}}/>
      <View style={{width: '100%', height: screenHeight*.0575, borderWidth: 4.5, borderRadius: 7.5, borderColor: '#000000', backgroundColor: '#00ffa9', position: 'absolute'}}>
      <Text style={{fontSize: 20.5, fontWeight: '900', color: '#000000', alignSelf: 'center', textAlign: 'center', top:2}}>Add Post</Text>
      </View>
      </View>
      </View>

        </View>
        <View style={{height: 15}}/>
        <Text style={{fontSize: 22.5, fontWeight: '900', color: '#ffffff', left: screenWidth*.02}}>Posts</Text>
        </View>
    )
  }
  
  
  const Footer = () => {
    return(
      <View style={{height: 25}}/>
    )
  }


  
  // useEffect with an empty dependency array works the same way as componentDidMount
  useEffect(() => {

    const awaitData = async() =>{
     try {
       // set loading to true before calling API
       setLoading(true);
       await getData()
       .then((response) => response)
       .then((response) => {
       setData(response);
      console.log("profile data test name: " + data.FullNameP);
      })
       // switch loading to false after fetch is complete
       setLoading(false);
     } catch (error) {
       // add error handling here
       setLoading(false);
       console.log(error);
     }
    }
    awaitData()
  }, []);

  if(loading) return(<View style={{flex: 1, backgroundColor: '#000000'}}/>);

  return  <View style={{backgroundColor: '#000000', height: screenHeight, flex:1, alignContent: 'center'}}>

  <View style={{width: 50, height: 50, right: 15, top: '89%', alignItems: 'center', position: 'absolute', zIndex: 3, opacity: 0}}>
   <TouchableOpacity style={{width: 55.5, height: 55.5, bottom: 10, alignItems: 'center', position: 'absolute', overflow: 'hidden', backgroundColor: '#000000', borderRadius: 13, zIndex: 3, elevation: 4}} onPress={() => setModalVisible(true)}>
    <Image style={{width: 166.25, height: 166.25, right: .4, bottom: 55.5, backgroundColor: 'transparent', zIndex: 3, elevation:3, tintColor: '#bb86fc', position: 'relative'}} source={require('../assets/AddIcon.png')}/>
    </TouchableOpacity>
  </View>

      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}>
      <Pressable style={{height: 1000, width: '100%', backgroundColor: '#000000', opacity: .80}} onPress={() => setModalVisible(false)}/>
      <View style={{height: 140, width: 170, bottom: 382, left: 246, backgroundColor: 'transparent'}}>
      <TouchableOpacity style={{flexDirection: 'row', top: 5, right: 2.5}} onPress={() => {navigation.navigate('SelectUserToPost');  setModalVisible(false);}}>
      <Text style={{color: '#ffffff', fontSize: 17, left: 45, top: 2.5}}>Add Post</Text>
      <Image style={{width: 75, height: 75, left: 35, bottom: 23, tintColor: '#bb86fc'}}source={require('../assets/ArrowIcon2.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row', bottom: 35, right: 2.5}}>
      <Text style={{color: '#ffffff', fontSize: 17, left: 7, top: 5}}>Create Portrait</Text>
      <Image style={{width: 75, height: 75, right: 5, bottom: 20, tintColor: '#79e2f2'}}source={require('../assets/ArrowIcon2.png')}/>
      </TouchableOpacity>

      <View style={{width: 50, height: 50, right: 8, top: 90, alignItems: 'center', position: 'absolute'}}>
      <TouchableOpacity style={{width: 60, height: 60, alignItems: 'center', position: 'absolute', backgroundColor: '#000000', borderRadius: 0}} onPress={() => setModalVisible(false)}>
      <Image style={{width: 125, height: 125, right: 0, bottom: 32, tintColor: '#bb86fc', position: 'relative'}} source={require('../assets/ExitIcon2.png')}/>
      </TouchableOpacity>
      </View>

      </View>
      </Modal>

    <FlatList
        data={[' ']}
        renderItem={RenderItem}
        ListHeaderComponent={Header(data)}
        style={{top: 14}}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        windowSize={7}
        removeClippedSubviews={false}
        updateCellsBatchingPeriod={7}
        maxToRenderPerBatch={50}
        ListFooterComponent={() => {
           return<Swiper ref={swiperRef} style={{bottom: 5}} showsPagination={false} horizontal={true} index={0} loop={false} height='100%'
           onIndexChanged={index => {stickyFunction(index)}}>
           <FlatList
           data={DATA}
           renderItem={RenderItem}
           showsVerticalScrollIndicator={false}
           windowSize={7}
           removeClippedSubviews={false}
           updateCellsBatchingPeriod={7}
           maxToRenderPerBatch={50}
           ListEmptyComponent={() => <ActivityIndicator color={"blue"}/>}
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

    <NavBar Home={false} Explore={false} Profile={true}/>

    </View>
  };

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
  
  
  
  export default ProfileScreen;