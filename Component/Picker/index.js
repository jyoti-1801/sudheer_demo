import { View, Text,SafeAreaView,Platform} from 'react-native'
import React from 'react'
import {Picker,PickerIOS} from '@react-native-picker/picker';

export default function index() {
    const [selectedLanguage, setSelectedLanguage] = React.useState('2022');
  return (
    <SafeAreaView style={{alignItems:"center"}}>
        {Platform.OS ==='android' ?(
     <Picker itemStyle={{fontSize:13,fontFamily:'Roboto-Medium'}} style={{width:100,height:12,}}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item   label="2011" value="2011" />
  <Picker.Item label="2012" value="2012" />
  <Picker.Item   label="2013" value="2013" />
  <Picker.Item label="2014" value="2014" />
  <Picker.Item   label="2015" value="2015" />
  <Picker.Item label="2016" value="2016" />
  <Picker.Item   label="2017" value="2017" />
  <Picker.Item label="2018" value="2018" />
  <Picker.Item   label="2019" value="2019" />
  <Picker.Item label="2020" value="2020" />
  <Picker.Item label="2021" value="2021" />
  <Picker.Item label="2022" value="2022" />
</Picker>
        ): 
        <Picker itemStyle={{fontSize:13,fontFamily:'Roboto-Medium'}} style={{width:100,marginTop:-85}}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedLanguage(itemValue)
  }>
  <Picker.Item   label="2011" value="2011" />
  <Picker.Item label="2012" value="2012" />
  <Picker.Item   label="2013" value="2013" />
  <Picker.Item label="2014" value="2014" />
  <Picker.Item   label="2015" value="2015" />
  <Picker.Item label="2016" value="2016" />
  <Picker.Item   label="2017" value="2017" />
  <Picker.Item label="2018" value="2018" />
  <Picker.Item   label="2019" value="2019" />
  <Picker.Item label="2020" value="2020" />
  <Picker.Item label="2021" value="2021" />
  <Picker.Item label="2022" value="2022" />
</Picker>
}
    </SafeAreaView>
  )
}