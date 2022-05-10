import { View, Text ,SafeAreaView,ScrollView,StyleSheet,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import {windowHeight,windowWidth} from "../../Utils/Dimension/index"
import { Color } from '../../assets/Color'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'
export default function index() {
  const Data= [
    
    {
      id:'1',
      heading1:'S.NO',
      heading2:'Land Information',
      heading3:'Village Details',
      heading4:'S.O Details',
      
      serial1:'1.',
      serial2:'2.',
      serial3:'3.',
      serial4:'4.',
      serial5:'5.',
      serial6:'6.',
      serial7:'7.',
      serial8:'8.',
      serial9:'9.',
      serial10:'10.',
      img:require('../../assets/image/docs.png')
    },
    // {
    //   id:'2',
    //   heading1:'S.NO',
    //   heading2:'Land Information',
    //   heading3:'Village Details',
    //   heading4:'S.O Details',
      
    //   serial1:'1.',
    //   serial2:'2.',
    //   serial3:'3.',
    //   serial4:'4.',
    //   serial5:'5.',
    //   serial6:'6.',
    //   serial7:'7.',
    //   serial8:'8.',
    //   serial9:'9.',
    //   img:require('../../assets/image/docs.png')
    // },
    // {
    //   id:'3',
    //   heading1:'S.NO',
    //   heading2:'Land Information',
    //   heading3:'Village Details',
    //   heading4:'S.O Details',
      
    //   serial1:'1.',
    //   serial2:'2.',
    //   serial3:'3.',
    //   serial4:'4.',
    //   serial5:'5.',
    //   serial6:'6.',
    //   serial7:'7.',
    //   serial8:'8.',
    //   serial9:'9.',
    //   img:require('../../assets/image/docs.png')
    // },
    // {
    //   heading1:'S.NO',
    //   heading2:'Land Information',
    //   heading3:'Village Details',
    //   heading4:'S.O Details',
      
    //   serial1:'1.',
    //   serial2:'2.',
    //   serial3:'3.',
    //   serial4:'4.',
    //   serial5:'5.',
    //   serial6:'6.',
    //   serial7:'7.',
    //   serial8:'8.',
    //   serial9:'9.',
    //   img:require('../../assets/image/docs.png')
    // },
    // {
    //   heading1:'S.NO',
    //   heading2:'Land Information',
    //   heading3:'Village Details',
    //   heading4:'S.O Details',
    //   serial1:'1.',
    //   serial2:'2.',
    //   serial3:'3.',
    //   serial4:'4.',
    //   serial5:'5.',
    //   serial6:'6.',
    //   serial7:'7.',
    //   serial8:'8.',
    //   serial9:'9.',
    //   img:require('../../assets/image/docs.png')
    // },
  ]
  const TableList =() => {
    return(
      <View>
        {Data.map((item,index) =>(
          <View key={index}>
            <View style={{height:300,backgroundColor:"white",elevation:8,shadowOffset:{width:2,height:3},shadowOpacity:0.6,shadowRadius:5,borderRadius:10}}>
            <View style={{height:25,backgroundColor:Color.maroon,borderTopEndRadius:10,borderTopStartRadius:10}}></View>
            <ScrollView  scrollEventThrottle={16} showsHorizontalScrollIndicator={false} bounces={false} horizontal={true} style={{backgroundColor:Color.white,borderBottomLeftRadius:10,borderBottomRightRadius:10,flex:1}}>


        <View  style={{flexDirection:"row"}} contentContainerStyle={{}}>




                                           {/* // S.NO INFORMATION // */}

          <View style={{borderRightWidth:2,width:80,borderBottomWidth:0,borderLeftWidth:0,borderTopWidth:0,borderColor:"#EFEFEF"}}>
           
          <Text style={{...styles.serial,backgroundColor:Color.white,borderBottomWidth:2,borderColor:"#EFEFEF",textAlign:'left'}}>{item.heading1}</Text>
        
          <View style={{...styles.Snocontainer,}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial1}</Text>
         </View>  
                 
         <View style={{...styles.Snocontainer,backgroundColor:Color.white}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial2}</Text>
         </View> 

                
         <View style={{...styles.Snocontainer}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial3}</Text>
         </View>  

       <View style={{...styles.Snocontainer,backgroundColor:Color.white}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial4}</Text>
         </View> 

         
       <View style={{...styles.Snocontainer}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial5}</Text>
         </View>  

         <View style={{...styles.Snocontainer,backgroundColor:Color.white}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial6}</Text>
         </View>  

                 
       <View style={{...styles.Snocontainer}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial7}</Text>
         </View>  

       
         <View style={{...styles.Snocontainer,backgroundColor:Color.white}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial8}</Text>
         </View>  

         <View style={{...styles.Snocontainer}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial9}</Text>
         </View> 

         <View style={{...styles.Snocontainer,backgroundColor:Color.white,borderBottomLeftRadius:10}}> 
          <Text style={{...styles.serial,marginLeft:10}}>{item.serial10}</Text>
         </View> 
         
          </View>
         
          
                                  {/* // LAND INFORMATION // */}
        
          <View style={{borderWidth:1,width:100,borderLeftWidth:0,alignItems:"center",borderTopWidth:0,borderBottomWidth:0,borderColor:"#EFEFEF"}}>

          <Text style={{...styles.serial,backgroundColor:Color.white,borderBottomWidth:2,borderColor:"#EFEFEF",textAlign:"center"}}>{item.heading2}</Text>
        
          <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>   
        
         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  

         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  

         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  

         
         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  

         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  

                 
         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  

       
         <TouchableOpacity activeOpacity={0.6}style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>   

         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  

         <TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </TouchableOpacity>  


          </View>


                                              {/* //  VILLAGE DETAIL  // */}
        

         
                  <View style={{borderWidth:1,width:100,borderLeftWidth:0,alignItems:"center",borderTopWidth:0,borderBottomWidth:0,borderColor:"#EFEFEF"}}>

<Text style={{...styles.serial,backgroundColor:Color.white,borderBottomWidth:2,borderColor:"#EFEFEF",textAlign:"center"}}>{item.heading3}</Text>

<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>   

<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  

<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  

<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  


<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  

<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  

       
<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  


<TouchableOpacity activeOpacity={0.6}style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>   

<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center'}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  

<TouchableOpacity activeOpacity={0.6} style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
<Image style={{...styles.img}} source={item.img}/>
</TouchableOpacity>  


</View>


                                              {/* // SO DETAIL // */}

           
    <View style={{borderWidth:1,width:100,borderLeftWidth:0,alignItems:"center",borderTopWidth:0,borderBottomWidth:0,borderColor:"#EFEFEF"}}>

    <Text style={{...styles.serial,backgroundColor:Color.white,borderBottomWidth:2,borderColor:"#EFEFEF",textAlign:"center"}}>{item.heading4}</Text>
   
     <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>  
            
    <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>  

    <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View> 

    <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>  
    
    <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View> 

    <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>  

            
    <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>  

  
    <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>   

    <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>   


    <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View> 

     </View>

                                       {/* // SO DETAIL // */}
     
          


           
          <View style={{borderWidth:1,width:100,borderLeftWidth:0,alignItems:"center",borderTopWidth:0,borderBottomWidth:0,borderColor:"#EFEFEF",justifyContent:"center"}}>
          <Text style={{...styles.serial,backgroundColor:Color.white,borderBottomWidth:2,borderColor:"#EFEFEF",textAlign:"center"}}>{item.heading4}</Text>
        
          <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View>  
                 
         <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View>  

         <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View> 

         <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View>  
         
         <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View> 

         <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View>  

                 
         <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View>  

       
         <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
          <Image style={{...styles.img}} source={item.img}/>
         </View>   

         <View style={{...styles.Snocontainer,justifyContent:'center'}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View>   

    <View style={{...styles.Snocontainer,justifyContent:'center',backgroundColor:Color.white}}> 
     <Image style={{...styles.img}} source={item.img}/>
    </View> 

          </View>
          </View>


<View>
  
</View>


         

        </ScrollView>
              </View>
          </View>
        )
        
        )}
      </View>
    )
  }
  return (
    <SafeAreaView style={{flex:1,marginTop:10}}>
   
    <TableList/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  serial:{
    color:Color.headcolor,fontSize:12,fontFamily:"Roboto-Medium",width:"100%",flex:1
  },

  Snocontainer:{
    backgroundColor:"#FCE8E7",width:"100%",height:25,alignItems:"center"
  },
  img:{
    width:15,height:15,tintColor:Color.maroon
  }
})