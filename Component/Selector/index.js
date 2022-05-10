import { View, Text, SafeAreaView,Image,StyleSheet,TouchableOpacity,TextInput,Platform,ScrollView,Alert} from 'react-native'
import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
export default function index() {
    const Choose= ()=>{
    Alert.alert("Choose Payment Method")
    
    }
  return (
      <SafeAreaView>
    <View style={{...styles.selector}}>
              {Platform.OS=== 'ios' ?
              <Image style={{...styles.img}} source={require("../../assets/image/down.png")}/>:null
    }
           <RNPickerSelect
           style={{marginLeft:10}}
        
           onOpen={Choose}
            doneText='Select'
           
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        /> 
        </View>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    selector:{
        height:25,alignItems:"center",justifyContent:"center",width:'100%'
    },
    img:{
        position:"absolute",right:12
    }
})