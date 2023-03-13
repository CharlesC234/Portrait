import React, { Component, Fragment, useState } from 'react';

var id;
var dev = false;
const devprofile = {
  UserNameP: 'UserName123',
  FullNameP: 'First Last',
  ColorP: '#79e2f2',
  FollowersP: 150,
  PostsP: 30,
  ViewsP: 450,
}

//get client id for sign in 
const getId = async(developer) =>{
    dev = developer;
    fetch("http://10.0.2.2:8080/getId")
    .then((response) => response.json())
    .then((response) =>{
      id = response.myidv
      console.log(response.myidv)
      console.log("My Id is: " + id)
    });
  }


  //get client profile for profile page
  //post authentication then response object
const getProfile = async() =>{
  if(dev == true){
    return devprofile;
  }else{
    var token = id;
    var profile;
        await fetch("http://10.0.2.2:8080/getProfile",{
        method: "post",
        headers:{
            'Content-Type': 'application/json',
             Accept: 'application/json',
        },
        body: JSON.stringify({
            token,
        })
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      profile = response
      console.log("myprofileId: " + profile._id)
      console.log("myprofilename: " + profile.FullNameP)
      console.log("test: " + profile._id)
    })
    return profile;
    }
    }



    const getSelectUserResults = async(searchInput) =>{
      console.log(searchInput);
      fetch("http://10.0.2.2:8080/getSelectUserResults",{
        method: "post",
        headers:{
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body:JSON.stringify({
          searchInput
        })
      })
      .then((response) => response.json())
      .then((response) => {
        console.log("portraitsArr" + response.message);
        setPortraitsArr(response.message);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

    export default getId;
  export {getId, getProfile, getSelectUserResults};