import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'
import { Color } from '../../assets/Color'
import CheckBox from '@react-native-community/checkbox';
import {windowWidth,windowHeight} from '../../Utils/Dimension/index'
export default function Checkbox() {
    const [toggleCheckBox, setToggleCheckBox] = React.useState(false)
  return (
   <SafeAreaView style={{flex:1}}>
     

<CheckBox
boxType='square'
tintColors={{ true: Color.maroon, false: 'black' }}
onFillColor={Color.maroon}
onCheckColor={Color.white}
  disabled={false}
  value={toggleCheckBox}
  onValueChange={(newValue) => setToggleCheckBox(newValue)}
/>
      </SafeAreaView>
  )
}