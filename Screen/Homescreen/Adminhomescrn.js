import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import {windowHeight,windowWidth} from '../../Utils/Dimension/index'
import {Color} from '../../assets/Color/index'
import Pie from '../../Component/poiechart/index'

import Selector from '../../Component/Selector/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Index({navigation}) {
  useEffect(() => {
    getdata();
  }, []);

const [data,setData]= useState ({
  email:"",
  password: '',

  })

  const getdata = () => {
    try {
      AsyncStorage.getItem('UserData')

        .then(value => {
          if (value != null) {
         setData(value)
          }
        }

        )
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView style={{flex:1,flexDirection:"column",marginHorizontal:windowWidth/25,marginTop:10}}>
      <ScrollView>
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
<View style={{marginVertical:30}}>
      <View style={{flexDirection:"row"}}>
          <View style={{width:150,height:130,backgroundColor:Color.white,elevation:5,width:"40%",borderRadius:10,shadowOffset:{width:2,height:5},shadowOpacity:0.3,shadowRadius:2,alignItems:'center'}}>
            <View style={{alignItems:"center",marginTop:25}}>
            <Text style={{fontFamily:"Roboto-Regular",fontSize:16}}>Total Project</Text>
              <Text style={{marginTop:20,color:Color.headcolor,fontFamily:"Roboto-Bold",fontSize:22}}>20</Text>
            </View>
              
            </View>


          <View style={{width:150,height:130,backgroundColor:Color.white,elevation:5,width:"40%",marginLeft:'20%',borderRadius:10, shadowOffset:{width:2,height:5},shadowOpacity:0.3,shadowRadius:2,alignItems:'center'}}>
            <View style={{alignItems:"center",marginTop:25}}>
          <Text style={{fontFamily:"Roboto-Regular",fontSize:16}}>Total Client</Text>
          <Text style={{marginTop:20,color:Color.headcolor,fontFamily:"Roboto-Bold",fontSize:22}}>100</Text>
          </View>
            </View>
      </View>

      <View style={{flexDirection:"row",marginTop:30}}>
          <View style={{width:150,height:130,backgroundColor:Color.white,elevation:5,width:"40%",borderRadius:10,shadowOffset:{width:2,height:5},shadowOpacity:0.3,shadowRadius:2,alignItems:'center'}}>
          <View style={{alignItems:"center",marginTop:25}}>
          <Text style={{fontFamily:"Roboto-Regular",fontSize:16}}>Total Employee</Text>
          <Text style={{marginTop:15,color:Color.headcolor,fontFamily:"Roboto-Bold",fontSize:22}}> ₹250</Text>
          <View style={{width:60,height:18,backgroundColor:Color.lightblue,marginTop:10,borderRadius:5}}></View>
          </View>
            </View>



          <View style={{width:150,height:130,backgroundColor:Color.white,elevation:5,width:"40%",marginLeft:'20%',borderRadius:10,shadowOffset:{width:2,height:5},shadowOpacity:0.3,shadowRadius:2,alignItems:'center'}}>
          <View style={{alignItems:"center",marginTop:25}}>
          <Text style={{fontFamily:"Roboto-Regular",fontSize:16}}>Revenue</Text>
          <Text style={{marginTop:15,color:Color.headcolor,fontFamily:"Roboto-Bold",fontSize:22}}> ₹2500</Text>
   
          {/* <View style={{width:60,height:18,backgroundColor:Color.lightblue,marginTop:10,borderRadius:5,alignItems:"center",justifyContent:"center",}}> */}
          
 
          {/* <SelectPicker style={{width:'auto',height:"auto",backgroundColor:"red"}} selectedValue={PickerValue} onValueChange={(itemvalue)=>setPickervalue(itemvalue)}>
             <SelectPicker.Item label='javascript' value='javascript'/>
             <SelectPicker.Item label='vvfyggy' value='hvhyyhgy'/>
             <SelectPicker.Item label='javascript' value='javascript'/>
             <SelectPicker.Item label='javascript' value='javascript'/>
           </SelectPicker> */}
           
            {/* </View> */}
            <Selector/>
          </View>
          <View style={{}}>
         
          </View>
            </View>


      </View>
</View>


    <View style={{height:280,backgroundColor:Color.white,borderRadius:10,elevation:5,marginTop:20,borderColor:Color.darkgrey,alignItems:"center",justifyContent:"center",shadowOffset:{width:2,height:5} ,shadowOpacity:0.3,shadowRadius:2,borderWidth:0.8}}>
      <Text style={{position:"absolute",left:10,top:5,fontFamily:'Roboto-Medium',color:Color.headcolor,fontSize:17}}>Project Type</Text>
      <Pie/>
      <View style={{flexDirection:"row",position:"absolute",bottom:10,justifyContent:'space-between',paddingHorizontal:20}}>
         <View style={{flexDirection:"row",alignItems:'center'}}>
             <View style={{width:10,height:10,backgroundColor:Color.yellow}}></View>
             <Text style={{marginLeft:10,fontSize:10,fontFamily:"Roboto-Regular"}}>Category 1</Text>
         </View>

         <View style={{flexDirection:"row",alignItems:'center',marginLeft:10}}>
             <View style={{width:10,height:10,backgroundColor:Color.burgundy}}></View>
             <Text style={{marginLeft:10,fontSize:10,fontFamily:"Roboto-Regular"}}>Category 2</Text>
         </View>

         <View style={{flexDirection:"row",alignItems:'center',marginLeft:10}}>
             <View style={{width:10,height:10,backgroundColor:Color.lightpink}}></View>
             <Text style={{marginLeft:10,fontSize:10,fontFamily:"Roboto-Regular"}}>Category 3</Text>
         </View>

         <View style={{flexDirection:"row",alignItems:'center',marginLeft:10}}>
             <View style={{width:10,height:10,backgroundColor:Color.darkblue}}></View>
             <Text style={{marginLeft:10,fontSize:10,fontFamily:"Roboto-Regular"}}>Category 4</Text>
         </View>


         <View style={{flexDirection:"row",alignItems:'center',marginLeft:10}}>
             <View style={{width:10,height:10,backgroundColor:Color.headcolor}}></View>
             <Text style={{marginLeft:10,fontSize:10,fontFamily:"Roboto-Regular"}}>Category 5</Text>
         </View>
      </View>
      </View>
    
      
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headercontainer:{
  flexDirection:"row",alignItems:'center',justifyContent:"space-between"
  }
})