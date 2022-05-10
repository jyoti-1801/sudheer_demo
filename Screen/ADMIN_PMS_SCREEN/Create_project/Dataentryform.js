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
      <SafeAreaView style={{...styles.maincontainer}}>
          
          <Subheader/>
<View style={{...styles.heading}}>
    <TouchableOpacity activeOpacity={0.6}>
       <Text style={{...styles.txt2,fontSize:12}}>Project Management system  </Text>
       </TouchableOpacity>

     <Image style={{tintColor:"#197BBD"}} source={require("../../../assets/image/right.png")}/>
       <TouchableOpacity style={{alignItems:"center"}} activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:10,}}>All Project </Text>
       </TouchableOpacity>
       
       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:30,flex:1}}>
           <Text style={{color:Color.headcolor,fontFamily:'Roboto-Bold',margin:10,fontSize:20}}>Add Project</Text>
           <View style={{height:30,backgroundColor:Color.maroon,justifyContent:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>

                   <Text style={{color:Color.white,fontFamily:'Roboto-Medium',marginLeft:10,fontSize:12}}> Page 1</Text>
                   </View>
               </View>
   
        <ScrollView bounces={false} scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{marginHorizontal:windowWidth/40,justifyContent:"center"}}>

                                      {/* //Desktop Study// */}



            <View style={{...styles.prjctdetailcontainer,marginTop:10}}>
                <Text style={{...styles.txt3}}>Data Entry Forms</Text>
            </View>


            <View style={{...styles.prjctdetailcontainer,marginTop:10,}}>
                <Text style={{...styles.txt3,fontSize:15}}>*Master Forms</Text>
            </View>
 
            {/* <View style={{...styles.itemcontainer}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Expensive Type</Text></Text>
                <View style={{...styles.txtinput}}>
                <TextInput  keyboardType='default' placeholder='Type here' style={{padding:0,fontSize:13,paddingLeft:5}}/>
                </View>

                </View>

                <View style={{flexDirection:'row',justifyContent:"space-between",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Description Type</Text></Text>
                <View style={{...styles.txtinput,height:150}}>
                <TextInput multiline keyboardType='default' placeholder='Type here' style={{padding:0,fontSize:13,paddingLeft:5}}/>
                </View>

                </View> */}

                {/* <View style={{...styles.itemcontainer,marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Amount</Text></Text>
                <View style={{...styles.txtinput}}>
                <TextInput keyboardType='default' placeholder='Type here' style={{padding:0,fontSize:13,paddingLeft:5}}/>
                </View>

                </View> */}


          


                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Land Information</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>

                
  


                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Village Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>



                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>S.O Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>



                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Notice Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>



                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Land Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>



                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Crop Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>


                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Tree Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>


                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13,width:130,}}>*<Text style={{color:Color.headcolor}}>Other Damaged /Restoration</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>


                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13,width:125}}>*<Text style={{color:Color.headcolor}}>Competent Authority Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>


                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Client Detail</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>


                <View style={{...styles.itemcontainer,marginTop:-10,width:"100%",marginTop:20}}>
                <Text style={{color:Color.maroon,fontFamily:"Roboto-Medium",fontSize:13}}>*<Text style={{color:Color.headcolor}}>Payments</Text></Text>

<View style={{alignItems:"center",justifyContent:"center"}}>
    <TouchableOpacity style={{backgroundColor:Color.maroon,alignItems:"center",justifyContent:"center",width:120,padding:3,marginRight:70}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular",color:"white"}}>Create</Text>
    </TouchableOpacity>
    <Text style={{marginTop:15,fontFamily:"Roboto-Regular",fontSize:13,marginRight:70}}>OR</Text>
                <View style={{marginTop:10,alignItems:"center",justifyContent:"center"}}>
                <View style={{flexDirection:"row",alignItems:'center'}}>
                <TouchableOpacity style={{backgroundColor:"#E2E2E2",width:120,paddingVertical:2,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontSize:13,fontFamily:"Roboto-Regular"}}>Choose File</Text>
                </TouchableOpacity>
                <Text style={{fontSize:10,marginLeft:2}}>No File Chosen</Text>
                </View>
                <Text style={{fontSize:10,marginLeft:2,width:200,fontFamily:"Roboto-Regular",marginTop:5}}>Allowed types :(Dwg,pdf,image,kml/kmz,xls,Doc,Shp,Zip,Image formats,Video formats</Text>
                </View>
 </View>               
                </View>


              

   
           




            


                       

            
        
                
               
       
                               
     



           <View style={{flexDirection:'row',marginBottom:80,alignSelf:"center",marginTop:50}}>
               <Ripple rippleDuration={500} rippleColor={Color.maroon} style={{borderWidth:1,borderColor:Color.maroon,paddingHorizontal:10,justifyContent:"center",borderRadius:5,width:80,alignItems:"center",paddingVertical:4}}>
                   <Text style={{fontFamily:'Roboto-Regular',color:Color.maroon,fontSize:12}}>Back</Text>
               </Ripple>

               <Ripple rippleColor={Color.white} rippleDuration={500} style={{backgroundColor:Color.maroon,borderRadius:5,alignItems:"center",justifyContent:"center",marginLeft:10,width:80,paddingVertical:4,elevation:2,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:2}}>
                   <Text style={{color:Color.white,fontFamily:'Roboto-Regular',fontSize:12}}>Next</Text>
               </Ripple>
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
            flexDirection:'row',marginTop:10,justifyContent:"space-between"
        },
        txtinput:{
            borderWidth:1,width:200,borderColor:"#B5B5B5"
        }
  })