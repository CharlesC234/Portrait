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
  FlatList,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import Comment from './Functions/Comment';
import Post from './Functions/Post';

const DATATOP = {
  portraitColor:"#57d9a3",
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
};


const DATA = [
  {
    portraitColor:"#FF7597",
    userColor:"#f686fc",
    Anonymous:false,
    userName:"Jay Shetter",
    userImagePath: require('../assets/10.jpg'),
    timeSince:"1 day ago",
    postTextContent:"LMAO",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:"#FF7597",
    userColor:"#57d9a3",
    Anonymous:false,
    userName:"Jay Shetter",
    userImagePath: require('../assets/10.jpg'),
    timeSince:"1 day ago",
    postTextContent:"Bad Take",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:"#FF7597",
    userColor:"#57d9a3",
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
    portraitColor:"#FF7597",
    userColor:"#bb86fc",
    Anonymous:false,
    userName:"Jay Shetter",
    userImagePath: require('../assets/10.jpg'),
    timeSince:"1 day ago",
    postTextContent:"Ok",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:"#FF7597",
    userColor:"#79e2f2",
    Anonymous:false,
    userName:"Jay Shetter",
    userImagePath: require('../assets/10.jpg'),
    timeSince:"1 day ago",
    postTextContent:"We began the experiment by setting up our research area",
    hasText: true,
    file: false,
    PostFilePath: null,
    likes:"20",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:"#FF7597",
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
];




const RenderItem = ({item}) => (
  <Post portraitColor= {item.portraitColor} portraitColorRGBA={item.portraitColorRGBA} portraitName={item.portraitName} portraitImagePath= {item.portraitImagePath} 
      userColor={item.userColor} Anonymous={item.Anonymous} hasText={item.hasText} userName={item.userName} userImagePath= {item.userImagePath} timeSince={item.timeSince} 
      postTextContent={item.postTextContent} file={item.file} PostFilePath={item.PostFilePath} likes={item.likes} dislikes={item.dislikes} comments={item.comments}/>
);

const RenderItemComment = ({item}) => (
  <Comment portraitColor= {item.portraitColor} portraitColorRGBA={item.portraitColorRGBA} portraitName={item.portraitName} portraitImagePath= {item.portraitImagePath} 
      userColor={item.userColor} Anonymous={item.Anonymous} hasText={item.hasText} userName={item.userName} userImagePath= {item.userImagePath} timeSince={item.timeSince} 
      postTextContent={item.postTextContent} file={item.file} PostFilePath={item.PostFilePath} likes={item.likes} dislikes={item.dislikes} comments={item.comments}/>
);



const Footer = () => {
  return(
    <View style={{height: 50}}/>
  )
}






//Home Screen Fuction 
const PostPageScreen = ({navigation}) => {
  
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={{backgroundColor: '#000000', height: 10000, flex:1, alignContent: 'center'}}>

    <View style={{height: 10}}/>
    <View style={{backgroundColor: '#000000', flexDirection: 'row', alignItems: 'center', width: '100%', height: 80}}>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50, width: 50, top: 2.5, right: 10, borderRadius: 12, backgroundColor: 'transparent', elevation: 1}}>
    <Image style={{width: 65, height: 65, transform: [{rotate: '180deg'}]}}source={require('../assets/ArrowIcon2.png')}/>
    </TouchableOpacity>
    <View style={{top: 20, right: 10, height: 50, left: 0, backgroundColor: 'transparent', width: '100%', flexDirection: 'row'}}>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', left: 2.5}}>Post</Text>
      <View style={{width: 20, height: 3, borderRadius: 10, left: 17.5, top: 12.75, backgroundColor: '#FF7597'}}/>
        <View style={{width: 7.5, height: 3, borderRadius: 10, left: 22.5, top: 12.75, backgroundColor: '#57d9a3'}}/>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', left: 50}}>Jay Shetter</Text>
      <Text style={{fontSize: 15, color: '#ffffff', left: 65, opacity: .60, top: 3.5}}>(Author)</Text>
    </View>
    </View>

    <RenderItem item={DATATOP}/>
    <View style={{height: 0}}/>

      <FlatList
        style={{ top: 0, width: '100%', left: 2.5}}
        data={DATA}
        renderItem={RenderItemComment}
      />

    <View style={{backgroundColor: '#000000', flexDirection: 'row', alignItems: 'center', width: '100%', height: 55}}>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{height: 50, width: 50, bottom: 10, right: 10, borderRadius: 12, backgroundColor: 'transparent', elevation: 1}}>
    <Image style={{width: 65, height: 65}}source={require('../assets/AddPhoto.png')}/>
    </TouchableOpacity>
    <TextInput style={{height: 25, width: '70%', left: 5, backgroundColor: '#333333', top: 0, borderRadius: 5,
     fontSize: 14, paddingLeft: 10, color: '#ffffff', padding: 0}} placeholder={'Add comment'} placeholderTextColor={'#787878'}>
    </TextInput>
    <View style={{top: 2.5}}>
    <View style={{flexDirection: 'row'}}>
    <View style={{width: 20, height: 4, borderRadius: 10, left: 25, top: 0, backgroundColor: '#57d9a3'}}/>
    <View style={{width: 6, height: 6, borderRadius: 10, left: 30, top: 0, backgroundColor: '#79e2f2'}}/>
    </View>
    <Text style={{borderRadius: 15, fontSize: 12, color: '#ffffff', opacity: .60, left: 25}}>Post</Text>
    </View>

    </View>

    </View>
  
    };


    export default PostPageScreen;