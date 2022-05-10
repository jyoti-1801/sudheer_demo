import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'
import Subheader from '../../Component/Subheader2/index'
import RNPickerSelect from 'react-native-picker-select';
import LottieView from 'lottie-react-native';
import Ripple from 'react-native-material-ripple';
export default function Employeeupdtdcmnt({navigation}) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
      <SafeAreaView style={{flex:1,flexDirection:"column",marginTop:10,backgroundColor:"#F5EFF0",width:windowWidth}}>
          
          <Subheader/>
<View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
    <TouchableOpacity activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13,margin:8,marginHorizontal:windowWidth/25}}>Document Management system  </Text>
       </TouchableOpacity>
     <Image style={{tintColor:"#197BBD",position:'absolute',right:170}} source={require("../../assets/image/right.png")}/>
       <TouchableOpacity style={{position:"absolute",right:100}} activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13,margin:8,marginHorizontal:windowWidth/25}}>Upload  </Text>
       </TouchableOpacity>

       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:20}}>
           <Text style={{color:Color.headcolor,fontFamily:'Roboto-Bold',margin:10,fontSize:20}}>Document Management System Upload</Text>
           <View style={{height:30,backgroundColor:Color.maroon,justifyContent:"center"}}>
               
               </View>
    
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{}} >
       <View style={{height:180,marginTop:20}}>
      <LottieView  
      
        source={require("../../assets/lots.json")}
        autoPlay
        loop ={false}
      />
 
 </View> 
      
      



       </ScrollView>

       <Ripple onPress={()=>navigation.goBack()} rippleColor={Color.maroon} rippleDuration={500} style={{...styles.btncontainer}}>
  <Text style={{...styles.btntxt}}>Back</Text>
</Ripple>
           </View>


  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headercontainer:{
        flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginHorizontal:windowWidth/25
        },
        Selectitmcontainer:{
            flexDirection:'row',marginTop:20,alignItems:"center",paddingHorizontal:10
        },
        chckboxwithtxtcontainer:{
            flexDirection:"row",alignItems:"center",width:"30%"
        },
        txt:{
          fontFamily:'Roboto-Medium',color:'#585858',fontSize:14
        },
        selector:{
            borderWidth:1,height:25,alignItems:"center",justifyContent:"center",width:"70%"
        },
        img:{
            position:"absolute",right:12
        },
        btncontainer:{
            height:30,backgroundColor:Color.white,margin:25,alignItems:"center",justifyContent:'center',borderRadius:20,borderWidth:1,borderColor:Color.maroon
        },
        btntxt:{
            color:Color.maroon,fontFamily:"Roboto-Bold",fontSize:15
        }
  })