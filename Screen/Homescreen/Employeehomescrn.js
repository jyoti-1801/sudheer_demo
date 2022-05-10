import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'
import Pie from '../../Component/poiechart/index'
import { ScrollView } from 'react-native-gesture-handler'

import Dropdown from '../../Component/Picker/index'
import { LinearTextGradient } from "react-native-text-gradient";

export default function Employeehmscrn({navigation}) {
 
  return (
    <SafeAreaView style={{flex:1,flexDirection:"column",marginTop:10,backgroundColor:"#F5EFF0",width:windowWidth}}>
      <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} bounces={false}>
          <View style={{backgroundColor:Color.white,height:52,paddingTop:5,paddingBottom:5}}>
    <View style={{...styles.headercontainer}}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()} style={{alignItems:"center",justifyContent:"center"}}>
     <Image style={{tintColor:Color.maroon}}  source={require("../../assets/image/hamburger.png")}/>
     </TouchableOpacity>
      <View style={{borderWidth:1,borderRadius:8,width:windowWidth/2,height:30,justifyContent:"center",borderColor:Color.darkgrey}}>
        <View style={{flexDirection:"row",paddingLeft:10,alignItems:'center',flex:1}}>
      
        <Image  source={require("../../assets/image/search.png")}/>
        <TextInput style={{paddingLeft:10,padding:0}} placeholder='Search Here'/>
      </View>
   
      </View>
      <Image style={{tintColor:Color.headcolor,width:20,height:20}} source={require('../../assets/image/bell.png')}/>
      <TouchableOpacity activeOpacity={0.6}>
      <Image style={{tintColor:Color.headcolor,width:20,height:20}} source={require('../../assets/image/setting.png')}/>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} style={{width:45,height:45,borderRadius:45/2,alignItems:"center",justifyContent:"center",backgroundColor:Color.white}}>
        <Image style={{width:'100%',height:'100%',borderRadius:20}} source={require("../../assets/image/user1.jpg")}/> 
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={{tintColor:Color.headcolor,width:12,height:12}} source={require("../../assets/image/arrow.png")}/>
        </TouchableOpacity>



    </View>
    </View>

  <View style={{flexDirection:"row",height:67,marginHorizontal:windowWidth/25,marginTop:20,backgroundColor:Color.white,elevation:10,shadowColor:'black',shadowOffset:{width:5,height:3},shadowOpacity:0.5}}> 
    <View style={{height:"100%",backgroundColor:Color.maroon,width:3}}>
        </View>
       <View style={{alignSelf:"center",marginLeft:15}}>
           <Text style={{fontFamily:"Roboto-Bold",fontSize:22,color:Color.maroon}}>Welcome Employee</Text>
       </View>
   
    </View> 

    <View style={{height:600,backgroundColor:Color.white,marginHorizontal:windowWidth/25,marginTop:30,borderRadius:10,shadowOffset:{width:5,height:5},shadowColor:"black",shadowOpacity:0.4,alignItems:"center",shadowRadius:2,elevation:5}}>
        <View style={{width:200,height:200,borderRadius:100,marginTop:30}}>
            <Image style={{width:'100%',height:"100%",borderRadius:100}} source={require('../../assets/image/user1.jpg')}/>
            </View>

            <View style={{height:300,backgroundColor:Color.white,width:'90%',marginTop:20,borderRadius:20,shadowOffset:{width:5,height:4},shadowOpacity:0.5,shadowRadius:5,alignItems:"center",elevation:10}}>
                <View style={{alignItems:"center",justifyContent:'center',marginTop:20}}>
                <Text style={{fontFamily:'Roboto-Bold',fontSize:25,color:"#8A8A8A",}}>Name</Text>
                <Text style={{color:'#585858',fontFamily:'Roboto-Medium',fontSize:18,marginTop:8}}>Alex Rhodes</Text>
                </View>

                <View style={{color:Color.headcolor,width:'90%',borderWidth:0.5,borderColor:'#8A8A8A',marginTop:15}}></View>

                <View style={{alignItems:"center",justifyContent:'center',marginTop:20}}>
                <Text style={{fontFamily:'Roboto-Bold',fontSize:25,color:"#8A8A8A",}}>Position</Text>
                <Text style={{color:'#585858',fontFamily:'Roboto-Medium',fontSize:18,marginTop:8}}>CA</Text>
                </View>

                <View style={{color:Color.headcolor,width:'90%',borderWidth:0.5,borderColor:'#8A8A8A',marginTop:15}}></View>

                <View style={{alignItems:"center",justifyContent:'center',marginTop:20}}>
                <Text style={{fontFamily:'Roboto-Bold',fontSize:25,color:"#8A8A8A",}}>Employee</Text>
                <Text style={{color:'#585858',fontFamily:'Roboto-Medium',fontSize:18,marginTop:8}}>Code</Text>
                </View>

                </View>


        </View>
  
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headercontainer:{
  flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginHorizontal:windowWidth/25
  },
  
  txt:{
      fontFamily:'Roboto-Medium',fontSize:20,
  }
})