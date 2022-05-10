import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView} from 'react-native'
import React from 'react'
import  Subheader2  from '../../Component/Subheader2'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Color} from '../../assets/Color/index'
import Login from '../../Screen/Login/clientlogin'
import { NavigationContainer } from '@react-navigation/native';
export default function Request() {
    const Tab = createMaterialTopTabNavigator();
  return (
    <View style={{flex:1,backgroundColor:"#F8EFEF"}}>
     <Subheader2/>
     <View style={{...styles.heading}}>
    <TouchableOpacity activeOpacity={0.6}>
       <Text style={{...styles.txt2,fontSize:12}}>lients </Text>
       </TouchableOpacity>

       
       
       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:30,flex:1}}>
           <Text style={{color:Color.maroon,fontFamily:'Roboto-Bold',marginLeft:10,fontSize:20,marginTop:15}}>REQUESTS</Text>
           <Text style={{fontSize:12,fontFamily:'Roboto-Regular',marginLeft:8,fontSize:12,color:'grey',marginTop:5}}> People who requested to sign up in this software </Text>
       
               <Tab.Navigator  screenOptions={{
                   tabBarIcon:({focused,size,color})=>{

                   },
    tabBarLabelStyle: { fontSize: 12,color:Color.headcolor },
    tabBarItemStyle: { width:100 },
    tabBarStyle: { backgroundColor: '#F8EFEF' },

    
  }}>
      <Tab.Screen name="All" component={Login} />
      <Tab.Screen name="Subadmin" component={Login} />
      <Tab.Screen name="Employees" component={Login} />
      <Tab.Screen name="Clients" component={Login} />
    </Tab.Navigator>

               </View> 

    </View>
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
height:28,borderWidth:1.5,borderColor:Color.maroon,marginLeft:"40%",marginRight:'15%',marginTop:15,justifyContent:'center',alignItems:"center"
        },
        btntxt:{
            color:Color.white,fontFamily:"Roboto-Bold",fontSize:15
        },
        maincontainer:{
            flex:1,flexDirection:"column",marginTop:10,backgroundColor:"#F5EFF0",width:windowWidth,flex:1
        },
        heading:{
            flexDirection:"row",width:'70%',marginLeft:15,marginTop:10,marginBottom:15,borderBottomWidth:1,borderColor:Color.headcolor
        },
        txt2:{
            color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13
        },
        prjctdetailcontainer:{
        borderBottomWidth:1,borderColor:"#B5B5B5",marginVertical:10
        },
        txt3:{
            fontSize:18,color:Color.maroon,fontFamily:"Roboto-Medium"
        },
        itemcontainer:{
            flexDirection:'row',justifyContent:"space-between",alignItems:"center",marginTop:10
        },
        txtinput:{
            borderWidth:1,width:200,borderColor:"#B5B5B5"
        }
  })