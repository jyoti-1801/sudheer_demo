import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'
import Subheader from '../../Component/Subheader2/index'

import Selector from '../../Component/Selector/index'
import Ripple from 'react-native-material-ripple';
import Checkbox from '../../Component/Checkbox/index'
export default function Employeeupdtdcmnt({navigation}) {
    const [selectedValue, setSelectedValue] = useState("java");
  
  return (
      <SafeAreaView style={{flex:1,flexDirection:"column",marginTop:10,backgroundColor:"#F5EFF0",width:windowWidth}}>
          
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


<View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
    <TouchableOpacity activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13,margin:8,marginHorizontal:windowWidth/25}}>Document Management system  </Text>
       </TouchableOpacity>
     <Image style={{tintColor:"#197BBD",position:'absolute',right:170}} source={require("../../assets/image/right.png")}/>
       <TouchableOpacity style={{position:"absolute",right:100}} activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13,margin:8,marginHorizontal:windowWidth/25}}>Viewer  </Text>
       </TouchableOpacity>

       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:30}}>
           <Text style={{color:Color.headcolor,fontFamily:'Roboto-Bold',margin:10,fontSize:20}}>Document Management System Viewer</Text>
           <View style={{height:30,backgroundColor:Color.maroon,justifyContent:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                   <Image style={{tintColor:Color.white,}} source={require("../../assets/image/filter1.png")}/>
                   <Text style={{color:Color.white,fontFamily:'Roboto-Medium',marginLeft:10,fontSize:12}}> Filter</Text>
                   </View>
               </View>
   
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{}}>

        {/* <View style={{flexDirection:'row',...styles.Selectitmcontainer}}>
           <Text style={{...styles.txt,width:"30%"}}>File Name</Text> 
     <View style={{width:"70%",justifyContent:"center",borderWidth:1,height:25}}>
       <TextInput style={{fontSize:12,marginLeft:5}} placeholder='Type file name here' />
       </View>
       </View> */}

       <View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>MCR</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>

       {/* <View style={{flexDirection:'row',...styles.Selectitmcontainer}}>
           <Checkbox/>
           <Text style={{...styles.txt,marginLeft:0}}>MCR</Text> 
     <View style={{width:"70%"}}>
       <Selector />
       </View>
       </View> */}

<View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>Section</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>

       
           <View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>Station</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>

     
           <View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>Base</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>



       
       <View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>General Type</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>

       
           <View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>Category</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>

           <View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>Sub Category</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>


           <View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>Micro Category</Text>
          
           <View style={{width:"60%"}}>
               <Selector/>
           </View>
           </View>
{/* 
       <View style={{flexDirection:'row',...styles.Selectitmcontainer}}>
           <Text style={{...styles.txt,width:"30%"}}>Keyword</Text> 
     <View style={{width:"70%"}}>
       <Selector />
       </View>
       </View> */}


<View style={{...styles.Selectitmcontainer}}>
           <Checkbox/> 
          
           <Text style={{position:"absolute",left:40,...styles.txt}}>Keyword</Text>
          
           <View style={{width:"60%",borderWidth:1,height:25,alignItems:"center",borderColor:"#B5B5B5"}}>
              <TextInput/>
           </View>
           </View>
       
        

       {/* <View style={{flexDirection:'row',...styles.Selectitmcontainer}}>
           <Text style={{...styles.txt,width:"30%",color:Color.maroon}}>* <Text style={{color:Color.headcolor}}>Select a file</Text></Text> 
     <TouchableOpacity activeOpacity={0.6} style={{width:"35%",backgroundColor:'#E2E2E2',height:25,alignItems:"center",justifyContent:"center"}}>
       <Text style={{fontSize:14,color:'#5B5B5B'}}>Choose File</Text>
       </TouchableOpacity>
       <Text style={{fontSize:10,fontFamily:'Roboto-medium',color:'grey',marginLeft:10}}>No file choosen</Text>
       </View>
<View style={{marginLeft:"30%",marginTop:10}}>
       <Text style={{fontSize:13,width:200,fontFamily:"Roboto-Regular",color:'#8A8A8A'}}>Allowed types :(Dwg, pdf, Image, kml/kmz, xls, Doc, Shp, zip,
Image formats, Video formats)</Text>
</View> */}

<Ripple onPress={()=>{}} rippleColor={Color.white} rippleDuration={500} style={{...styles.btncontainer}}>
  <Text style={{...styles.btntxt}}>Apply</Text>
</Ripple>

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
            flexDirection:'row',alignItems:"center",paddingHorizontal:5,marginTop:8
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
            height:30,backgroundColor:Color.maroon,margin:25,alignItems:"center",justifyContent:'center',borderRadius:20,marginBottom:30
        },
        btntxt:{
            color:Color.white,fontFamily:"Roboto-Bold",fontSize:15
        }
  })