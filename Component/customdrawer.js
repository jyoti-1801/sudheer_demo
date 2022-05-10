import { View, Text,ImageBackground,Image,StatusBar,TouchableOpacity,StyleSheet,Alert,Modal,SafeAreaView,Pressable } from 'react-native'
import React,{useState} from 'react'
import {DrawerContentScrollView,DrawerItemList,DrawerItem} from '@react-navigation/drawer'
import {Color} from '../assets/Color/index'
import Ripple from 'react-native-material-ripple';
import { Drawer } from 'react-native-paper';
import {windowHeight,windowWidth} from '../Utils/Dimension/index'
import {useSelector,useDispatch} from 'react-redux';
import  {setModalvisible} from '../redux/action';
export default function Customdrawer({props,navigation}) {

  const {modalvisible}= useSelector(state=>state.userReducer);
  const dipatch = useDispatch();

  //  const [focus, setfocus] =useState("1");
  //  const [loginAs, setloginAs] =useState("");
   const [NestedDrawerItem,setNestedDrawerItem] =useState(false)
   const [NestedDrawerItem2,setNestedDrawerItem2] =useState(false)
   const [NestedDrawerItem3,setNestedDrawerItem3] =useState(false)
   const [NestedDrawerItem4,setNestedDrawerItem4] =useState(false)
   const [SubNestedDrawerItem2,setSubNestedDrawerItem2] =useState(false)
   const NestedDrawerItemFun =()=>{
     if (NestedDrawerItem  == true)  {
      setNestedDrawerItem(false);
     }else {
      setNestedDrawerItem(true); 
     }
     
   }

   const NestedDrawerItemFun2 =()=>{
    if (NestedDrawerItem2  == true)  {
     setNestedDrawerItem2(false);
    }else {
     setNestedDrawerItem2(true); 
    }
    
  }



  const NestedDrawerItemFun3 =()=>{
    if (NestedDrawerItem3  == true)  {
     setNestedDrawerItem3(false);
    }else {
     setNestedDrawerItem3(true); 
    }
    
  }

  const NestedDrawerItemFun4 =()=>{
    if (NestedDrawerItem4  == true)  {
     setNestedDrawerItem4(false);
    }else {
     setNestedDrawerItem4(true); 
    }
    
  }


  const SubNestedDrawerItemFun3 =()=>{
    if (SubNestedDrawerItem2  == true)  {
    setSubNestedDrawerItem2(false);
    }else {
      setSubNestedDrawerItem2(true); 
    }
    
  }
  return (
      <View style={{flex:1}}>
        
   
   
          <StatusBar barStyle='dark-content' backgroundColor={Color.white}/>
    <DrawerContentScrollView contentContainerStyle={{backgroundColor:Color.white,}} {...props}>
        <View style={{justifyContent:"center",padding:0,alignItems:"center"}}>
        <Image resizeMode='contain' style={{width:'100%',height:40,paddingTop:40}} source={require('../assets/image/logo.png')}/>
        </View>

 <View style={{paddingTop:10,flex:0.3}}>
       {/* <DrawerItemList  {...props}/> */}
      <Drawer.Section style={{marginTop:15}}>
        <View style={{}}>
         <DrawerItem 
         activeBackgroundColor='red'
         activeTintColor='green'
         onPress={()=>{
        navigation.navigate('Homescreen')
         }}
     
          labelStyle={{fontFamily:"Roboto-Medium",fontSize:15,}}
            icon={()=><Image source={require("../assets/image/home.png")}/>}
        
         style={{marginLeft:20}} 
         label={({focused,color}) => <Text style={{color}}>Dashboard</Text>}
    
      
       />
         </View>
                                                           {/* // DOCUMENT MANAGEMENT // */}
         <DrawerItem   
        
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:15}}
              style={{marginTop:20,marginLeft:15}}  
              icon={()=><Image source={require("../assets/image/doc.png")}/>}
              onPress={()=>{
         
                NestedDrawerItemFun();
              }}
               label={({focused,color}) => <View style={{flexDirection:"row",alignItems:"center"}}><Text style={{color}}>Document Management</Text>
               {NestedDrawerItem == true &&(
                <Image style={{position:"absolute",right:-20}} source={require('../assets/image/down.png')}/>
               )}
                {NestedDrawerItem == false &&(
                <Image  style={{position:"absolute",right:-20,...styles.img}} source={require('../assets/image/upload.png')}/>
                )}
                </View>
              }
               />

{NestedDrawerItem == true &&
       <DrawerItem   
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
              style={{marginTop:2,}} label='View Document'  
             
               onPress={()=>{navigation.navigate("Viewdoc")}}/>
}
{NestedDrawerItem == true &&
      <DrawerItem   
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50,}}
              label='Search Document' style={{marginTop:5}} 
            
               onPress={()=>{navigation.navigate("Searchdoc1")}}/>
}
{NestedDrawerItem == true &&
      <DrawerItem   
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
              style={{marginTop:5}} label='Upload Document'  
             
               onPress={()=>{navigation.navigate("Uplaoddoc")}}/>

 }



                               {/* // Project MANAGEMENT // */}
