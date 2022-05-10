import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'



export default function Employeeupdtdcmnt({navigation}) {
  return (
      <SafeAreaView style={{flexDirection:"column",marginTop:10,backgroundColor:"#F5EFF0",width:windowWidth}}>
        
          <View style={{backgroundColor:Color.white,height:52,paddingTop:5,paddingBottom:5}}>
    <View style={{...styles.headercontainer}}>
    <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{alignItems:"center",justifyContent:"center"}}>
   <Image style={{tintColor:Color.maroon}}  source={require("../../assets/image/hamburger.png")}/>
   </TouchableOpacity>
    <View style={{borderWidth:1,borderRadius:8,width:windowWidth/2,height:30,justifyContent:"center",borderColor:Color.darkgrey}}>
      <View style={{flexDirection:"row",paddingLeft:10,alignItems:'center',flex:1}}>
    
      <Image  source={require("../../assets/image/search.png")}/>
      <TextInput style={{paddingLeft:10,padding:0}} placeholder='Search Here'/>
    </View>
 
    </View>
    <Image style={{tintColor:Color.headcolor,width:20,height:20}} source={require('../../assets/image/bell.png')}/>
    <TouchableOpacity activeOpacity={0.6}>
    <Image style={{tintColor:Color.headcolor,width:20,height:20}} source={require('../../assets/image/setting.png')}/>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.6} style={{width:45,height:45,borderRadius:45/2,alignItems:"center",justifyContent:"center",backgroundColor:Color.white}}>
      <Image style={{width:'100%',height:'100%',borderRadius:20}} source={require("../../assets/image/user1.jpg")}/> 
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{tintColor:Color.headcolor,width:12,height:12}} source={require("../../assets/image/arrow.png")}/>
      </TouchableOpacity>



  </View>
  </View>
 
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headercontainer:{
        flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginHorizontal:windowWidth/25
        },
  })