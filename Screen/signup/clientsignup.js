import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform } from 'react-native'
import React,{useState} from 'react'
import Header from '../../Component/Header/index'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import Ripple from 'react-native-material-ripple';
import Button from "../../Component/Button/index"
import {useSelector,useDispatch} from 'react-redux';
import  {setInputcolor, setPassword,setPasswordtxt, setShow,setemail,setconfirmpassword, seterror} from '../../redux/action';
import * as Animatable from 'react-native-animatable';
export default function Clientsignup({navigation}) {

 

  const Back=()=>{
    navigation.goBack()
  
   }


  
   const handleValidUser = (val) => {
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (expression.test(val)) {
        setData({
            ...data,
            isValidemail: true
        });
    } else {
        setData({
            ...data,
            isValidemail: false
        });
    }
}


  const handlevalidemail =(val) => {
    const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(expression.test(val));
    if (expression.test(val)){
      setData({
        ...data,
        email:val,
        check_textInputChange:true,
        isValidemail:true
      });
    }else {
      setData ({
        ...data,
        email:val,
        check_textInputChange:false,
        isValidemail: false
      })
    }
  }

 const handlePasswordChange = (val) => {
    if( val.trim().length >= 8 ) {
        setData({
            ...data,
            password: val,
            check_pswrdInputChange:true,
            isValidPassword: true
        });
    } else {
        setData({
            ...data,
            password: val,
            check_pswrdInputChange:false,
            isValidPassword: false
        });
    }
}


const [data,setData]= useState ({
  email:"",
 password: '',
 check_textInputChange: false,
 secureTextEntry: true,
 confirm_password: '',
 confirm_secureTextEntry: true,
})

const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}

const handleConfirmPasswordChange = (val) => {
  setData({
      ...data,
      confirm_password: val
  });
}

const updateConfirmSecureTextEntry = () => {
  setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
  });
}
  return (
   <SafeAreaView style={{...styles.container}}>
     <Animatable.View animation="bounceInDown" duration={2000}>
   <Header onPress={Back} img1={require("../../assets/image/back.png")}  img2={require("../../assets/image/logo.png")}/>
   <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
   <View style={{marginHorizontal:10,marginTop:30,flexDirection:"row",backgroundColor:Color.white,}}>
      <View style={{...styles.innercontentcontainer}}>
      <Image style={{}} source={require('../../assets/image/clientslogo.png')}/>
            
              
      </View>
      <View style={{justifyContent:"center",marginLeft:30}}>
      <Text style={{...styles.txt}}>Welcome</Text>
      <Text style={{...styles.txt,marginTop:10}}>Client</Text>
      </View>
      </View>

      <View style={{alignItems:"center",justifyContent:"center",marginTop:30}}>
      <Text style={{color:Color.headcolor,fontFamily:"Roboto-Bold",fontSize:24}}>Sign Up</Text>
      <Text style={{color:Color.headcolor,fontFamily:"Roboto-Medium",fontSize:14,marginTop:10}}>If you already have an account </Text>
      <View style={{flexDirection:"row",marginTop:5}}>
        <Text style={{fontFamily:"Roboto-Medium",fontSize:14,color:Color.headcolor}}>You can</Text>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:8}}>
          <Text style={{fontFamily:"Roboto-Medium",color:Color.maroon,fontSize:14,}}>Login here !</Text>
        </TouchableOpacity>
      </View>
     
        </View>

<KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}  style={{marginTop:50,marginHorizontal:windowWidth/20,justifyContent:"center"}}>
  <View>
  <View style={{...styles.txtinpt,justifyContent:'center',paddingLeft:20,paddingRight:48,borderColor:data.check_textInputChange ? 'green':null}}>
      <TextInput onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}  onChangeText={(val)=> handlevalidemail(val)} autoCapitalize='none'  placeholder='Enter email' />
      {data.check_textInputChange ?
      <Animatable.View style={{position:"absolute",right:25}} animation='bounceIn'>
        <Image style={{tintColor:"green"}} source={require("../../assets/image/check.png")}/>
      </Animatable.View>
     
:null}
      </View>
      {/* {data.isValidemail ? null :
        <Animatable.View animation='fadeInLeft' duration={500}>
         <Text style={{fontFamily:"Roboto-Regular",fontSize:13,color:"red",marginTop:3,marginLeft:2}}>Please enter a valid email id !</Text> 
        </Animatable.View>
} */}
  
  <View style={{...styles.txtinpt,marginTop:30,justifyContent:"center"}}>
          <TextInput  onChangeText={(val) => handlePasswordChange(val)} autoCapitalize='none'  secureTextEntry={data.secureTextEntry ? true : false} placeholder='Password' />
          <TouchableOpacity onPress={updateSecureTextEntry} style={{position:"absolute",right:20,color:Color.darkgrey}}>
          <Text style={{color:Color.headcolor,fontFamily:"Roboto-Medium"}}>{data.secureTextEntry ?"Show":"Hide"}</Text>
          </TouchableOpacity>
          </View>
          {/* {data.isValidPassword ? null :
      <Animatable.View animation='fadeInLeft' duration={500}>
      <Text style={{fontFamily:"Roboto-Regular",fontSize:13,color:"red",marginTop:3,marginLeft:2}}>Password must be 8 character long ! </Text> 
     </Animatable.View>
      } */}
          <View style={{...styles.txtinpt,marginTop:30,justifyContent:"center"}}>
          <TextInput  autoCapitalize='none' onChangeText={(val) => handleConfirmPasswordChange(val)}   secureTextEntry={data.confirm_secureTextEntry ? true : false} placeholder='Confirm Password' />
          
          <TouchableOpacity onPress={updateConfirmSecureTextEntry} style={{position:"absolute",right:20,color:Color.darkgrey}}>
          <Text style={{color:Color.headcolor,fontFamily:"Roboto-Medium"}}>{data.confirm_secureTextEntry ?"Show":"Hide"}</Text>
          </TouchableOpacity>
          </View>
          {/* {data.isValidPassword ? null :
      <Animatable.View animation='fadeInLeft' duration={500}>
      <Text style={{fontFamily:"Roboto-Regular",fontSize:13,color:"red",marginTop:3,marginLeft:2}}>Password doesnot match ! </Text> 
     </Animatable.View>
      } */}
  </View>
  <Button  title="Register"/>
  </KeyboardAvoidingView>
  
      </ScrollView>
      </Animatable.View>
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