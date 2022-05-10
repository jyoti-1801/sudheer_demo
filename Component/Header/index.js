import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import {windowWidth,windowHeight} from "../../Utils/Dimension"
import React from 'react'
import { Color } from '../../assets/Color'
export default function index(props) {

  return (
    <View style={{flexDirection:"row",backgroundColor:Color.white,width:windowWidth,justifyContent:"center",alignItems:"center",marginTop:10}}>
    <TouchableOpacity onPress={props.onPress} style={{position:"absolute",left:10}} activeOpacity={0.6}>
    <Image  source={props.img1}/>
    
    </TouchableOpacity>

    <Image style={{...styles.img}} source={props.img2}/>

  </View>
  )
}
const styles = StyleSheet.create({
    img:{
        width:190,height:45,
    }
})