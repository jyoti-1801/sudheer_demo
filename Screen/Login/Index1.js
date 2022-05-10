import { View, Text, SafeAreaView,StyleSheet,Image,TouchableHighlight,StatusBar } from 'react-native'
import React from 'react'
import { Color } from '../../assets/Color/index'
import Header from '../../Component/Header'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import * as Animatable from 'react-native-animatable';
export default function Index1({navigation}) {
  return (
    <SafeAreaView style={{...styles.container}}>
      <StatusBar backgroundColor={Color.white} barStyle="dark-content"/>
      <Header img2={require("../../assets/image/logo.png")}/>
        
      <Animatable.View animation="wobble" duration={2000} style={{...styles.contentmainview}}>
          <Text style={{...styles.headingtxt}}>Choose Acount Type</Text>
         <View style={{...styles.contentview}}>
         
             <TouchableHighlight onPress={()=>{navigation.navigate('Adminglogin')}} activeOpacity={0.6} underlayColor={Color.lightblue} style={{...styles.innercontentcontainer,marginTop:30,}} >
                 <View style={{alignItems:"center"}}>
               <Image style={{...styles.img2}} source={require('../../assets/image/admin.png')}/>
               <Text style={{width:100,color:Color.headcolor,fontFamily:"Roboto-Bold",textAlign:"center",marginTop:10}}>Admin / Sub-Admin </Text>
               </View>
               </TouchableHighlight>

               <TouchableHighlight onPress={()=>{navigation.navigate('employeelogin')}} activeOpacity={0.6} underlayColor={Color.lightblue} style={{...styles.innercontentcontainer,marginTop:30,}} >
                 <View style={{alignItems:"center"}}>
               <Image style={{...styles.img2}} source={require('../../assets/image/employee22.png')}/>
               <Text style={{width:100,color:Color.headcolor,fontFamily:"Roboto-Bold",textAlign:"center",marginTop:30}}>Employee </Text>
               </View>
               </TouchableHighlight>

               <TouchableHighlight onPress={()=>{navigation.navigate('clientlogin')}} activeOpacity={0.6} underlayColor={Color.lightblue} style={{...styles.innercontentcontainer,marginTop:30,}} >
               <View style={{alignItems:"center"}}>
               <Image style={{...styles.img2}} source={require('../../assets/image/client.png')}/>
               <Text style={{width:100,color:Color.headcolor,fontFamily:"Roboto-Bold",textAlign:"center",marginTop:30}}>Client </Text>
               </View>
               </TouchableHighlight>

             </View>

      </Animatable.View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container:{
        
        flex:1,
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:Color.white
        

    },
    logocontainer:{

     justifyContent:"center",
      alignItems:"center",marginTop:20

    },

    contentmainview:{

    height:702,
    backgroundColor:Color.violet,
    width:370,
    marginVertical:20,
    alignItems:"center",
    
    },

    img:{
        width:190,height:45
    },
    contentview:{
        backgroundColor:Color.white,
        height:582,
        width:330,
        borderRadius:10,
        marginTop:8,
        elevation:5, shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,alignItems:"center"
    },
    headingtxt:{
        fontSize:25,
        fontFamily:"Roboto-Medium",marginTop:20,color:Color.headcolor
    },
    innercontentcontainer:{
        width:144,
        height:140,
        borderWidth:1,
        marginTop:20,
        borderStyle:"dashed",
        borderRadius:10,
        alignItems:"center",
        backgroundColor:Color.white,
        shadowColor: '#171717',
        shadowOffset: { height: 4},
        shadowOpacity: 0.2,borderColor:Color.darkgrey
       
    },
    img2:{
        marginTop:10
    }
})