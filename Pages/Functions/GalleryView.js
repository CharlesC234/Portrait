import React from 'react';
import {
  View,
  Image,
} from 'react-native';
import { enableScreens } from 'react-native-screens';
enableScreens(false);
import { Dimensions } from 'react-native';





 //Gallery Algorithm for random boxes to fill screen (semi-random ofc)
 const GalleryView = (dimension) => {
    //maxes and mins for boxes 
    var min = Dimensions.get('window').width/3.25;
    var max = Dimensions.get('window').width/1.25;
    //variable for determining if program will continue down recursive path (if allowed to quit) 2:1 chance of qutting
    var keepGoing = 1;
    var axis = dimension.axis
    var axisAfter = 2;
  
    //random functions
    //choose pic (for debugging)
    function choosePic(){
      switch(Math.floor(Math.random()* 7)) {
        case 0:
          return require('../../assets/uzivert.jpg');
        case 1:
          return require('../../assets/9.jpg');
        case 2:
          return require('../../assets/6.jpg');
        case 3:
          return require('../../assets/10.jpg');
        case 4:
          return require('../../assets/me1.jpg');
        case 5:
          return require('../../assets/me2.jpg');
        case 6:
          return require('../../assets/me3.jpg');
      }
    }
    //set image variable to random pic so constant thru function
    var image = choosePic();
    var image2 = choosePic();
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
        var heightCurrent = dimension.heightCurrent;
        var widthCurrent = dimension.widthCurrent;
        var heightRemainderCurrent = dimension.height - heightCurrent;
        var widthRemainderCurrent = widthCurrent;
        var flexdir = 'column';
      }else if(axisAfter == 1){
        var heightCurrent = dimension.heightCurrent;
        var widthCurrent = dimension.widthCurrent;
        var widthRemainderCurrent = dimension.width - widthCurrent;
        var heightRemainderCurrent = heightCurrent;
        var flexdir = 'row';
      }
    }else{
      axisAfter = 0;
      var initialSplit =  Math.floor(Math.random() * (dimension.height/2 - 2.5*dimension.width/3));
      if((Math.floor(Math.random() * 0)) > 1 && dimension.noRand !== true){
        return <View style={{height: dimension.height, width: dimension.width, backgroundColor: '#000000', top: 0, left: 0}}>
        <GalleryView width={dimension.width} height={(dimension.height / 2) - initialSplit} axis={2} noRand={true}/>
        <GalleryView width={dimension.width} height={(dimension.height / 2) + initialSplit} axis={2} noRand={true}/>
        </View>
      }else{
      var heightCurrent = min + Math.floor(Math.random() * (dimension.height - 2.5*min));
      var heightRemainderCurrent = dimension.height - heightCurrent;
      var widthCurrent = dimension.width;
      var widthRemainderCurrent = dimension.width;
      var flexdir = 'column';
      }
    }



   const FinalBoxSingle = () =>{
      var thisColor = chooseColor();
      return <View style={{width: widthCurrent - 10, height: heightCurrent - 10, top: 5, alignContent: 'center', alignItems: 'center'}}>
          <View style={{borderRadius: 4,
              width: widthCurrent - 5.5, height: heightCurrent - 5.5, opacity: .95,
              alignItems: 'center', position: 'absolute', backgroundColor: thisColor}}/>
              <View style={{width: widthCurrent - 16, height: heightCurrent - 16, borderRadius: 12.5, opacity: .95,
              position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 5, backgroundColor: '#000000'}}/>
      <Image style={{width: widthCurrent - 16, height: heightCurrent - 16, borderRadius: 12.5, opacity: .95,
        resizeMode: 'cover', position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 4.5, borderColor: '#000000'}}
        source={image}
      />
      </View>
   }
  
   const FinalBox = () =>{
  var thisColor = chooseColor();
  var thisColor2 = chooseColor();
  var totalWidth = 0; 
  var totalHeight = 0;
  if(flexdir == 'column'){
    totalWidth = widthCurrent;
    totalHeight = heightCurrent + heightRemainderCurrent;
  }else if(flexdir == 'row'){
    totalHeight = heightCurrent;
    totalWidth = widthCurrent + widthRemainderCurrent;
  }
  var ratio = heightCurrent/widthCurrent;
  var ratioRem = heightRemainderCurrent/widthRemainderCurrent;
  if(totalHeight < totalWidth * 1.5 && totalHeight > totalWidth * .66 && (Math.floor(Math.random() * 3)) >= 1 &&
  (ratio <= 1.5 || ratio >= .66) && (ratioRem <= 1.5 || ratioRem >= .66) || (heightCurrent < min || widthCurrent < min ||
    widthRemainderCurrent < min || heightRemainderCurrent < min)){
    
      return <View style={{width: totalWidth - 10, height: totalHeight - 10, top: 5, alignContent: 'center', alignItems: 'center'}}>
          <View style={{borderRadius: 4,
              width: totalWidth - 5.5, height: totalHeight - 5.5, opacity: .95,
              alignItems: 'center', position: 'absolute', backgroundColor: thisColor}}/>

          <View style={{width: totalWidth - 16, height: totalHeight - 16, borderRadius: 12.5, opacity: .95,
            position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 5, backgroundColor: '#000000'}}/>
          <Image style={{width: totalWidth - 16, height: totalHeight - 16, borderRadius: 12.5, opacity: .95,
            resizeMode: 'cover', position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 4.5, borderColor: '#000000'}}
            source={image}
          />
      </View>

    }else{

  return <View style={{flexDirection: flexdir}}>
  <View style={{width: widthCurrent - 10, height: heightCurrent - 10, top: 5, alignContent: 'center', alignItems: 'center'}}>
      <View style={{borderRadius: 4,
          width: widthCurrent - 5.5, height: heightCurrent - 5.5, opacity: .95,
          alignItems: 'center', position: 'absolute', backgroundColor: thisColor}}/>

          <View style={{width: widthCurrent - 16, height: heightCurrent - 16, borderRadius: 12.5, opacity: .95,
            position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 5, backgroundColor: '#000000'}}/>
  <Image style={{width: widthCurrent - 16, height: heightCurrent - 16, borderRadius: 12.5, opacity: .95,
    resizeMode: 'cover', position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 4.5, borderColor: '#000000'}}
    source={image}
  />
  </View>

  <View style={{width: 10, height: 10}}/>

  <View style={{width: widthRemainderCurrent - 10, height: heightRemainderCurrent - 10, top: 5, alignContent: 'center', alignItems: 'center'}}>
      <View style={{borderRadius: 4,
          width: widthRemainderCurrent - 5.5, height: heightRemainderCurrent - 5.5, opacity: .95,
          alignItems: 'center', position: 'absolute', backgroundColor: thisColor2}}/>
          <View style={{width: widthRemainderCurrent - 16, height: heightRemainderCurrent - 16, borderRadius: 12.5, opacity: .95,
            position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 5, backgroundColor: '#000000'}}/>
  <Image style={{width: widthRemainderCurrent - 16, height: heightRemainderCurrent - 16, borderRadius: 12.5, opacity: .95,
    resizeMode: 'cover', position: 'absolute', top: 5, alignSelf: 'center', left: 3, borderWidth: 4.5, borderColor: '#000000'}}
    source={image2}
  />
  </View>
  </View> 
    }
   }

   const EndCurrentContinueRemainder = (passed) =>{
    if(passed.axisAfter == 1){
      //if split is going to be on height axis 
      var heightNew = 0;
      var widthNew = passed.widthCurrent;
      var remainderHeight = 0;
      var counter = 0;
      //calculate the new heights of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
      while((heightNew > widthNew * 1.25 || heightNew < widthNew * .75) || (remainderHeight > widthNew * 1.25 || remainderHeight < widthNew * .75)){
        //calculate new height of first box randomly, from space available (OGheight - 2min)
      heightNew = passed.min + Math.floor(Math.random() * (passed.heightCurrent - 2*passed.min));
      remainderHeight = passed.heightCurrent - heightNew;
      counter++
      //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
      //prevents infinite while loop
      if(counter > 30){
        return <FinalBox/>
      }
      }
      var heightNewRemainder = heightNew;
      var widthNewRemainder = passed.widthRemainderCurrent;
      var remainderWidth = passed.widthCurrent;

      return <View style={{flexDirection: passed.flexdir}}>
        <FinalBoxSingle/>
        <View style={{width: 10, height: 10}}/>
        <GalleryView widthCurrent={widthNewRemainder} heightCurrent={heightNewRemainder} width={passed.widthRemainderCurrent} height={passed.heightRemainderCurrent} axis={[passed.axisAfter == 0 ? 1 : 0]}/>
        </View>
  
      //if box can be split again on specified axis
    }else if(passed.axisAfter == 0){
      //if split is going to be on width axis 
  
      var heightNew = passed.heightCurrent;
      var widthNew = 0;
      var remainderWidth = 0;
      var counter = 0;
      //calculate the new widths of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
      while((widthNew > heightNew * 1.25 || widthNew < heightNew * .75) || (remainderWidth > heightNew * 1.25 || remainderWidth < heightNew * .75)){
        widthNew = passed.min + Math.floor(Math.random() * (passed.widthCurrent - 2*passed.min));
        remainderWidth = passed.widthCurrent - widthNew;
        counter++;
        //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
        //prevents infinite while loop
        if(counter > 30){
          return <FinalBox/>
        }
      }
      var heightNewRemainder = passed.heightRemainderCurrent;
      var widthNewRemainder = widthNew;
      var remainderHeight = passed.heightCurrent;

      return <View style={{flexDirection: passed.flexdir}}>
        <FinalBoxSingle/>
        <View style={{width: 10, height: 10}}/>
        <GalleryView widthCurrent={widthNewRemainder} heightCurrent={heightNewRemainder} width={passed.widthRemainderCurrent} height={passed.heightRemainderCurrent} axis={[passed.axisAfter == 0 ? 1 : 0]}/>
        </View>

    }
   }



  
    //decide weather to exit or keep iterating
    //must have good aspect ratio and be less than max size on both axis to exit recursion
    if((widthCurrent <= max && heightCurrent <= max) && 
      heightCurrent < widthCurrent * 1.5 && heightCurrent > widthCurrent * .66 &&
      widthCurrent < heightCurrent * 1.5 && widthCurrent > heightCurrent * .66){
      //decide weather to keep going or not with random function, 2:1 chance of exiting
      keepGoing = Math.floor(Math.random() * 4.5);
    }else{
      keepGoing = 0;
    }
  
    if((widthCurrent/2 <= min && heightCurrent/2 <= min) && (widthRemainderCurrent/2 <= min && heightRemainderCurrent/2 <= min)){
      return <FinalBox/>
    }





    //if splitting box will result in box less than min exit (only if both axis will be less than min)
    if(widthCurrent/2 <= min && heightCurrent/2 <= min){
      if(widthRemainderCurrent < heightRemainderCurrent){
        return <EndCurrentContinueRemainder axisAfter={1} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
      widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
      }else{
      return <EndCurrentContinueRemainder axisAfter={0} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
      widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
      }
    }






  
    //if decided to keep iterating
    if(keepGoing <= 1){





      //if splitting this axis in half will result in two boxes less than minimum on this axis (height)
    if(axisAfter == 1 && heightCurrent/2 <= min){
      var countStore = [dimension.count == undefined ? 0 : dimension.count];
      if(countStore <= 2){
        if(widthCurrent/2 > min){

          var heightNew = heightCurrent;
          var widthNew = 0;
          var remainderWidth = 0;
          var counter = 0;
          //calculate the new widths of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
          while((widthNew > heightNew * 1.5 || widthNew < heightNew * .66) || (remainderWidth > heightNew * 1.5 || remainderWidth < heightNew * .66)){
            widthNew = min + Math.floor(Math.random() * (widthCurrent - 2*min));
            remainderWidth = widthCurrent - widthNew;
            counter++;
            //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
            //prevents infinite while loop
            if(widthCurrent > max && counter > 30){
              widthNew = min + Math.floor(Math.random() * (widthCurrent - 2*min));
              remainderWidth = widthCurrent - widthNew;
              break;
            }else if(counter > 30){
              return <FinalBox/>
            }
          }
          var heightNewRemainder = heightRemainderCurrent;
          var widthNewRemainder = widthNew;
          var remainderHeight = heightCurrent;


          return <View style={{flexDirection: "row"}}>
          <View style={{width: widthCurrent, height: heightCurrent}}>
          <GalleryView widthCurrent={widthNew} heightCurrent={heightNew} width={widthCurrent} height={heightCurrent} axis={1}/>
          </View>
        
          <View style={{width: widthRemainderCurrent, height: heightRemainderCurrent}}>
          <GalleryView widthCurrent={widthNewRemainder} heightCurrent={heightNewRemainder} width={widthRemainderCurrent} height={heightRemainderCurrent}axis={1}/>
          </View>
          </View>

        }
      }else{
        //if aspect ratio is good for exit, then exit
        if(widthRemainderCurrent < heightRemainderCurrent){
          return <EndCurrentContinueRemainder axisAfter={1} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
        widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
        }else{
        return <EndCurrentContinueRemainder axisAfter={0} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
        widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
        }
      }
    







      //if splitting axis in half will result in two boxes less than minimunm on this axis (width)
    }else if(axisAfter == 0 && widthCurrent/2 <= min){
      var countStore = [dimension.count == undefined ? 0 : dimension.count];
      if(countStore <= 2){
        if(heightCurrent/2 > min){

          var heightNew = 0;
          var widthNew = widthCurrent;
          var remainderHeight = 0;
          var counter = 0;
          //calculate the new heights of the two boxes created from the split (must be within good aspect ratio region, hence while loop)
          while((heightNew > widthNew * 1.5 || heightNew < widthNew * .66) || (remainderHeight > widthNew * 1.5 || remainderHeight < widthNew * .66)){
            //calculate new height of first box randomly, from space available (OGheight - 2min)
          heightNew = min + Math.floor(Math.random() * (heightCurrent - 2*min));
          remainderHeight = heightCurrent - heightNew;
          counter++
          //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
          //prevents infinite while loop
          if(heightCurrent > max && counter > 30){
            heightNew = min + Math.floor(Math.random() * (heightCurrent - 2*min));
            remainderHeight = heightCurrent - heightNew;
            break;
          }else if(counter > 30){
            return <FinalBox/>
          }
          }
          var heightNewRemainder = heightNew;
          var widthNewRemainder = widthRemainderCurrent;
          var remainderWidth = widthCurrent;


          return <View style={{flexDirection: "column"}}>
          <View style={{width: widthCurrent, height: heightCurrent}}>
          <GalleryView widthCurrent={widthNew} heightCurrent={heightNew} width={widthCurrent} height={heightCurrent} axis={0}/>
          </View>
        
          <View style={{width: widthRemainderCurrent, height: heightRemainderCurrent}}>
          <GalleryView widthCurrent={widthNewRemainder} heightCurrent={heightNewRemainder} width={widthRemainderCurrent} height={heightRemainderCurrent}axis={0}/>
          </View>
          </View>

        }
      }else{
        //if aspect ratio is good for exit, then exit
        if(widthRemainderCurrent < heightRemainderCurrent){
          return <EndCurrentContinueRemainder axisAfter={1} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
        widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
        }else{
        return <EndCurrentContinueRemainder axisAfter={0} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
        widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
        }
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
      while((heightNew > widthNew * 1.5 || heightNew < widthNew * .66) || (remainderHeight > widthNew * 1.5 || remainderHeight < widthNew * .66)){
        //calculate new height of first box randomly, from space available (OGheight - 2min)
      heightNew = min + Math.floor(Math.random() * (heightCurrent - 2*min));
      remainderHeight = heightCurrent - heightNew;
      counter++
      //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
      //prevents infinite while loop
      if(heightCurrent > max && counter > 30){
        heightNew = min + Math.floor(Math.random() * (heightCurrent - 2*min));
        remainderHeight = heightCurrent - heightNew;
        break;
      }else if(counter > 30){
        return <FinalBox/>
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
      while((widthNew > heightNew * 1.5 || widthNew < heightNew * .66) || (remainderWidth > heightNew * 1.5 || remainderWidth < heightNew * .66)){
        widthNew = min + Math.floor(Math.random() * (widthCurrent - 2*min));
        remainderWidth = widthCurrent - widthNew;
        counter++;
        //if loop attempted more than 20 times and box is greater than maximum, let new boxes be created even if not in good aspect ratio region
        //prevents infinite while loop
        if(widthCurrent > max && counter > 30){
          widthNew = min + Math.floor(Math.random() * (widthCurrent - 2*min));
          remainderWidth = widthCurrent - widthNew;
          break;
        }else if(counter > 30){
          return <FinalBox/>
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
      if(widthRemainderCurrent < heightRemainderCurrent){
        return <EndCurrentContinueRemainder axisAfter={1} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
      widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
      }else{
      return <EndCurrentContinueRemainder axisAfter={0} widthCurrent={widthCurrent} heightCurrent={heightCurrent} min={min} max={max}
      widthRemainderCurrent={widthRemainderCurrent} heightRemainderCurrent={heightRemainderCurrent} flexdir={flexdir}/>
      }
    }
  }


  
  export default GalleryView;