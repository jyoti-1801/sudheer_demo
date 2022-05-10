import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import React, { useState,useRef } from 'react'
import Header from '../../Component/Header/index'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple';
import Button from "../../Component/Button/index"
import Button2 from "../../Component/Button2/index"
export default function Employeeotp() {
  const employeepasswordcreate=()=>{
    navigation.navigate('clientpasswordcreate')
  }
    const pin1 = useRef("");
    const pin2 = useRef("");
    const pin3 = useRef("");
    const pin4 = useRef("");
    const [otp,setotp] = useState({1: '',2: '',3: '',4: ''})
  return (
   <SafeAreaView style={{...styles.container}}>
   <Header img2={require("../../assets/image/logo.png")}/>
   <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
   <View style={{marginHorizontal:10,marginTop:30,flexDirection:"row",backgroundColor:Color.white,}}>
      <View style={{...styles.innercontentcontainer}}>
      <Image style={{}} source={require('../../assets/image/employeelogo.png')}/>
            
              
      </View>
      <View style={{marginLeft:30,justifyContent:"center"}}>
      <Text style={{...styles.txt}}>Welcome</Text>
      <Text style={{...styles.txt,marginTop:10}}>Employee</Text>
      </View>
      </View>

      <View style={{alignItems:"center",justifyContent:"center",marginTop:30}}>
      <Text style={{color:Color.headcolor,fontFamily:"Roboto-Bold",fontSize:24}}>Code Verification</Text>
    
      <View style={{flexDirection:"row",marginTop:5,width:220}}>
        <Text style={{fontFamily:"Roboto-Medium",fontSize:13,color:Color.headcolor,textAlign:"center"}}>Enter OTP (One time password) sent to user@email.com</Text>
   
      </View>
     
        </View>
       
 <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={{marginTop:20,marginHorizontal:windowWidth/20,justifyContent:"center"}}>
 <View style={{ alignItems:"center",justifyContent:"center",flexDirection:"row",alignSelf:"center"}}>
        
        <TextInput keyboardType='number-pad' ref={pin1} onChangeText={text =>{setotp({...otp,1:text}); text && pin2.current.focus()}}  maxLength={1} style={styles.txtinput}/>
        <TextInput keyboardType='number-pad' ref={pin2}  onChangeText={text =>{setotp({...otp,2:text});text ? pin3.current.focus():pin1.current.focus()}} maxLength={1} style={styles.txtinput}/>
        <TextInput keyboardType='number-pad' ref={pin3} onChangeText={text =>{setotp({...otp,3:text});text ? pin4.current.focus():pin2.current.focus() }} maxLength={1} style={styles.txtinput}/>
        <TextInput keyboardType='number-pad' ref={pin4} onChangeText={text =>{setotp({...otp,4:text});!text && pin3.current.focus()}} maxLength={1} style={styles.txtinput}/>
       
       </View>
   <Button onPress={employeepasswordcreate} title="Verify Code"/>
   <Button2 title="Resend Code"/>
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
  },
  txtinput:{
    width:60,height:50,borderWidth:0.8,borderRadius:11,marginHorizontal:15,fontSize:20,fontWeight:"500",textAlign:"center",borderColor:Color.headcolor,elevation:2,backgroundColor:Color.white
 }
})
  
