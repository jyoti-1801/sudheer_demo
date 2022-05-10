import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple';
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
export default function index(props) {
  return (
    <SafeAreaView style={{...styles.container}}>
     <Ripple onPress={props.onPress} rippleDuration={500} rippleColor={Color.maroon} style={{...styles.btn}}>
             <Text style={{...styles.btntxt}}>{props.title}</Text>
             </Ripple>
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
         
        flex:1,
        flexDirection:"column",
        
       
    
 
        

    }, 
    btntxt:{
        color:Color.maroon,fontFamily:"Roboto-Bold",fontSize:16
      },
      btn:{
          
      
        marginTop:20,backgroundColor:Color.white,height:52,borderRadius:10,shadowColor:Color.violetdark,elevation:5,
        shadowOffset: {width: -10, height: 2},alignItems:"center",justifyContent:"center",borderWidth:2,borderColor:Color.maroon,
        shadowOpacity: 0.2,
      },
})