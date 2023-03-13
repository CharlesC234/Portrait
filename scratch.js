   




   // Includes re-run attempt with diffrent axis when axis is finished
   
   
   
   
   
   
   //Gallery Algorithm for random boxes to fill screen (semi-random ofc)
   const GalleryView = (dimension) => {
    //maxes and mins for boxes 
    var min = Dimensions.get('window').width/4.25;
    var max = Dimensions.get('window').width/3;
    //variable for determining if program will continue down recursive path (if allowed to quit) 2:1 chance of qutting
    var keepGoing = 1;
    var axis = dimension.axis
    var axisAfter = 2;
  
    //random functions
    //choose pic (for debugging)
    function choosePic(){
      switch(Math.floor(Math.random()* 7)) {
        case 0:
          return require('../assets/uzivert.jpg');
        case 1:
          return require('../assets/9.jpg');
        case 2:
          return require('../assets/6.jpg');
        case 3:
          return require('../assets/10.jpg');
        case 4:
          return require('../assets/me1.jpg');
        case 5:
          return require('../assets/me2.jpg');
        case 6:
          return require('../assets/me3.jpg');
      }
    }
    //set image variable to random pic so constant thru function
    var image = choosePic();
    //random function for choosing border colors
    function chooseColor(){
      switch(Math.floor(Math.random()* 9)) {
        case 0:
          //blue
          return '#00ccf5';
        case 1:
          //dark blue
          return '#3562ff';
        case 2:
          //teal
          return '#38eabe';
        case 3:
          //pink
          return '#fb56c0';
        case 4:
          //yellow
          return '#fad833';
        case 5: 
          //purple
          return '#ad37ff';
        case 6:
          //orange
          return '#f3672e';
        case 7:
          //red
          return '#ff4040';
        case 8:
          //green
          return '#00d64f'
      }
    }

    
  
    //if not first run of function set axis of change to axis passed as param
    if(axis == 1 || axis == 0){
      axisAfter = axis;
      if(axisAfter == 0){
        if(dimension.flag == 1){
          var heightCurrent = min + Math.floor(Math.random() * (dimension.height - 2*min));
          var heightRemainderCurrent = dimension.height - heightCurrent;
          var widthCurrent = dimension.width;
          var widthRemainderCurrent = dimension.width;
        }else{
        var heightCurrent = dimension.heightCurrent;
        var widthCurrent = dimension.widthCurrent;
        var heightRemainderCurrent = dimension.height - heightCurrent;
        var widthRemainderCurrent = widthCurrent;
        }
        var flexdir = 'column';
      }else if(axisAfter == 1){
        if(dimension.flag == 1){
          widthCurrent = min + Math.floor(Math.random() * (dimension.width - 2*min));
          var widthRemainderCurrent = dimension.width - widthCurrent;
          heightCurrent = dimension.height;
          var heightRemainderCurrent = dimension.height;
        }else{
        var heightCurrent = dimension.heightCurrent;
        var widthCurrent = dimension.widthCurrent;
        var widthRemainderCurrent = dimension.width - widthCurrent;
        var heightRemainderCurrent = heightCurrent;
        }
        var flexdir = 'row';
      }
    }else{
      axisAfter = 0;
      var heightCurrent = min + Math.floor(Math.random() * (dimension.height - 2*min));
      var heightRemainderCurrent = dimension.height - heightCurrent;
      var widthCurrent = dimension.width;
      var widthRemainderCurrent = dimension.width;
      var flexdir = 'column';
    }
  
   const FinalBox = () =>{
  var thisColor = chooseColor();
  return <View style={{width: dimension.width - 10, height: dimension.height - 10, top: 5, alignContent: 'center', alignItems: 'center'}}>
  <View style={{borderRadius: 3, borderWidth: 3.75, opacity: 1, opacity: .95,
      borderColor: thisColor, width: dimension.width - 3.5, height: dimension.height - 3.5, 
      alignItems: 'center', position: 'absolute'}}/>
      <View style={{borderRadius: 2, borderWidth: 2.5, opacity: 1, bottom: 1, opacity: .95,
      borderColor: thisColor, width: dimension.width - 9, height: dimension.height - 9, top: 3, 
      alignItems: 'center', position: 'absolute'}}/>
      <View style={{borderRadius: 15, borderWidth: 4.5, borderColor: thisColor,
          width: dimension.width - 3.5, height: dimension.height - 3.5, opacity: .95,
          alignItems: 'center', position: 'absolute', backgroundColor: '#000000'}}/>
  <Image style={{width: dimension.width - 21, height: dimension.height - 21, borderRadius: 7.5, opacity: .95,
    resizeMode: 'cover', position: 'absolute', top: 9, alignSelf: 'center', left: 5.5}}
    source={image}
  />
  </View>
}
  
    //decide weather to exit or keep iterating
    //must have good aspect ratio and be less than max size on both axis to exit recursion
    if(widthCurrent <= max && heightCurrent <= max && 
      heightCurrent < widthCurrent * 1.5 && heightCurrent > widthCurrent * .8 &&
      widthCurrent < heightCurrent * 1.25 && widthCurrent > heightCurrent * .66){
      //decide weather to keep going or not with random function, 2:1 chance of exiting
      keepGoing = Math.floor(Math.random() * 3);
    }
  
    //if splitting box will result in box less than min exit (only if both axis will be less than min)
    if(widthCurrent/2.25 <= min && heightCurrent/2 <= min){
      return <FinalBox/>
    }
  
    //if decided to keep iterating
    if(keepGoing <= 1){
      //if splitting this axis in half will result in two boxes less than minimum on this axis (height)
    if(axisAfter == 1 && heightCurrent/2 <= min){
      //try splitting box on other axis if aspect ratio not ready to exit recursion (ar must be good for final boxes)
      if((heightCurrent > widthCurrent * 1.5 || heightCurrent < widthCurrent * .8) || 
      (widthCurrent > heightCurrent * 1.25 || widthCurrent < heightCurrent * .66)){
        return <GalleryView width={widthCurrent} height={heightCurrent} axis={0} flag={1}/>
      }else{
        //if aspect ratio is good for exit, then exit
        return <FinalBox/>
      }
      
      //if splitting axis in half will result in two boxes less than minimunm on this axis (width)
    }else if(axisAfter == 0 && widthCurrent/2.25 <= min){
      //try splitting box on other axis if aspect ratio not ready to exit recursion (ar must be good for final boxes)
      if((heightCurrent > widthCurrent * 1.5 || heightCurrent < widthCurrent * .8) || 
      (widthCurrent > heightCurrent * 1.25 || widthCurrent < heightCurrent * .66)){
        return <GalleryView width={widthCurrent} height={heightCurrent} axis={1} flag={1}/>
      }else{
        //if aspect ratio is good for exit, then exit
        return <FinalBox/>
      }
    }else{
  
      //if box can be split again on specified axis
    if(axisAfter == 1){
      //if split is going to be on height axis 
      var heightNew = 0;
      var widthNew = widthCurrent;
      var remainderHeight = 0;
      var counter = 0;
      //calculate the new heights of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
      while((heightNew > widthNew * 1.5 || heightNew < widthNew * .8) || (remainderHeight > widthNew * 1.5 || remainderHeight < widthNew * .8)){
        //calculate new height of first box randomly, from space available (OGheight - 2min)
      heightNew = min + Math.floor(Math.random() * (heightCurrent - 2*min));
      remainderHeight = heightCurrent - heightNew;
      counter++
      //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
      //prevents infinite while loop
      if(heightCurrent > max && counter > 25){
        heightNew = min + Math.floor(Math.random() * (heightCurrent - 2*min));
        remainderHeight = heightCurrent - heightNew;
        break;
      }
      }
      var heightNewRemainder = heightNew;
      var widthNewRemainder = widthRemainderCurrent;
      var remainderWidth = widthCurrent;
  
      //if box can be split again on specified axis
    }else if(axisAfter == 0){
      //if split is going to be on width axis 
  
      var heightNew = heightCurrent;
      var widthNew = 0;
      var remainderWidth = 0;
      var counter = 0;
      //calculate the new widths of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
      while((widthNew > heightNew * 1.25 || widthNew < heightNew * .66) || (remainderWidth > heightNew * 1.25 || remainderWidth < heightNew * .66)){
        widthNew = min + Math.floor(Math.random() * (widthCurrent - 2.25*min));
        remainderWidth = widthCurrent - widthNew;
        counter++;
        //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
        //prevents infinite while loop
        if(widthCurrent > max && counter > 25){
          widthNew = min + Math.floor(Math.random() * (widthCurrent - 2.25*min));
          remainderWidth = widthCurrent - widthNew;
          break;
        }
      }
      var heightNewRemainder = heightRemainderCurrent;
      var widthNewRemainder = widthNew;
      var remainderHeight = heightCurrent;
    }
    }
  
    //main return statement
    //recursive call to create more boxes
    //ideally swaps axis back and forth 
    return <View style={{flexDirection: flexdir}}>
    <View style={{width: widthCurrent, height: heightCurrent}}>
    <GalleryView widthCurrent={widthNew} heightCurrent={heightNew} width={widthCurrent} height={heightCurrent} axis={[axisAfter == 0 ? 1 : 0]}/>
    </View>
  
    <View style={{width: widthRemainderCurrent, height: heightRemainderCurrent}}>
    <GalleryView widthCurrent={widthNewRemainder} heightCurrent={heightNewRemainder} width={widthRemainderCurrent} height={heightRemainderCurrent}axis={[axisAfter == 0 ? 1 : 0]}/>
    </View>
    </View>
    }else{
  
      //if program decided to quit 2:1 chance of quitting if less than max dimensions
      return <FinalBox/>
    }
  }

























  return <View style={{flexDirection: flexdir}}>
      <FinalBox/>
      <GalleryView widthCurrent={widthRemainderCurrent} heightCurrent={heightRemainderCurrent} width={dimension.width} height={dimension.height} axis={[axisAfter == 0 ? 1 : 0]}/>



