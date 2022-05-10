import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView,FlatList} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../../Utils/Dimension/index'
import {Color} from '../../../assets/Color/index'
import Subheader from '../../../Component/Subheader2/index'
import RNPickerSelect from 'react-native-picker-select';
import Selector from '../../../Component/Selector/index'
import Ripple from 'react-native-material-ripple';
import Table from '../../Table'
import CheckBox from '../../../Component/Checkbox2/index';
export default function Employeeupdtdcmnt({navigation}) {
    
    const [Items, setItems] = useState([
        {name: 'Desktop Study'},
        {name: 'Reconnaissance survey'},
        {name: 'Detail Route Survey'},
        {name: 'Soil Satisfaction Survey'},
        {name: 'Soil Corrosion Survey'},
        {name: 'Geotechnical Survey'},
        {name: 'Topographical Survey'},
        {name: 'Cadastral Survey Village Wise'},
        {name: 'Rou Detail'},
        {name: 'Crossing Documents'},
        {name: 'Forest Documents'},
        {name: 'SV/IP/RT Land Documents'},
        {name: 'Fund reimbursement'},
        {name: 'Raw Data'},
        {name: 'Forms'},
        {name: 'Soil Satisfaction Survey'},

    ]);
    const [selectedValue, setSelectedValue] = useState("java");
  return (
      <SafeAreaView style={{...styles.maincontainer}}>
          
          <Subheader/>
<View style={{...styles.heading}}>
    <TouchableOpacity activeOpacity={0.6}>
       <Text style={{...styles.txt2,fontSize:12}}>Project Management system  </Text>
       </TouchableOpacity>

     <Image style={{tintColor:"#197BBD"}} source={require("../../../assets/image/right.png")}/>
       <TouchableOpacity style={{}} activeOpacity={0.6}>
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:10,}}>Create Project </Text>
       </TouchableOpacity>
       
       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:30,}}>
           <Text style={{color:Color.headcolor,fontFamily:'Roboto-Bold',margin:10,fontSize:20}}>Add Project</Text>
           <View style={{height:30,backgroundColor:Color.maroon,justifyContent:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>

                   <Text style={{color:Color.white,fontFamily:'Roboto-Medium',marginLeft:10,fontSize:12}}> Page 2</Text>
                   </View>
               </View>
   
        <View style={{marginHorizontal:windowWidth/40,justifyContent:"center"}}>

               



            <View style={{...styles.prjctdetailcontainer,marginTop:20}}>
                <Text style={{...styles.txt3}}>Services</Text>
                <View style={{borderBottomWidth:1,borderColor:"#BFBFBF"}}> 
                <Text style={{fontSize:12,color:Color.darkgrey}}>Select the services for the project</Text>
                </View>
            </View>
 
     
                
<FlatList
numColumns={2}
contentContainerStyle={{width:"100%"}}
data={Items}


keyExtractor={(item,index)=>index.toString()}
renderItem={({item})=> (
    <View style={{flex:1}}>
        <View style={{flexDirection:"row",alignItems:"center",marginTop:10,paddingRight:25}}>
            
<CheckBox/>
            <Text style={{fontFamily:"Roboto-Medium",color:Color.headcolor,fontSize:12,marginLeft:4}}>{item.name}</Text>
            </View>
    </View>
)}
/>
       







             
       

            
        

             


                                           



           

            




            
        
                
                
               
       
                               

               




           <View style={{flexDirection:'row',marginBottom:80,alignSelf:"center",marginTop:100}}>
               <Ripple onPress={()=>navigation.goBack()} rippleDuration={500} rippleColor={Color.maroon} style={{borderWidth:1,borderColor:Color.maroon,paddingHorizontal:10,justifyContent:"center",borderRadius:2,width:80,alignItems:"center",paddingVertical:4}}>
                   <Text style={{fontFamily:'Roboto-Regular',color:Color.maroon,fontSize:12}}>Back</Text>
               </Ripple>

               <Ripple onPress={()=>navigation.navigate('page3')} rippleColor={Color.white} rippleDuration={500} style={{backgroundColor:Color.maroon,borderRadius:2,alignItems:"center",justifyContent:"center",marginLeft:10,width:80,paddingVertical:4,elevation:2,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:2}}>
                   <Text style={{color:Color.white,fontFamily:'Roboto-Regular',fontSize:12}}>Next</Text>
               </Ripple>
           </View>
             

       </View>

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
        marginVertical:10
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