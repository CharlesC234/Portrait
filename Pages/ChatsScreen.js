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

const ChatsScreen = ({navigation}) => {

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

  const SearchBar = memo(() => {
    const [modalVisible, setModalVisible] = useState(false);
    return <View style={{flexDirection: 'row', top: 0, justifyContent: 'space-between'}}>
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
        <Image style={{width: 65, height: 50, right: 2, bottom: 1, tintColor: '#79e2f2'}}source={require('../assets/AddChatIcon.png')}/>
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
     fontSize: 16, paddingLeft: 40,}} autoFocus={true} placeholder={'Select a portrait to post on'} placeholderTextColor={'#787878'}>
    </TextInput>
    <Image style={{width: 42.5, height: 42.5, right: 2, bottom: 33}}source={require('../assets/ExploreIcon.png')}/>
    </View>
    </View>
    </View>
  
    </Modal>
    </View> 
  })


    return <ScrollView contentContainerStyle={{alignItems: 'center', flexGrow: 1, backgroundColor: '#000000', top: 0}}>
    <View style={{top: 35, width: '100%'}}>
    <SearchBar/>
    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', left: 10, bottom: 5}}>Chats</Text>

    <ChatsList ImageSource= {require('../assets/uzivert.jpg')} Color="#bb86fc" Name="Lil Uzi" LastMessage= "How have you been? Like What..." TimeSince= "5d ago" NewMessage= {true}/>
    <ChatsList ImageSource= {require('../assets/9.jpg')} Color="#57d9a3" Name="Kanye East" LastMessage= "Whats up" TimeSince= "5d ago" NewMessage= {true}/>
    <ChatsList ImageSource= {require('../assets/10.jpg')} Color="#FF7597" Name="Jay Shetter" LastMessage= "How have you been" TimeSince= "5d ago" NewMessage= {true}/>
    <ChatsList ImageSource= {require('../assets/me3.jpg')} Color="#bb86fc" Name="Charles Cahill" LastMessage= "Can you send me the work" TimeSince= "5d ago" NewMessage= {true}/>
    <ChatsList ImageSource= {require('../assets/uzivert.jpg')} Color="#bb86fc" Name="Lil Uzi" LastMessage= "How have you been? Like What..." TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/9.jpg')} Color="#57d9a3" Name="Kanye East" LastMessage= "Whats up" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/10.jpg')} Color="#FF7597" Name="Jay Shetter" LastMessage= "How have you been" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/me3.jpg')} Color="#57d9a3" Name="Charles Cahill" LastMessage= "Can you send me the work" TimeSince= "5d ago" NewMessage= {false}/>
    <ChatsList ImageSource= {require('../assets/me3.jpg')} Color="#bb86fc" Name="Charles Cahill" LastMessage= "Can you send me the work" TimeSince= "5d ago" NewMessage= {true}/>
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
      
      
      
      export default ChatsScreen;