<DrawerItem   
         
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:15}}
              style={{marginTop:20,marginLeft:15}}  
              icon={()=><Image source={require("../assets/image/project.png")}/>}
              onPress={()=>{
                
                NestedDrawerItemFun2();
              }}
               label={({focused,color}) => <View style={{flexDirection:"row",alignItems:"center"}}><Text style={{color}}>Project Management</Text>
               {NestedDrawerItem2 == true &&(
                <Image style={{position:"absolute",right:-20}} source={require('../assets/image/down.png')}/>
               )}
                {NestedDrawerItem2 == false &&(
                <Image  style={{position:"absolute",right:-20,...styles.img}} source={require('../assets/image/upload.png')}/>
                )}
                </View>
              }
               />

{NestedDrawerItem2 == true &&
 <DrawerItem   
 labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
  style={{marginTop:5}} label='All Project'  
 
   onPress={()=>{navigation.navigate("Homescreen")}}/>
}

{NestedDrawerItem2 == true &&

 <DrawerItem   
 labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
  style={{marginTop:5}} label='Create Project'  
 
   onPress={()=>{navigation.navigate("createproject")}}/>
}



                               {/* //SUbmenu of Submenu// */}


{NestedDrawerItem2 == true &&
  <DrawerItem   
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
              style={{marginTop:5}} label='View Project'  
             
               onPress={()=> SubNestedDrawerItemFun3()}/>
}
{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Desktop Study'  

  onPress={()=>{navigation.navigate("Desktop")}}/>
}


{SubNestedDrawerItem2== true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Reconnaissance Survey'  

  onPress={()=>{navigation.navigate("Reconn")}}/>
}


{SubNestedDrawerItem2== true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Detail Route Survey'  

  onPress={()=>{navigation.navigate("Detailr")}}/>
}



{SubNestedDrawerItem2== true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Soil Stratification Survey'  

  onPress={()=>{navigation.navigate("soilstr")}}/>
}



{SubNestedDrawerItem2== true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Soil Corrossion Survey'  

  onPress={()=>{navigation.navigate("corrosion")}}/>
}
{/* 
{SubNestedDrawerItem2== true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Soil Stratification Survey'  

  onPress={()=>{navigation.navigate("Homescreen")}}/>
} */}


{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Geotechnical Survey'  

  onPress={()=>{navigation.navigate("Geo")}}/>
}

{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Topographical Survey'  

  onPress={()=>{navigation.navigate("Topo")}}/>
}


{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Cadastral Survey Village Wise'  

  onPress={()=>{navigation.navigate("Cadast")}}/>
}


{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='ROU Details'  

  onPress={()=>{navigation.navigate("Rou")}}/>
}

{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Crossing Document'  

  onPress={()=>{navigation.navigate("Cross")}}/>
}


{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Forest Document'  

  onPress={()=>{navigation.navigate("forestdocument")}}/>
}


{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='SV/IP/DT/RT Land Document'  

  onPress={()=>{navigation.navigate("Landoc")}}/>
}

{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Raw Data'  

  onPress={()=>{navigation.navigate("rawdata")}}/>
}

{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Fund Reimbursement'  

  onPress={()=>{navigation.navigate("fundreimburse")}}/>
}

{SubNestedDrawerItem2 == true &&

<DrawerItem   
labelStyle={{fontFamily:"Roboto-Medium",fontSize:12,position:"absolute",left:70}}
 style={{marginTop:5}} label='Forms'  

  onPress={()=>{navigation.navigate("forms")}}/>
}

                           

                              {/* // CLIENTS// */}

           <DrawerItem   
         
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:15}}
              style={{marginTop:20,marginLeft:15}}  
              icon={()=><Image source={require("../assets/image/project.png")}/>}
              onPress={()=>{
            
                NestedDrawerItemFun3();
              }}
               label={({focused,color}) => <View style={{flexDirection:"row",alignItems:"center"}}><Text style={{color}}>Clients</Text>
               {NestedDrawerItem2 == true &&(
                <Image style={{position:"absolute",right:-20}} source={require('../assets/image/down.png')}/>
               )}
                {NestedDrawerItem2 == false &&(
                <Image  style={{position:"absolute",right:-20,...styles.img}} source={require('../assets/image/upload.png')}/>
                )}
                </View>
              }
               />

{NestedDrawerItem3 == true &&
 <DrawerItem   
 labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
  style={{marginTop:5}} label='Clients'  
 
   onPress={()=>{}}/>
}

