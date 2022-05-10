import { View, Text, SafeAreaView,StyleSheet,Image,TouchableOpacity,TextInput,ScrollView,KeyboardAvoidingView,Platform,Alert} from 'react-native'
import React from 'react'
import Header from '../../Component/Header/index'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import Button from "../../Component/Button/index"
import {useSelector,useDispatch} from 'react-redux';
import  {setInputcolor, setPassword,setPasswordtxt,} from '../../redux/action';
export default function Adminsignup({navigation}) {
  const [secure,setsecure]=React.useState("")
  const [paswrderrormsg,setpaswrderrormsg]=React.useState("")
  const [cnfrmpaswrd,setcnfrmpaswrd] =React.useState("")
  const [cnfrmpaswrderrormsg,cnfrmsetpaswrderrormsg]=React.useState("")


myfun = async()=>{
  await fetch('')
}


  const Back=()=>{
    navigation.goBack()
   }
   const {password,text,color}= useSelector(state=>state.userReducer);
   const dipatch = useDispatch();

const formvalidation =()=>{
  if(secure.length == 0){
    alert("Password is required field !")
  }
}

  return (
   <SafeAreaView style={{...styles.container}}>
   <Header onPress={Back} img1={require("../../assets/image/back.png")} img2={require("../../assets/image/logo.png")}/>
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
  <TextInput textContentType='emailAddress' autoCorrect={false} autoCapitalize='none'keyboardType='email-address' placeholder='Enter email' style={{...styles.txtinpt}}/>
  <View style={{...styles.txtinpt,marginTop:30,justifyContent:"center"}}>
          <TextInput onChangeText={(passcode)=>setsecure({passcode})}  secureTextEntry={password ? true:false} placeholder='Password' />

          <TouchableOpacity  onPress={()=>{dipatch(setPassword(!password)),dipatch(setPasswordtxt(!text))}}  style={{position:"absolute",right:20,color:Color.darkgrey}}>
               <Text style={{color:Color.headcolor,fontFamily:"Roboto-Medium"}}>{text ?'Hide':"Show"}</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={{position:"absolute",right:20,color:Color.darkgrey}}>
          <Text style={{color:Color.headcolor,fontFamily:"Roboto-Medium"}}>HIDE</Text>
          </TouchableOpacity> */}
          </View>
       
          <View style={{...styles.txtinpt,marginTop:30,justifyContent:"center"}}>
          <TextInput secureTextEntry={false} placeholder='Confirm Password' />
        
          </View>
  </View>
  <Button onPress={formvalidation} title="Register"/>
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


