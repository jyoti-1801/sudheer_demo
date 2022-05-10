import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView} from 'react-native'
import React,{useState} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'
import Subheader from '../../Component/Subheader2/index'
import RNPickerSelect from 'react-native-picker-select';
import Selector from '../../Component/Selector/index'
import Ripple from 'react-native-material-ripple';
import { RadioButton } from 'react-native-paper';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function Searchdocadmin({navigation}) {
    
    const showDatePicker = () => {
     setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
        setDatePickerVisibility(false);
      }
  const handleConfirm = (date) => {
         console.warn("A date has been picked: ", date);
        hideDatePicker();
      };
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [checked, setChecked] = useState('first');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
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
       <Text style={{color:Color.maroon,fontFamily:'Roboto-Medium',fontFamily:'Roboto-Medium',fontSize:13,margin:8,marginHorizontal:windowWidth/25}}>Search </Text>
       </TouchableOpacity>

       </View>
       <View style={{marginHorizontal:windowWidth/25,backgroundColor:Color.white,elevation:10,borderRadius:10,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:10,marginBottom:30}}>
           <Text style={{color:Color.headcolor,fontFamily:'Roboto-Bold',margin:10,fontSize:20}}>Document Management System Search</Text>
           <View style={{height:30,backgroundColor:Color.maroon,justifyContent:"center"}}>
               <View style={{flexDirection:"row",alignItems:"center",marginLeft:10}}>
                   <Image style={{tintColor:Color.white,}} source={require("../../assets/image/filter1.png")}/>
                   <Text style={{color:Color.white,fontFamily:'Roboto-Medium',marginLeft:10,fontSize:12}}> Filter</Text>
                   </View>
                   
               </View>
   
          <View style={{marginTop:30}}>
             <Text style={{...styles.txt}}>Display order</Text>

             <View style={{...styles.radiobtncontainer,}}>
                 <View style={{flexDirection:"row",alignItems:"center",width:'65%'}}>
                     <RadioButton
                     color={Color.maroon}
                         value="second"
                          status={ checked === 'second' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('second')}
                     />
                     <Text style={{...styles.txt,fontFamily:"Roboto-Medium",marginLeft:0}}>File Name</Text>
                 </View>

                 <View style={{flexDirection:"row",alignItems:"center",width:"35%"}}>
                     <RadioButton
                     color={Color.maroon}
                         value="second"
                          status={ checked === 'second' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('second')}
                     />
                     <Text style={{...styles.txt,fontFamily:"Roboto-Medium",marginLeft:0}}>By Keyword</Text>
                 </View>
     </View>




     <View style={{...styles.radiobtncontainer,}}>
                 <View style={{flexDirection:"row",alignItems:"center",width:"45%"}}>
                     <RadioButton
                     color={Color.maroon}
                         value="second"
                          status={ checked === 'second' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('second')}
                     />
                     <Text style={{...styles.txt,fontFamily:"Roboto-Medium",marginLeft:0,fontFamily:"Roboto-Medium"}}>Upload Date</Text>
                       
                 </View>

                 <View style={{flexDirection:'row',width:'60%',alignItems:'center'}}>
                           <Text style={{...styles.txt,fontFamily:"Roboto-Medium"}}>From</Text>
                           <TouchableOpacity onPress={showDatePicker}  activeOpacity={0.5} style={{borderWidth:1,width:150,height:20,justifyContent:"center",marginLeft:10}}>
                               <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                               <Text style={{fontFamily:"Roboto-Regular",fontSize:12,paddingLeft:5}}>Select Date</Text>  
                               <Image  style={{tintColor:Color.maroon}} source={require("../../assets/image/down.png")}/>
                               </View>
                               <DateTimePickerModal
                               isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
       />
                               </TouchableOpacity>
                       </View>

              
     </View>
    
     <View style={{flexDirection:'row',marginLeft:'50%',alignItems:'center',marginTop:10}}>
                           <Text style={{...styles.txt,fontFamily:"Roboto-Medium",}}>To</Text>
                           <TouchableOpacity onPress={showDatePicker}  activeOpacity={0.5} style={{borderWidth:1,width:150,height:20,justifyContent:"center",marginLeft:10}}>
                               <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                               <Text style={{fontFamily:"Roboto-Regular",fontSize:12,paddingLeft:5}}>Select Date</Text>  
                               <Image  style={{tintColor:Color.maroon}} source={require("../../assets/image/down.png")}/>
                               </View>
                               <DateTimePickerModal
                               isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
       />
                               </TouchableOpacity>
                       </View>
     <View style={{...styles.radiobtncontainer,marginTop:10}}>
                 <View style={{flexDirection:"row",alignItems:"center",width:"55%"}}>
                     <RadioButton
                     color={Color.maroon}
                         value="second"
                          status={ checked === 'second' ? 'checked' : 'unchecked' }
                           onPress={() => setChecked('second')}
                     />
                     <Text style={{...styles.txt,fontFamily:"Roboto-Medium",marginLeft:0,fontFamily:"Roboto-Medium"}}>Uploaded By</Text>
                       
                 </View>

                 <View style={{flexDirection:'row',width:'45%',alignItems:'center'}}>
                          
                           <TouchableOpacity   activeOpacity={0.5} style={{borderWidth:1,width:150,height:20,justifyContent:"center",marginLeft:10}}>
                               <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                               <Text style={{fontFamily:"Roboto-Regular",fontSize:12,paddingLeft:5}}>Select uploaded by</Text>  
                               <Image  style={{tintColor:Color.maroon}} source={require("../../assets/image/down.png")}/>
                               </View>
                               
       
                               </TouchableOpacity>
                       </View>

              
     </View>




 
                
    
          </View>
        <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false} contentContainerStyle={{}}>

      
     

<Ripple onPress={()=>{}} rippleColor={Color.white} rippleDuration={500} style={{...styles.btncontainer}}>
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:'space-around'}}>
    <Image style={{tintColor:Color.white}} source={require("../../assets/image/search2.png")}/>
  <Text style={{...styles.btntxt}}>Search</Text>
  </View>
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
            flexDirection:'row',marginTop:20,alignItems:"center",paddingHorizontal:10
        },
        chckboxwithtxtcontainer:{
            flexDirection:"row",alignItems:"center",width:"30%"
        },
        txt:{
          fontFamily:'Roboto-Medium',color:'#585858',fontSize:14,marginLeft:5
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
        },
        radiobtncontainer:{
            flexDirection:'row',width:"100%"
        }
  })

