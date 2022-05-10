import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'

import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import Checkbox from "./../../Component/Checkbox/index";
import Button from "../../Component/Button/index"

export default function Index(props) {
  return (
  <View style={{}}>
  <View style={{flexDirection:"row"}}>
      <View style={{width:130,height:130,backgroundColor:Color.lightblue,borderWidth:1,borderStyle:"dashed",borderRadius:8,alignItems:"center",justifyContent:"center",elevation:5,borderColor:Color.darkgrey,shadowColor:Color.maroon,
    shadowOffset: {width: 30, height: 20}}}>
          <Image  source={props.img}/>
          </View>
      <View style={{justifyContent:"center",marginLeft:30}}>
          <Text style={{textAlign:"center",fontFamily:"Roboto-Bold",color:Color.headcolor,fontSize:20}}>{props.txt1}</Text>
          <Text style={{textAlign:"center",fontFamily:"Roboto-Bold",color:Color.headcolor,fontSize:20,marginTop:10}}>{props.txt2}</Text>
          </View>
  </View>
  </View>
   
  )
}