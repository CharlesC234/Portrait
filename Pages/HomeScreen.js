import React, { Component, Fragment, useState, useEffect } from 'react';
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
  Touchable,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import Post from './Functions/Post';
import GalleryView from './Functions/GalleryView';
import Recents from './Functions/Recents';
import NavBar from './Functions/NavBar';
import { StatusBar } from 'expo-status-bar';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Dimensions } from 'react-native';
import ImageColors from 'react-native-image-colors'
import {BlurView} from '@react-native-community/blur';
import GestureRecognizer from 'react-native-swipe-gestures';
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';

const DATA = [
  {
    portraitColor:'#57d9a3',
    portraitName:'Lil Uzi',
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:'#FF7597',
    Anonymous:false,
    userName:'Jay Shetter',
    userImagePath: require('../assets/10.jpg'),
    timeSince:'A few minutes ago',
    postTextContent: 'post test with text and file, Some pics of us together, see you soon :) ',
    hasText: true,
    file: true,
    PostFilePath: require('../assets/uzivert.jpg'),
    likes: '420',
    dislikes: '0',
    comments: '69',
  },
  {
    portraitColor:"#bb86fc",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#57d9a3",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"5 hours ago",
    postTextContent: null,
    hasText: false,
    file: true,
    PostFilePath: require('../assets/me2.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
  {
    portraitColor:"#f686fc",
    portraitName:"Lil Uzi",
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:"#57d9a3",
    Anonymous:false,
    userName:"Charles Cahill",
    userImagePath: require('../assets/me3.jpg'),
    timeSince:"1 day ago",
    postTextContent:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/me1.jpg'),
    likes:"1",
    dislikes:"2",
    comments:"5",
  },
  {
    portraitColor:"#79e2f2",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#bb86fc",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"A few minutes ago",
    postTextContent:"We began the experiment by setting up our area and added are things, this is a pretty cool feature",
    hasText: true,
    file: true,
    PostFilePath: require('../assets/me2.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
  {
    portraitColor:'#57d9a3',
    portraitName:'Lil Uzi',
    portraitImagePath: require('../assets/uzivert.jpg'),
    userColor:'#FF7597',
    Anonymous:false,
    userName:'Jay Shetter',
    userImagePath: require('../assets/10.jpg'),
    timeSince:'A few minutes ago',
    postTextContent: 'post test with text and file, Some pics of us together, see you soon :) ',
    hasText: true,
    file: true,
    PostFilePath: require('../assets/uzivert.jpg'),
    likes: '420',
    dislikes: '0',
    comments: '69',
  },
  {
    portraitColor:"#bb86fc",
    portraitName:"Charles Cahill",
    portraitImagePath: require('../assets/me3.jpg'),
    userColor:"#57d9a3",
    Anonymous:true,
    userName:"Anonymous",
    userImagePath: require('../assets/Anonymous.png'),
    timeSince:"5 hours ago",
    postTextContent: null,
    hasText: false,
    file: true,
    PostFilePath: require('../assets/me2.jpg'),
    likes:"420",
    dislikes:"0",
    comments:"69",
  },
  
];




const RenderItem = ({item}) => {
  if(item == '1'){
    return(
    <View>
    <View style={{flexDirection: 'row', top: 35 , right: 0, zIndex: 2, height: 25, flex: 1, backgroundColor: '#000000', justifyContent: 'space-between', alignSelf: 'center', width: '100%', position: 'absolute'}}>
    <TouchableOpacity style={{width: 50, height: 50, right: 2.5, bottom: 9, alignItems: 'center', zIndex: 3, elevation: 3}} onPress={()=>navigation.navigate('Notifications')}>
    <Image style={{width: 330, height: 330, right: 0, bottom: 137.5, tintColor: '#ff7597'}}source={require('../assets/NotificationIcon.png')}/>
    <View style={{height: 7, width: 7, backgroundColor: '#000000', borderRadius: 10, right: 25, bottom: 327.5}}/>
    </TouchableOpacity>
    <Image style={{width: 250, height: 80, right: 0, bottom: 23.5}}source={require('../assets/PortraitNameOutline6.png')}/>
    <TouchableOpacity style={{width: 50, height: 50, bottom: 8, left: 5, alignItems: 'center'}} onPress={()=>navigation.navigate('Chats')}>
    <Image style={{width: 220, height: 220, right: 2.5, bottom: 84, tintColor: '#79e2f2'}}source={require('../assets/ChatIcon.png')}/>
    <View style={{height: 7, width: 7, backgroundColor: '#79e2f2', borderRadius: 10, left: 15, bottom: 225, opacity: 0}}/>
    </TouchableOpacity>
    </View>
    <View style={{height: 0}}/>
    </View>
    )
  }else if(item == '2'){
    return(
      <View>
    <View style={{height: 67.5}}/>
  
      <View style={{height: 7.5, backgroundColor: 'transparent'}}/>
      <View style={{height: .75, backgroundColor: '#ffffff', width: '100%', opacity: .175, top: 2, right: 0, borderRadius: 0}}/>
      <View style={{height: 5}}/>
      </View>
    )
  }else{
  return(
  <Post portraitColor= {item.portraitColor} portraitColorRGBA={item.portraitColorRGBA} portraitName={item.portraitName} portraitImagePath= {item.portraitImagePath} 
      userColor={item.userColor} Anonymous={item.Anonymous} hasText={item.hasText} userName={item.userName} userImagePath= {item.userImagePath} timeSince={item.timeSince} 
      postTextContent={item.postTextContent} file={item.file} PostFilePath={item.PostFilePath} likes={item.likes} dislikes={item.dislikes} comments={item.comments}/>
  )
  }
};



const Footer = () => {
  return(
    <View style={{height: 25}}/>
  )
}

const testData = [
  { key: '1' }, { key: '2' }, { key: '3' }, { key: '4' }, { key: '5' }, 
  { key: '6' }, { key: '7' }, { key: '8' }, { key: '9' }, { key: '10' }, { key: '11' }
];

const GalleryViewNew = ({data}) => {
  return(
    <FlatList
    data={data}
    numColumns={3}
    renderItem={({item}) => {
      if(item.key == 11){
        return (
      <View style={{backgroundColor: '#A1A1A1', alignItems: 'center', justifyContent: 'center', 
      flex: 2, margin: 1, height: 2*120}}>
        <Text style={{color: '#000000'}}>{item.key}</Text>
      </View>
      )
      }else{
      return (
      <View style={{backgroundColor: '#A1A1A1', alignItems: 'center', justifyContent: 'center', 
      flex: 1, margin: 1, height: 120}}>
        <Text style={{color: '#000000'}}>{item.key}</Text>
      </View>
      )
      }
    }}
  />
  )
}





//Start new gallery view

const { height, width } = Dimensions.get('window');
function randomColor(){
  switch(Math.floor(Math.random()* 7)) {
    case 0:
      return '#c200ff';
    case 1:
      return '#00c6ff';
    case 2:
      return '#ffef00';
    case 3:
      return '#ff00b6';
    case 4:
      return '#00ffa9';   
    case 5:
      return '#ff0000';
    case 6:
      return '#ff8f00';
  }
}

function randomName(){
  switch(Math.floor(Math.random()* 7)) {
    case 0:
      return "Charles Cahill";
    case 1:
      return "Rudy Haley";
    case 2:
      return "Felicity Howell";
    case 3:
      return "Frank Kohler";
    case 4:
      return "Milo Koss";   
    case 5:
      return "Kris Klocko";
    case 6:
      return "Andy Effertz";
  }
}

const COLUMN_WIDTH = width / 3;
const IMAGE_SPACING = COLUMN_WIDTH * 0.01;
const BLOCK_WIDTH = COLUMN_WIDTH - (IMAGE_SPACING / 2); // W1

// dimensionConstants
const W3 = 'W3'; // wide
const W1 = 'W1'; // square
const H3 = 'H3'; // 3w lengthwise & 2w
const H2 = 'H2'; // 2w lenghtwise & 2w


//Photo uris
const images = [
  'https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg',
  'https://wallpaperaccess.com/full/7281.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71Tq9OsjO7L._SY879_.jpg',
  'https://free4kwallpapers.com/uploads/originals/2019/07/14/ultra-hd-ocean-s-wallpaper.jpg',
  'https://cdn.wallpapersafari.com/24/3/ZlgUc6.jpg',
  'https://www.dayglo.com/media/1212/bokeh-3249883_1280.png',
  'https://wallpaperplay.com/walls/full/b/5/e/159585.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg',
  'https://cosmos-production-assets.s3.amazonaws.com/file/spina/photo/6597/180716_fluorescent_P.jpg',
  'https://c.gitcoin.co/grants/4e0e1e6de351af46fe9482b35840d3bd/logo.png',
  'https://images-na.ssl-images-amazon.com/images/I/81wajOO6mLL._SX355_.jpg',
  'https://www.melbourneairport.com.au/getattachment/Passengers/Parking/long-term-car-park/new-banner-homepage_02.png',
  'https://images.unsplash.com/photo-1490907452017-eccf91f84cf9',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoI7Yah5HYzaOn2tnpdBGdXgLL5Ka3ElFjYJPM7zZ91_WHw0TO',
  'https://i.pinimg.com/originals/0e/9e/88/0e9e8812f01f82650833264673bf51ed.jpg',
  'https://wallpaperaccess.com/full/7281.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/71Tq9OsjO7L._SY879_.jpg',
  'https://free4kwallpapers.com/uploads/originals/2019/07/14/ultra-hd-ocean-s-wallpaper.jpg',
  'https://cdn.wallpapersafari.com/24/3/ZlgUc6.jpg',
  'https://www.dayglo.com/media/1212/bokeh-3249883_1280.png',
  'https://wallpaperplay.com/walls/full/b/5/e/159585.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg',
  'https://cosmos-production-assets.s3.amazonaws.com/file/spina/photo/6597/180716_fluorescent_P.jpg',
  'https://c.gitcoin.co/grants/4e0e1e6de351af46fe9482b35840d3bd/logo.png',
  'https://images-na.ssl-images-amazon.com/images/I/81wajOO6mLL._SX355_.jpg',
  'https://www.melbourneairport.com.au/getattachment/Passengers/Parking/long-term-car-park/new-banner-homepage_02.png',
  'https://images.unsplash.com/photo-1490907452017-eccf91f84cf9',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoI7Yah5HYzaOn2tnpdBGdXgLL5Ka3ElFjYJPM7zZ91_WHw0TO',
  'https://free4kwallpapers.com/uploads/originals/2023/02/12/spiral-milky-way-galaxy-wallpaper.jpg',
  'https://free4kwallpapers.com/uploads/originals/2023/02/13/mercedes-benz-e-evolution-ii-wallpaper.jpg',
  'https://free4kwallpapers.com/uploads/originals/2015/07/19/nine-planet-wallpaper-triple-screen.jpg',
  'https://images.unsplash.com/photo-1541454226399-0f6d5496db29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1541454226399-0f6d5496db29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1541454226399-0f6d5496db29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  'https://images.unsplash.com/photo-1570636418879-08b0a89d882e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80',
  'https://free4kwallpapers.com/uploads/originals/2023/02/12/spiral-milky-way-galaxy-wallpaper.jpg',
  'https://free4kwallpapers.com/uploads/originals/2023/02/13/mercedes-benz-e-evolution-ii-wallpaper.jpg'
].map((url, id) => ({ id, url }));


const processImages = async images => {
  const processedImages = [...images];
  for (const i in images) {
    const image = processedImages[i];

    const whRatioScreen = width / height;
    const w3Threshold = whRatioScreen * 3;
    const h2Threshold = whRatioScreen * 2;
    const h3Threshold = whRatioScreen;

    await Image.getSize(image.url, (wd, ht) => {
      const whRatio = wd / ht;

      let dimension = 'W1';
      if (whRatio > w3Threshold) dimension = 'W3';
      else if (whRatio < h3Threshold) dimension = 'H3';
      else if (whRatio < h2Threshold) dimension = 'H2';

      processedImages[i] = { ...image, width: wd, height: ht, dimension };
    });
  }
  return processedImages;
}




const RenderFunction = (props) => {
  const color = props.color;
  const name = props.name;
  console.log(name);
  console.log(color);
  const [heldLong, setHeldLong] = useState(false);
  var bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  var wd = props.wd;
  var ht = props.ht;
  var url = props.url;
  var imageSpacing = props.imageSpacing;
  const [textDimensions, setTextDimensions] = useState({width: undefined, height: undefined});
  const [showFullText, setShowFullText] = useState(
  {
    applied: false,
    direction: 'row',
    height: 35,
    textTop: 15,
    top: ht - 48,
    left: 4,
    opacity: .75,
    width: wd - 102.5,
  });

  const TextLayout = event => {
    if (showFullText.applied == false){
      if(textDimensions.width || textDimensions.height) return 
      let {width, height} = event.nativeEvent.layout
      console.log(width);
      console.log(height);
      setTextDimensions({width: width, height: height})
    }
    let {width, height} = event.nativeEvent.layout
    console.log(width);
    console.log(height);
    setTextDimensions({width: width, height: height})
  }

  if(showFullText.applied == true && textDimensions.height != ht - showFullText.top - 15){
    setShowFullText({
      applied: true,
      direction: 'column',
      height: null,
      textTop: 0,
      opacity: .55,
      top: ht - textDimensions.height - 15,
      left: 1,
      width: wd - 35,
    })
  }

 const ModalImageFunc = () => {
  const [closed, setClosed] = useState(false);
  var htnew = (width*ht)/wd;
    console.log(heldLong);
  if(heldLong){
    return <View>
    <SwipeUpDownModal modalVisible={true} style={{flex: 1, position: 'absolute'}}
    PressToanimate={closed}
    duration={300}
    ContentModal={
    <View style={{bottom: 50}}>
    <View style={{height: (height - htnew)/2, width: '100%'}}/>
    <Image
      source={{ uri: url }}
      style={{ width: width, height: htnew, borderRadius: 7.5, backgroundColor: '#000000', alignSelf: 'center'}}
      resizeMode="cover"
    />
    <Modal animationType='fade' visable={true} transparent={true} animationInTiming={500}
    animationOutTiming={500} style={{flex: 1, position: 'absolute'}}>
    <Pressable style={{flex: 1}} onPress={() => {setClosed(true)}}>
    <BlurView
            style={{position: 'absolute', flex: 1, width: '100%', height: '100%', bottom: 50}}
            blurAmount={2}
            blurType="dark"
    />
    </Pressable>
    </Modal>
    </View>
    }
    onClose={() => {
      setHeldLong(false);
      setClosed(false);
  }}
    />
    </View> 
  }
  }

  if(wd > width/3){
    return(
     <View>
     <ModalImageFunc/>
      <TouchableOpacity style={{backgroundColor: '#000000', width: wd, height: ht, marginBottom: imageSpacing + 1, alignItems: 'center', alignContent: 'center'}}
      delayLongPress={250}
      activeOpacity={.65}
      onLongPress={() => {setHeldLong(true)}}
      onPress={()=> [showFullText.applied ? setShowFullText({
        applied: false,
        direction: 'row',
        height: 35,
        opacity: .55,
        textTop: 15,
        top: ht - 48,
        left: 4,
        width: wd - 102.5,
      }) : null ]}>
      <View style={{ width: wd - 5, height: ht - 5, borderRadius: 7.5, backgroundColor: color, alignSelf: 'center'}}>
      <View style={{ width: wd - 10.5, height: ht - 10.5, borderRadius: 7.5, top: 3, backgroundColor: '#000000', alignSelf: 'center', position: 'absolute'}}/>
      <Image
        source={{ uri: url }}
        style={{ width: wd - 10.5, height: ht - 10.5, borderWidth: 3, top: 3, borderRadius: 7.5, 
        borderColor: '#000000', backgroundColor: '#000000', alignSelf: 'center', opacity: showFullText.opacity}}
        resizeMode="cover"
      />
      <TouchableOpacity style={{width: wd - 35, top: showFullText.top, left: 12.5, 
       flexDirection: showFullText.direction, position: 'absolute', height: showFullText.height, overflow: 'hidden'}}
      onPress={() => [!showFullText.applied ? setShowFullText({
        applied: true,
        direction: 'column',
        height: null,
        opacity: .55,
        textTop: 0,
        top: ht - textDimensions.height - 15,
        left: 1,
        width: wd - 35,
      }) : setShowFullText({
        applied: false,
        direction: 'row',
        opacity: .75,
        height: 35,
        textTop: 15,
        top: ht - 48,
        left: 4,
        width: wd - 102.5,
      })]}>
      <View style={{width: wd - 35, flexDirection: showFullText.direction}} onLayout={TextLayout}>
      <Text style={{fontSize: 14.5, fontWeight: '800', color: '#ffffff', top: showFullText.textTop}}>{name}</Text>
      <Text style={{fontSize: 14, color: '#ffffff', top: showFullText.textTop + .5, left: showFullText.left, width: showFullText.width}}>{bio}</Text>
      </View>
      </TouchableOpacity> 
      </View>
      </TouchableOpacity>
      </View>
    );

  }else{

  return(
  <View>
  <ModalImageFunc/>
  <TouchableOpacity style={{backgroundColor: '#000000', width: wd, height: ht, marginBottom: imageSpacing + 1, alignItems: 'center', alignContent: 'center'}}
  delayLongPress={250}
  onLongPress={() => {setHeldLong(true)}}>
  <View style={{ width: wd - 5, height: ht - 5, borderRadius: 7.5, backgroundColor: color, alignSelf: 'center'}}>
  <View style={{ width: wd - 10.5, height: ht - 10.5, borderRadius: 7.5, top: 3, backgroundColor: '#000000', alignSelf: 'center', position: 'absolute'}}/>
  <Image
    source={{ uri: url }}
    style={{ width: wd - 10.5, height: ht - 10.5, borderWidth: 3, top: 3, borderRadius: 7.5, borderColor: '#000000', backgroundColor: '#000000', alignSelf: 'center', opacity: .75}}
    resizeMode="cover"
  />
  <View style={{width: wd - 35, top: ht - 33, left: 12.5, flexDirection: 'row', position: 'absolute', height: 20, overflow: 'scroll'}}>
  <Text style={{fontSize: 14.5, fontWeight: '800', color: '#ffffff'}}>{name}</Text>
  </View> 
  </View>
  </TouchableOpacity>
  </View>
  );
  }
}



const RenderItem2 = ({ url }, ht, wd) => {
  var thisName = randomName();
  var thisColor = randomColor();
  return <RenderFunction url={url} ht={ht} wd={wd} imageSpacing={0} name={thisName} color={thisColor}/>
  }




const GalleryViewNew2 = () => {
  const [rows, setRows] = useState([]);

  const layoutBricks = (images) => {
    const { w1Array, blocksArray } = images.reduce((acc, cur) => {
      const out = { ...acc };
      if (cur.dimension === W1) out.w1Array = [...out.w1Array, cur];
      else out.blocksArray = [...out.blocksArray, cur];
      return out;
    }, { w1Array: [], blocksArray: [] });

    const blockRows = blocksArray.map(image => {
      if (image.dimension === W3) {
        const widthReductionFactor = width / image.width;
        const ht = image.height * widthReductionFactor;
        return RenderItem2(image, ht, width);
      }

      const maybeInterchange = Math.random() > 0.5;

      if (image.dimension === H2) {
        if (w1Array.length >= 2) {
          const w1Element1 = w1Array.pop();
          const w1Element2 = w1Array.pop();
          
          const elements = [
            RenderItem2(image, BLOCK_WIDTH * 2 + IMAGE_SPACING + 1, BLOCK_WIDTH * 2, IMAGE_SPACING + 1),
            <View style={{ flexDirection: 'column' }}>
              {RenderItem2(w1Element1, BLOCK_WIDTH, BLOCK_WIDTH, IMAGE_SPACING)}
              {RenderItem2(w1Element2, BLOCK_WIDTH, BLOCK_WIDTH, IMAGE_SPACING)}
            </View>
          ];

          if (maybeInterchange) elements.reverse();

          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {elements}
            </View>
          );
        } else {
          w1Array.push({ ...image, width: BLOCK_WIDTH, height: BLOCK_WIDTH });
        }
      }

      if (image.dimension === H3) {
        if (w1Array.length >= 3) {
          const w1Element1 = w1Array.pop();
          const w1Element2 = w1Array.pop();
          const w1Element3 = w1Array.pop();

          const elements = [
            RenderItem2(image, BLOCK_WIDTH * 3 + (IMAGE_SPACING + 1 * 2), BLOCK_WIDTH * 2, IMAGE_SPACING + 1),
            <View style={{ flexDirection: 'column' }}>
              {RenderItem2(w1Element1, BLOCK_WIDTH, BLOCK_WIDTH, IMAGE_SPACING)}
              {RenderItem2(w1Element2, BLOCK_WIDTH, BLOCK_WIDTH, IMAGE_SPACING)}
              {RenderItem2(w1Element3, BLOCK_WIDTH, BLOCK_WIDTH, IMAGE_SPACING)}
            </View>
          ];

          if (maybeInterchange) elements.reverse();

          return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {elements}
            </View>
          );
        } else {
          w1Array.push({ ...image, width: BLOCK_WIDTH, height: BLOCK_WIDTH });
        }
      }
    });

    const w1Rows = (
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {w1Array.map(image => RenderItem2(image, BLOCK_WIDTH, BLOCK_WIDTH, IMAGE_SPACING))}
      </View>
    )
    
    setRows([...rows, ...blockRows, w1Rows]);
  }

  const layout = async () => {
    const processedImages = await processImages(images);
    layoutBricks(processedImages);
  }

  useEffect(() => { layout() }, []);

  return (
    <>
      <StatusBar hidden />
      <ScrollView
        style={{ flex: 1, width: '100%', backgroundColor: '#000000'}}
        removeClippedSubviews
      >
        {rows}
      </ScrollView>
    </>
  );
}


//End new gallery view









//Home Screen Fuction 
const HomeScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [reload, setReload] = useState();
    useEffect(() => { setReload(1)}, []);

    return <View style={{backgroundColor: '#000000',flex:1, alignContent: 'center'}}>

  <View style={{width: 50, height: 50, right: 15, top: '89%', alignItems: 'center', position: 'absolute', zIndex: 3, opacity: 0}}>
   <TouchableOpacity style={{width: 55.5, height: 55.5, bottom: 10, alignItems: 'center', position: 'absolute', overflow: 'hidden', backgroundColor: '#000000', borderRadius: 13, zIndex: 3, elevation: 4}} onPress={() => setModalVisible(true)}>
    <Image style={{width: 166.25, height: 166.25, right: .4, bottom: 55.5, backgroundColor: 'transparent', zIndex: 3, elevation:3, tintColor: '#57d9a3', position: 'relative'}} source={require('../assets/AddIcon.png')}/>
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
      <Image style={{width: 125, height: 125, right: 0, bottom: 32, tintColor: '#57d9a3', position: 'relative'}} source={require('../assets/ExitIcon2.png')}/>
      </TouchableOpacity>
      </View>

      </View>
      </Modal>
      
      <View style={{height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#000000', top: 0, visible: reload}}>
      <GalleryViewNew2/>
      </View>

      
    <NavBar Home={true} Explore={false} Profile={false}/>

    </View>
  
    };




    
    export default HomeScreen;