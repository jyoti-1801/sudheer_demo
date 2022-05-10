import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import Navigation from './Component/Navigation/Route'
import {Provider} from 'react-redux';
import {Store} from './redux/store';
export default function App() {
  return (
    <Provider store={Store}>
    <View style={{flex:1}}>
      <StatusBar backgroundColor='white' barStyle='dark-content' />
     <Navigation/>
    </View>
    </Provider>
  )
}