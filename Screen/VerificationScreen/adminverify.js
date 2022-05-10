import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import React from 'react'
import Header from '../../Component/Header/index'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple';
import Button from "../../Component/Button/index"
import Button2 from "../../Component/Button2/index"
import { NavigationContainer } from '@react-navigation/native'
export default function Adminverify({navigation}) {
  const adminotp=()=>{
    navigation.navigate('adminotp')
  }

  const adminchangeemail=()=>{
    navigation.navigate('adminchangeemail')
  }
  return (
   <SafeAreaView style={{...styles.container}}>
   <Header img2={require("../../assets/image/logo.png")}/>
   <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
   <View style={{marginHorizontal:10,marginTop:30,flexDirection:"row",backgroundColor:Color.white,}}>
      <View style={{...styles.innercontentcontainer}}>
      <Image style={{}} source={require('../../assets/image/adminlogo.png')}/>
            
              
      </View>
      <View style={{alignItems:"center",justifyContent:"center"}}>
      <Text style={{...styles.txt}}>Welcome</Text>
      <Text style={{...styles.txt,marginTop:10}}>Admin/ Sub-Admin</Text>
      </View>
      </View>

      <View style={{alignItems:"center",justifyContent:"center",marginTop:30}}>
      <Text style={{color:Color.headcolor,fontFamily:"Roboto-Bold",fontSize:24}}>Reset Password</Text>
    
      <View style={{flexDirection:"row",marginTop:5,width:220}}>
        <Text style={{fontFamily:"Roboto-Medium",fontSize:13,color:Color.headcolor,textAlign:"center"}}>You will receive an email with a verification code to reset your password. Please chech your inbox</Text>
   
      </View>
     
        </View>

 <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={{marginTop:20,marginHorizontal:windowWidth/20,justifyContent:"center"}}>
   <Button onPress={adminotp} title="Send Verification Code"/>
   <Button2 onPress={adminchangeemail} title="Change Email Id"/>
  </KeyboardAvoidingView> 
 
      </ScrollView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        flexDirection:"column",
       width:windowWidth,height:windowHeight,
      backgroundColor:Color.white
   
        

    },
    logocontainer:{

        justifyContent:"center",
         alignItems:"center"
   
   
       },
       img:{
        width:190,height:45
    },
    innercontentcontainer:{
      width:130,
      height:130,
      borderWidth:1,
     
      borderStyle:"dashed",
      borderRadius:10,
      alignItems:"center",
      backgroundColor:Color.lightblue,
      shadowColor: '#171717',
      shadowOffset: { height: 4},
      shadowOpacity: 0.2,borderColor:Color.darkgrey,
      justifyContent:"center"
     
  },
  txt:{
    fontSize:20,
    fontFamily:"Roboto-Medium",
    fontWeight:"600",color:Color.headcolor,textAlign:"center",marginLeft:20
  },
  loginheader:{
    marginTop:25
  
  },
  logindetailcontainer:{
    marginTop:60,backgroundColor:Color.white,marginHorizontal:windowWidth/2
  },
  txtinpt:{
borderWidth:1,height:52,borderRadius:8,paddingHorizontal:20
  },
  btn:{
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,backgroundColor:Color.maroon,height:52,borderRadius:10,shadowColor:Color.violetdark,elevation:5,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
  },
  btntxt:{
    color:Color.white,fontFamily:"Roboto-Bold",fontSize:16
  }
  
})