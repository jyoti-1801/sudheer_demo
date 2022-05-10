import { View, Text } from 'react-native'
import React from 'react'
import Pie from 'react-native-pie'
import {Color} from '../../assets/Color/index'
export default function index() {
  return (
    <View>
      <Pie
              radius={100}
              innerRadius={50}
              sections={[
                {
                  percentage: 25,
                  color: Color.burgundy,
                },
                {
                  percentage: 20,
                  color: Color.lightpink,
                },
                {
                  percentage: 30,
                  color: Color.yellow,
                },
                {
                  percentage: 20,
                  color: Color.darkblue,
                },
                {
                  percentage: 5,
                  color: Color.headcolor,
                },
              ]}
              strokeCap={'butt'}
            />
    </View>
  )
}