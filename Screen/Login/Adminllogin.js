import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform,ActivityIndicator,Alert,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import Header from '../../Component/Header/index'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import Checkbox from "./../../Component/Checkbox/index";
import Button from "../../Component/Button/index"
import Subheader from '../../Component/Subheader/index'
import * as Animatable from 'react-native-animatable';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSelector, useDispatch } from 'react-redux';
import {  getcredential} from '../../redux/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Adminlogin({navigation}) {
  const { credential}= useSelector(state=>state.userReducer);
  const dipatch = useDispatch();//
  const isvalidobjField = (obj)=>{
    return    Object.values(userinfo).every(value =>value.trim())
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
  if( val.trim().length >= 7 ) {
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
show:false
})

const updateSecureTextEntry = () => {
setData({
    ...data,
    secureTextEntry: !data.secureTextEntry
});
}


const loginHandle = async() =>{
  
if (data.email.length == 0 || data.password.length ==0) {
  Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
    {text: 'Okay'}
  ]);

}else{
   await fetch("https://mocki.io/v1/1bae9979-870c-45e9-a28d-ae11080d03b4",{
     method:"Post",
     headers:{
       'Accept': 'application/json',
       'Content-Type':'application/json'
     },
     body:JSON.stringify({'email':data.email,"password":data.password})
   }).then(res =>res.json())
   .then(resData =>{
    navigation.navigate("Dashboard")
     console.log(resData);
   });
   
  }
  
}

// const updateError = (erro, stateUpdater) =>{
//      stateUpdater(erro);
//      setTimeout(()=>{
//           stateUpdater('')
//      },2500);
// }

// const isvalidEmail  = (value) =>{
//     const regx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return regx.test(value)
// }
// const [userinfo, setuserinfo] = useState({


//     email: "",
//     passcode: "",
 
// });

// const [fault,setfault] = useState ('')

// const { email, passcode } = userinfo
// const handleOnChangeText = (value, fieldName) => {
//     setuserinfo({ ...userinfo, [fieldName]: value });
// };
// const isValidForm = () => {

// if(!isvalidobjField(userinfo)) return updateError('Required all field!', setfault)

// if(!passcode.trim()  ||  passcode.length <8 ) return updateError('Invalid Password!',setfault)

// if(!isvalidEmail(email)) return updateError('Invalid Email!', setfault)
// return true;
// }


//    const Submitform = () => {
//     if (isValidForm()) {
//       dipatch(setShow(true))
//       setTimeout(()=>{
//         dipatch(setShow(false))
//         navigation.navigate("Dashboard")
//         console.log(name)
//       },2000)
//     }
// };






  // const {password,text,color,color1,name,show}= useSelector(state=>state.userReducer);
  // const dipatch = useDispatch();//
  const Back=()=>{
    navigation.navigate('Screen1')
   }

 
  return (
   <SafeAreaView style={{...styles.container,backgroundColor:Color.white}}>
 
  <Header onPress={Back} img1={require('../../assets/image/back.png')} img2={require('../../assets/image/logo.png')}/>
  <View style={{marginTop:30,marginHorizontal:windowWidth/25}}>
  <Subheader img={require('../../assets/image/adminlogo.png')} txt1='Welcome' txt2="Admin/ Sub-Admin" />
  <View style={{alignItems:"center",...styles.loginheader}}>
    <Text style={{...styles.txt}}>Login</Text>
    <Text style={{fontFamily:"Roboto-Regular",color:Color.headcolor,marginTop:20,fontWeight:"400"}}>If You don't have an account register</Text>
    <View style={{flexDirection:"row",marginTop:5}}>
      <Text style={{fontFamily:"Roboto-Regular",color:Color.headcolor,fontWeight:"400"}}>You can</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("adminsignup")} style={{marginLeft:10,justifyContent:"center"}}>
      <Text style={{color:Color.maroon,fontFamily:"Roboto-Bold"}}>Register here !</Text>
      </TouchableOpacity>
      </View>
    </View>
    <View style={{alignItems:"center",justifyContent:"center",flex:1}}>
         <ActivityIndicator  size='large' color={Color.maroon} animating={data.show}/>
  </View>
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
      <Text style={{fontFamily:"Roboto-Regular",fontSize:13,color:"red",marginTop:3,marginLeft:2}}>Password must be 7 character long ! </Text> 
     </Animatable.View>
      }
      
    </View>

    <View style={{flexDirection:"row",marginTop:30}}>
      <View style={{flexDirection:"row",justifyContent:'space-around',alignItems:"center"}}>
      <Checkbox/>
      <Text style={{marginLeft:40,fontFamily:"Roboto-Regular",color:Color.headcolor,fontSize:13 }}>Remember me</Text>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('adminforgotpassword')} style={{position:'absolute',right:15,top:8}}>
      <Text style={{fontFamily:"Roboto-regular",color:Color.headcolor,fontSize:13}} >Forgot Password !</Text>
      </TouchableOpacity>
    </View>

<View style={{marginTop:20}}>

    <Button onPress={loginHandle} title='Login'/>
    </View>
  </View>
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