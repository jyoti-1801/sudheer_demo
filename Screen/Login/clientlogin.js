import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform,ActivityIndicator} from 'react-native'
import React,{useState} from 'react'
import Header from '../../Component/Header/index'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import Checkbox from "./../../Component/Checkbox/index";
import Button from "../../Component/Button/index"
import * as Animatable from 'react-native-animatable';
import Subheader from '../../Component/Subheader/index'


export default function Clientlogin({navigation}) {
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
 isValidemail: true,
 isValidPassword: true,
 check_pswrdInputChange: false,
})

const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
  });
}


const loginHandle = (userName, password) =>{
  
}
//   const dipatch = useDispatch();
//   const handlemail =(value)=>{
//      dipatch( setemail(
//     value 
//      ))
//   };

//   const handlepwd =(value)=>{
//     dipatch(setPassword(
//       value 
//        ))
// }
// const Validate= () => {
//   dipatch(seterror())
//   const expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   //  console.log(expression.test(email));
//   if(!expression.test(email)){
//     dipatch(seterror("Please enter a valid Email id !"));
//     return false;
 
//   } else if (setPassword.length === 0){
//     dipatch(seterror("Password cannot be empty !"));
//     return false;
  
//   } else if (setPassword.length <8) {
//     dipatch(seterror("Password is too short!"));
//   }

//      return true;
// };

  // const Submit =()=>{

  //   if(Validate()){
  //     dipatch(setShow(true))
  //     setTimeout(()=>{
  //       dipatch(setShow(false))
  //    navigation.navigate('Clienthomescreen')
  //     },2000)
  //   }else {
  //     console.log('Error')
  //   }
  // }

  const Back=()=>{
    navigation.goBack()
  
   }
  return (
   <SafeAreaView style={{...styles.container}}>
     <Animatable.View animation="bounceInUp" duration={2000}>
  <Header onPress={Back} img1={require('../../assets/image/back.png')} img2={require('../../assets/image/logo.png')}/>
  <View style={{marginTop:30,marginHorizontal:windowWidth/25}}>
  <Subheader img={require('../../assets/image/clientslogo.png')} txt1='Welcome' txt2="Client" />
  <View style={{alignItems:"center",...styles.loginheader}}>
    <Text style={{...styles.txt}}>Login</Text>
    <Text style={{fontFamily:"Roboto-Regular",color:Color.headcolor,marginTop:20,fontWeight:"400"}}>If You don't have an account register</Text>
    <View style={{flexDirection:"row",marginTop:5}}>
      <Text style={{fontFamily:"Roboto-Regular",color:Color.headcolor,fontWeight:"400"}}>You can</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("clientsignup")} style={{marginLeft:10,justifyContent:"center"}}>
      <Text style={{color:Color.maroon,fontFamily:"Roboto-Bold"}}>Register here !</Text>
      </TouchableOpacity>
      </View>
    </View>

    {/* <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
         <ActivityIndicator  size='large' color={Color.maroon} animating={show}/>
         </View> */}


    <View style={{marginTop:40}}>
    <View style={{...styles.txtinpt,justifyContent:'center',paddingLeft:20,paddingRight:48,borderColor:data.check_textInputChange ? 'green':null}}>
      <TextInput onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}  onChangeText={(val)=> handlevalidemail(val)} autoCapitalize='none'  placeholder='Enter email' />
      {data.check_textInputChange ?
      <Animatable.View style={{position:"absolute",right:25}} animation='bounceIn'>
        <Image style={{tintColor:"green"}} source={require("../../assets/image/check.png")}/>
      </Animatable.View>
     
:null}
      </View>
      {data.isValidemail ? null :
        <Animatable.View animation='fadeInLeft' duration={500}>
         <Text style={{fontFamily:"Roboto-Regular",fontSize:13,color:"red",marginTop:3,marginLeft:2}}>Please enter a valid email id !</Text> 
        </Animatable.View>
}
      <View style={{...styles.txtinpt,justifyContent:'center',marginTop:20,paddingLeft:20,paddingRight:40,borderColor:data.check_pswrdInputChange ? 'green':null}}>
      <TextInput  onChangeText={(val) => handlePasswordChange(val)}  secureTextEntry={data.secureTextEntry ? true : false} placeholder='Password'  style={{}}/>
      <TouchableOpacity onPress={updateSecureTextEntry} style={{position:"absolute",right:20}}>
      <Text>{data.secureTextEntry ?"Show":"Hide"}</Text>
      </TouchableOpacity>
      </View>
      {data.isValidPassword ? null :
      <Animatable.View animation='fadeInLeft' duration={500}>
      <Text style={{fontFamily:"Roboto-Regular",fontSize:13,color:"red",marginTop:3,marginLeft:2}}>Password must be 8 character long ! </Text> 
     </Animatable.View>
      }
      
    </View>

    <View style={{flexDirection:"row",marginTop:30}}>
      <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:"center"}}>
      <Checkbox/>
      <Text style={{marginLeft:40,fontFamily:"Roboto-Regular",color:Color.headcolor,fontSize:13 }}>Remember me</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('clientforgotpassword')} style={{position:'absolute',right:15,top:8}}>
      <Text style={{fontFamily:"Roboto-regular",color:Color.headcolor,fontSize:13}} >Forgot Password !</Text>
      </TouchableOpacity>
    </View>
  
<View style={{marginTop:20}}>
    <Button  title='Login'/>
    </View>
  </View>

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
    fontSize:25,
    fontFamily:"Roboto-Bold",
    color:Color.headcolor,
  },
  loginheader:{
    marginTop:30
  
  },
  logindetailcontainer:{
    marginTop:60,backgroundColor:Color.white,marginHorizontal:windowWidth/2
  },
  txtinpt:{
borderWidth:1,height:52,borderRadius:8
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