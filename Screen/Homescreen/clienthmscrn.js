import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'
import Pie from '../../Component/poiechart/index'
import { ScrollView } from 'react-native-gesture-handler'
import { Picker as SelectPicker } from '@react-native-picker/picker'
import Selector from '../../Component/Selector/index'
export default function Employeehmscrn({navigation}) {
 
  return (
    <SafeAreaView style={{flex:1,flexDirection:"column",marginTop:10,backgroundColor:"#F5EFF0",width:windowWidth}}>
      <ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
          <View style={{backgroundColor:Color.white}}>
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

<View style={{height:windowHeight,marginHorizontal:windowWidth/25}}>
  <View style={{borderBottomWidth:1,padding:5,borderColor:"#B5B5B5",width:220}}>
     <Text style={{marginTop:10,color:Color.maroon,fontFamily:"Roboto-medium"}}>Dashboard</Text>

    </View>

    <View style={{flexDirection:"row",paddingTop:20,justifyContent:"space-between"}}>
        <View style={{width:160,height:150,borderRadius:10,backgroundColor:Color.white,elevation:10,shadowOffset:{width:-2,height:3},shadowRadius:8,shadowOpacity:0.6,alignItems:"center",paddingTop:30}}>
            <Text style={{fontFamily:"Roboto-Medium",color:"#999999"}}> Total Project</Text>
            <Text style={{color:"#77797B",fontSize:30,fontFamily:"Roboto-Bold",paddingTop:8}}>20</Text>
          </View>

          <View style={{width:160,height:150,borderRadius:10,backgroundColor:Color.white,elevation:10,shadowOffset:{width:-2,height:3},shadowRadius:8,shadowOpacity:0.6,alignItems:"center",paddingTop:30}}>
            <Text style={{fontFamily:"Roboto-Medium",color:"#999999"}}> Ongoing Project</Text>
            <Text style={{color:"#77797B",fontSize:30,fontFamily:"Roboto-Bold",paddingTop:8}}>100</Text>
          </View>
     </View>
     <View  style={{width:'100%',height:150,borderRadius:10,backgroundColor:Color.white,elevation:10,shadowOffset:{width:-2,height:3},shadowRadius:8,shadowOpacity:0.6,alignItems:"center",marginTop:30,paddingTop:20}}>
     <Text style={{fontFamily:"Roboto-Medium",color:"#999999",fontSize:20}}> Completed Projects</Text>
            <Text style={{color:"#77797B",fontSize:30,fontFamily:"Roboto-Bold",paddingTop:8}}>30</Text>
           
            <Selector/>
        
       </View>
  </View>
  

    
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headercontainer:{
  flexDirection:"row",alignItems:'center',justifyContent:"space-between",marginHorizontal:windowWidth/25
  }
})