<SwiperFlatList
        showPagination={false}
        vertical={true}
        data={['1', '2', ...DATA]}
        stickyHeaderIndices={[0]}
        stickyHeaderHiddenOnScroll={true}
        showsVerticalScrollIndicator={false}
        renderItem={RenderItem}
        ListFooterComponent={Footer}
        windowSize={3}
        disableGesture={false}
        removeClippedSubviews={false}
        updateCellsBatchingPeriod={3}
        maxToRenderPerBatch={3}
        snapToInterval={Dimensions.get('window').height}
      />
      
      </View>








/ //Gallery Algorithm for random boxes to fill screen (semi-random ofc)
const GalleryView = (dimension) => {
  //maxes and mins for boxes 
  var min = Dimensions.get('window').width/3.25;
  var max = Dimensions.get('window').width/2;
  //variable for determining if program will continue down recursive path (if allowed to quit) 2:1 chance of qutting
  var keepGoing = 1;
  var axis = dimension.axis
  var axisAfter = 2;

  //random functions
  //choose pic (for debugging)
  function choosePic(){
    switch(Math.floor(Math.random()* 7)) {
      case 0:
        return require('../assets/uzivert.jpg');
      case 1:
        return require('../assets/9.jpg');
      case 2:
        return require('../assets/6.jpg');
      case 3:
        return require('../assets/10.jpg');
      case 4:
        return require('../assets/me1.jpg');
      case 5:
        return require('../assets/me2.jpg');
      case 6:
        return require('../assets/me3.jpg');
    }
  }
  //set image variable to random pic so constant thru function
  var image = choosePic();
  //random function for choosing border colors
  function chooseColor(){
    switch(Math.floor(Math.random()* 9)) {
      case 0:
        //blue
        return '#00ccf5';
      case 1:
        //dark blue
        return '#3562ff';
      case 2:
        //teal
        return '#38eabe';
      case 3:
        //pink
        return '#fb56c0';
      case 4:
        //yellow
        return '#fad833';
      case 5: 
        //purple
        return '#ad37ff';
      case 6:
        //orange
        return '#f3672e';
      case 7:
        //red
        return '#ff4040';
      case 8:
        //green
        return '#00d64f'
    }
  }

  const FinalBox = () =>{
    var thisColor = chooseColor();
    return <View style={{width: dimension.width - 10, height: dimension.height - 10, top: 5, alignContent: 'center', alignItems: 'center'}}>
    <View style={{borderRadius: 3, borderWidth: 3.75, opacity: 1, opacity: .95,
        borderColor: thisColor, width: dimension.width - 3.5, height: dimension.height - 3.5, 
        alignItems: 'center', position: 'absolute'}}/>
        <View style={{borderRadius: 2, borderWidth: 2.5, opacity: 1, bottom: 1, opacity: .95,
        borderColor: thisColor, width: dimension.width - 9, height: dimension.height - 9, top: 3, 
        alignItems: 'center', position: 'absolute'}}/>
        <View style={{borderRadius: 15, borderWidth: 4.5, borderColor: thisColor,
            width: dimension.width - 3.5, height: dimension.height - 3.5, opacity: .95,
            alignItems: 'center', position: 'absolute', backgroundColor: '#000000'}}/>
    <Image style={{width: dimension.width - 21, height: dimension.height - 21, borderRadius: 7.5, opacity: .95,
      resizeMode: 'cover', position: 'absolute', top: 9, alignSelf: 'center', left: 5.5}}
      source={image}
    />
    </View>
  }

  //if not first run of function set axis of change to axis passed as param
  if(axis == 1 || axis == 0){
    axisAfter = axis;
  }else{
    axisAfter = 1;
  }

  //decide weather to exit or keep iterating
  //must have good aspect ratio and be less than max size on both axis to exit recursion
  if(dimension.width <= max && dimension.height <= max && 
    dimension.height < dimension.width * 1.5 && dimension.height > dimension.width * .8 &&
    dimension.width < dimension.height * 1.25 && dimension.width > dimension.height * .66){
    //decide weather to keep going or not with random function, 2:1 chance of exiting
    keepGoing = Math.floor(Math.random() * 3);
  }

  //if splitting box will result in box less than min exit (only if both axis will be less than min)
  if(dimension.width/2.25 <= min && dimension.height/2 <= min){
    return <FinalBox/>
  }

  //if decided to keep iterating
  if(keepGoing <= 1){
    //if splitting this axis in half will result in two boxes less than minimum on this axis (height)
  if(axisAfter == 1 && dimension.height/2 <= min){
    //try splitting box on other axis if aspect ratio not ready to exit recursion (ar must be good for final boxes)
    if((dimension.height > dimension.width * 1.5 || dimension.height < dimension.width * .8) || 
    (dimension.width > dimension.height * 1.25 || dimension.width < dimension.height * .66)){
      return <GalleryView width={dimension.width} height={dimension.height} axis={0}/>
    }else{
      //if aspect ratio is good for exit, then exit
      return <FinalBox/>
    }
    
    //if splitting axis in half will result in two boxes less than minimunm on this axis (width)
  }else if(axisAfter == 0 && dimension.width/2.25 <= min){
    //try splitting box on other axis if aspect ratio not ready to exit recursion (ar must be good for final boxes)
    if((dimension.height > dimension.width * 1.5 || dimension.height < dimension.width * .8) || 
    (dimension.width > dimension.height * 1.25 || dimension.width < dimension.height * .66)){
      return <GalleryView width={dimension.width} height={dimension.height} axis={1}/>
    }else{
      //if aspect ratio is good for exit, then exit
      return <FinalBox/>
    }
  }else{

    //if box can be split again on specified axis
  if(axisAfter == 1){
    //if split is going to be on height axis 
    var heightNew = 0;
    var widthNew = dimension.width;
    var remainderHeight = 0;
    var counter = 0;
    //calculate the new heights of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
    while((heightNew > widthNew * 1.5 || heightNew < widthNew * .8) || (remainderHeight > widthNew * 1.5 || remainderHeight < widthNew * .8)){
      //calculate new height of first box randomly, from space available (OGheight - 2min)
    heightNew = min + Math.floor(Math.random() * (dimension.height - 2*min));
    remainderHeight = dimension.height - heightNew;
    counter++
    //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
    //prevents infinite while loop
    if(dimension.height > max && counter > 25){
      heightNew = min + Math.floor(Math.random() * (dimension.height - 2*min));
      remainderHeight = dimension.height - heightNew;
      break;
    }
    }
    var remainderWidth = dimension.width;
    var flexdir = 'column';

    //if box can be split again on specified axis
  }else if(axisAfter == 0){
    //if split is going to be on width axis 

    var heightNew = dimension.height;
    var widthNew = 0;
    var remainderWidth = 0;
    var counter = 0;
    //calculate the new widths of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
    while((widthNew > heightNew * 1.25 || widthNew < heightNew * .66) || (remainderWidth > heightNew * 1.25 || remainderWidth < heightNew * .66)){
      widthNew = min + Math.floor(Math.random() * (dimension.width - 2.25*min));
      remainderWidth = dimension.width - widthNew;
      counter++;
      //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
      //prevents infinite while loop
      if(dimension.width > max && counter > 25){
        widthNew = min + Math.floor(Math.random() * (dimension.width - 2.25*min));
        remainderWidth = dimension.width - widthNew;
        break;
      }
    }
    var remainderHeight = dimension.height;
    var flexdir = 'row';
  }
  }

  //main return statement
  //recursive call to create more boxes
  //ideally swaps axis back and forth 
  return <View style={{flexDirection: flexdir}}>
  <View style={{width: widthNew, height: heightNew}}>
  <GalleryView width={widthNew} height={heightNew} axis={[axisAfter == 0 ? 1 : 0]}/>
  </View>

  <View style={{width: remainderWidth, height: remainderHeight}}>
  <GalleryView width={remainderWidth} height={remainderHeight} axis={[axisAfter == 0 ? 1 : 0]}/>
  </View>
  </View>
  }else{

    //if program decided to quit 2:1 chance of quitting if less than max dimensions
    return <FinalBox/>
  }
}



<TouchableOpacity style={{width: '100%', bottom: 7.5, height:35}}>
<Text style={{fontSize: 14, color: '#ffffff', top: 2.5, height: 35, opacity: .60, alignSelf: 'center'}}>See More</Text>
<Image style={{height: 20, width: 70, alignSelf: 'center', bottom: 15, opacity: .60}} source={require('../assets/DropDownIcon.png')}/>
</TouchableOpacity>










<FlatList
data={[' ']}
renderItem={RenderItem}
ListHeaderComponent={Header}
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
   </Swiper> 
}}
/>