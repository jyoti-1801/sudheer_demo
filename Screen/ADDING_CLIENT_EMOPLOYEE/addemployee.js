import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'

import Selector from '../../Component/Selector/index'
import Ripple from 'react-native-material-ripple';


export default function Employeeupdtdcmnt({navigation}) {
    const [selectedValue, setSelectedValue] = useState("java");
   
      
  return (
      <SafeAreaView style={{...styles.maincontainer}}>
          
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
<View style={{...styles.heading}}>
    <TouchableOpacity activeOpacity={0.6}>
       <Text style={{...styles.txt2,fontSize:12}}>Project Management system  </Text>
       </TouchableOpacity>

     <Image style={{tintColor:"#197BBD"}} source={require("../../assets/image/right.png")}/>
       <TouchableOpacity style={{}} activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:10,}}>All Project </Text>
       </TouchableOpacity>
       
       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:30,flex:1}}>
           <Text style={{color:Color.headcolor,fontFamily:'Roboto-Bold',margin:10,fontSize:20}}>Add Employees</Text>
           <View style={{height:30,backgroundColor:Color.maroon,justifyContent:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>

                   <Text style={{color:Color.white,fontFamily:'Roboto-Medium',marginLeft:10,fontSize:12}}> Page 1</Text>
                   </View>
               </View>
   
        <ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{marginHorizontal:windowWidth/40,justifyContent:"center"}}>

                                      {/* //Project Detail// */}


 
            <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Employee Name</Text></Text>
                <View style={{...styles.txtinput}}>
                <TextInput keyboardType='default' placeholder='Type here' style={{padding:0,fontSize:13,paddingLeft:5}}/>
                </View>

                </View>
     
                <View style={{...styles.itemcontainer,marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Phone Number</Text></Text>
                <View style={{width:"60%",height:35,borderWidth:1,borderColor:'#BFBFBF',justifyContent:"center"}}>
                    <View style={{flexDirection:'row',alignItems:'center',height:"100%"}}>

                        <View style={{backgroundColor:'red',width:30,height:"100%",borderRightWidth:1,borderColor:"#BFBFBF",alignItems:'center',justifyContent:"center",backgroundColor:Color.white}}>
                        <Text style={{fontSize:12,color:'#BFBFBF',fontFamily:'Roboto-Medium'}}>+91</Text>
                     
                        </View>
                       
                        <TextInput maxLength={10} keyboardType='number-pad' style={{paddingLeft:10}} placeholder='phone no'/>

                    </View>
                    </View>
                

                </View>

               
                <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Email Address</Text></Text>
                <View style={{...styles.txtinput}}>
                <TextInput multiline keyboardType='email-address' placeholder='Type here' style={{fontSize:13,padding:0,paddingLeft:5}}/>
                </View>

                </View>
 
                <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Employee Code</Text></Text>
                <View style={{...styles.txtinput}}>
                <TextInput multiline keyboardType='default' placeholder='Type here' style={{fontSize:13,padding:0,paddingLeft:5}}/>
                </View>

                </View>

                <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Department</Text></Text>
                <View style={{...styles.txtinput,height:100}}>
                <TextInput multiline keyboardType='default' placeholder='Type here' style={{fontSize:13,padding:0,paddingLeft:5}}/>
                </View>

                </View>
        


                <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Position</Text></Text>
                
                <View style={{...styles.txtinput}}>
                <TextInput multiline keyboardType='default' placeholder='Type here' style={{fontSize:13,padding:0,paddingLeft:5}}/>
                </View>
                </View>



{/* 
                                 // COMPANY DETAIL  // */}



              
 
            <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Joining Date</Text></Text>
                <View style={{...styles.txtinput}}>
               <Selector/>
                </View>

                </View>

     

         

                
       


                <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Description</Text></Text>
                <View style={{...styles.txtinput,height:100}}>
                <TextInput multiline keyboardType='default' placeholder='Type here' style={{fontSize:13,padding:0,paddingLeft:5}}/>
                </View>

                </View>
        



                




                                           

       

            
        
       

                
               
       

     


           <View style={{flexDirection:'row',marginBottom:80,alignSelf:"center",marginTop:100}}>
               <Ripple onPress={()=>navigation.goBack()} rippleDuration={500} rippleColor={Color.maroon} style={{borderWidth:1,borderColor:Color.maroon,paddingHorizontal:10,justifyContent:"center",borderRadius:2,width:80,alignItems:"center",paddingVertical:4}}>
                   <Text style={{fontFamily:'Roboto-Regular',color:Color.maroon,fontSize:12}}>Back</Text>
               </Ripple>

               <Ripple onPress={()=>navigation.navigate("page2")} rippleColor={Color.white} rippleDuration={500} style={{backgroundColor:Color.maroon,borderRadius:2,alignItems:"center",justifyContent:"center",marginLeft:10,width:80,paddingVertical:4,elevation:2,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:2}}>
                   <Text style={{color:Color.white,fontFamily:'Roboto-Regular',fontSize:12}}>Next</Text>
               </Ripple>
           </View>
             

       </ScrollView>
       {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
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
            flexDirection:'row',justifyContent:"space-between",marginTop:25
        },
        txtinput:{
            borderWidth:1,width:200,borderColor:"#B5B5B5"
        }
  })