{NestedDrawerItem3 == true &&

 <DrawerItem   
 labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
  style={{marginTop:5}} label='Add CLients'  
 
   onPress={()=>navigation.navigate('addclient')}/>
}
{NestedDrawerItem3 == true &&
  <DrawerItem   
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
              style={{marginTop:5}} label='View Clients'  
             
               onPress={()=>{}}/>
}







                                                 {/* //EMPLOYEE// */}


       <DrawerItem   
           
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:15}}
              style={{marginTop:20,marginLeft:15}}  
              icon={()=><Image source={require("../assets/image/employee.png")}/>}
              onPress={()=>{
              
                NestedDrawerItemFun4();
              }}
               label={({focused,color}) => <View style={{flexDirection:"row",alignItems:"center"}}><Text style={{color}}>Employee</Text>
               {NestedDrawerItem2 == true &&(
                <Image style={{position:"absolute",right:-20}} source={require('../assets/image/down.png')}/>
               )}
                {NestedDrawerItem2 == false &&(
                <Image  style={{position:"absolute",right:-20,...styles.img}} source={require('../assets/image/upload.png')}/>
                )}
                </View>
              }
               />

{NestedDrawerItem4 == true &&
 <DrawerItem   
 labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
  style={{marginTop:5}} label='Employees'  
 
   onPress={()=>{}}/>
}

{NestedDrawerItem4 == true &&

 <DrawerItem   
 labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
  style={{marginTop:5}} label='Add Employees'  
 
   onPress={()=>navigation.navigate('addemployee')}/>
}
{NestedDrawerItem4 == true &&
  <DrawerItem   
             labelStyle={{fontFamily:"Roboto-Medium",fontSize:14,position:"absolute",left:50}}
              style={{marginTop:5}} label='View Employees'  
             
               onPress={()=>{}}/>
}



         
         <DrawerItem     
            labelStyle={{fontFamily:"Roboto-Regular",fontSize:15,color:'grey'}} style={{marginTop:20,marginLeft:20}} icon={()=><Image source={require("../assets/image/request.png")}/>} label='Requests'  onPress={()=>{navigation.navigate("Toptab")}}/>
         <DrawerItem     
            labelStyle={{fontFamily:"Roboto-Regular",fontSize:15}} style={{marginTop:20,marginLeft:20}} icon={()=><Image source={require("../assets/image/role.png")}/>}label='Role Permission'  onPress={()=>{navigation.navigate("Homescreen")}}/>
      </Drawer.Section>

{/* <Ripple onPress={()=>navigation.navigate('Adminglogin')} rippleColor={Color.white} style={{flexDirection:"row",alignItems:"center",flex:0.3}}>
  <Image source={require("../assets/image/log-out.png")}/>
  <Text style={{...styles.btntxt}}>Logout</Text>
</Ripple> */}
      
      </View>

      <Modal  visible={modalvisible}transparent={true}>
     <SafeAreaView style={{marginTop:windowHeight/3,marginHorizontal:windowHeight/20}} >
       <View style={{paddingHorizontal:25,backgroundColor:'white',width:330,height:180,borderRadius:5,elevation:8,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:8}}>
       <Text style={{fontSize:19,fontFamily:"Roboto-Medium",letterSpacing:1.2,marginTop:20,color:'black'}}>Confirm</Text>
       <Text style={{marginTop:20,fontSize:17,fontFamily:"Roboto-Regular",fontWeight:'400',color:'black'}}>Are you Sure want to Logout?</Text>

       <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:50,}}>
         <Pressable   onPress={() =>dipatch(setModalvisible(!modalvisible))} style={{marginRight:25}}>
           <Text style={{fontSize:15,color:Color.maroon,fontFamily:"Roboto-Medium"}}>Close</Text>
          
         </Pressable>
         <Pressable onPress={()=>{navigation.navigate("Adminglogin"),dipatch(setModalvisible(!modalvisible))}}>
           <Text style={{fontSize:15,color:Color.maroon,fontFamily:"Roboto-Medium"}}>Logout</Text>
          
         </Pressable>
         </View>
       </View>
     </SafeAreaView>
    
     </Modal>
  
<Ripple onPress={()=>dipatch(setModalvisible(!modalvisible))} rippleColor={Color.white} style={{flexDirection:"row",alignItems:"center",flex:0.3,marginTop:50,marginLeft:20}}>
  <Image source={require("../assets/image/log-out.png")}/>
  <Text style={{...styles.btntxt}}>Logout</Text>
</Ripple>
    </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  btncontainer:{
    flexDirection:"row",height:42,alignItems:"center",marginTop:25
  },
  btntxt:{
    fontSize:16,fontFamily:"Roboto-Regular",color:"#8A8A8A",marginLeft:12
  },img:{
    width:12,height:12
  }
})