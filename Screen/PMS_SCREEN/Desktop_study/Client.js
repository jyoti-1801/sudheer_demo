import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../../Utils/Dimension/index'
import {Color} from '../../../assets/Color/index'
import Subheader from '../../../Component/Subheader2/index'
import RNPickerSelect from 'react-native-picker-select';
import Selector from '../../../Component/Selector/index'
import Ripple from 'react-native-material-ripple';
import Table from '../../Table'
export default function Employeeupdtdcmnt({navigation}) {
    const [selectedValue, setSelectedValue] = useState("java");
  return (
      <SafeAreaView style={{flex:1,flexDirection:"column",marginTop:10,backgroundColor:"#F5EFF0",width:windowWidth}}>
          
          <View style={{backgroundColor:Color.white,height:52,paddingTop:5,paddingBottom:5}}>
    <View style={{...styles.headercontainer}}>
    <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{alignItems:"center",justifyContent:"center"}}>
   <Image style={{tintColor:Color.maroon}}  source={require("../../../assets/image/hamburger.png")}/>
   </TouchableOpacity>
    <View style={{borderWidth:1,borderRadius:8,width:windowWidth/2,height:30,justifyContent:"center",borderColor:Color.darkgrey}}>
      <View style={{flexDirection:"row",paddingLeft:10,alignItems:'center',flex:1}}>
    
      <Image  source={require("../../../assets/image/search.png")}/>
      <TextInput style={{paddingLeft:10,padding:0}} placeholder='Search Here'/>
    </View>
 
    </View>
    <Image style={{tintColor:Color.headcolor,width:20,height:20}} source={require('../../../assets/image/bell.png')}/>
    <TouchableOpacity activeOpacity={0.6}>
    <Image style={{tintColor:Color.headcolor,width:20,height:20}} source={require('../../../assets/image/setting.png')}/>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.6} style={{width:45,height:45,borderRadius:45/2,alignItems:"center",justifyContent:"center",backgroundColor:Color.white}}>
      <Image style={{width:'100%',height:'100%',borderRadius:20}} source={require("../../../assets/image/user1.jpg")}/> 
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={{tintColor:Color.headcolor,width:12,height:12}} source={require("../../../assets/image/arrow.png")}/>
      </TouchableOpacity>



  </View>
  </View>
<View style={{flexDirection:"row",alignItems:"center",paddingHorizontal:10}}>
    <TouchableOpacity style={{width:"55%"}} activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13,margin:8,}}>Document Management system  </Text>
       </TouchableOpacity>

       <View style={{width:'45%',flexDirection:"row",alignItems:"center"}}>
     <Image style={{tintColor:"#197BBD"}} source={require("../../../assets/image/right.png")}/>
       <TouchableOpacity style={{}} activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13,margin:8}}>Desktop study  </Text>
       </TouchableOpacity>
       </View>
       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:30}}>
           <Text style={{color:Color.headcolor,fontFamily:'Roboto-Bold',margin:10,fontSize:20}}>Project Management System Viewer</Text>
           <View style={{height:30,backgroundColor:Color.maroon,justifyContent:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                   <Image style={{tintColor:Color.white,}} source={require("../../../assets/image/filter1.png")}/>
                   <Text style={{color:Color.white,fontFamily:'Roboto-Medium',marginLeft:10,fontSize:12}}> Filter</Text>
                   </View>
               </View>
   
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{}}>


       <View style={{flexDirection:'row',...styles.Selectitmcontainer}}>
           <Text style={{...styles.txt,width:"30%"}}>File Name</Text> 
     <View style={{width:"70%"}}>
       <Selector />
       </View>
       </View>

       <View style={{flexDirection:'row',...styles.Selectitmcontainer}}>
           <Text style={{...styles.txt,width:"30%"}}>Project Name</Text> 
     <View style={{width:"70%"}}>
       <Selector />
       </View>
       </View>

       

       

       <View style={{flexDirection:'row',...styles.Selectitmcontainer}}>
           <Text style={{...styles.txt,width:"30%"}}>Keyword</Text> 
     <View style={{width:"70%",borderWidth:1,borderColor:"#B5B5B5",height:25,justifyContent:'center',paddingHorizontal:5}}>
       <TextInput placeholder='Type Here' />
       </View>
       </View>
       


<Ripple onPress={()=>{}} rippleColor={Color.white} rippleDuration={500} style={{...styles.btncontainer}}>
  <Text style={{...styles.btntxt}}>Apply</Text>
</Ripple>



<View style={{marginHorizontal:windowWidth/30,marginTop:2,marginBottom:110}}>
<Ripple onPress={()=>{}} rippleColor={Color.white} rippleDuration={500} style={{backgroundColor:"#4285F4",alignItems:"center",justifyContent:"center",width:"25%",borderRadius:10,height:25}}>
     <Text style={{...styles.btntxt,fontFamily:"Roboto-Medium",padding:2,fontSize:12}}>Edit</Text>
 </Ripple>

<Table/>
</View>
       </ScrollView>

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
            height:30,backgroundColor:Color.maroon,alignSelf:'center',alignItems:"center",justifyContent:'center',borderRadius:20,marginBottom:30,width:'40%',marginTop:35
        },
        btntxt:{
            color:Color.white,fontFamily:"Roboto-Bold",fontSize:15
        }
  })